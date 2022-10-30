import { IDBPDatabase, openDB } from "idb"

export interface WithID {
    id: string
}

export interface BinarySerializable<T> {
    fromBinary(bin: Uint8Array): T
    toBinary(value: T): Uint8Array
}

export interface DB<T> {
    load(): Promise<T[]>
    set(piece: T): Promise<void>
    remove(piece: T): Promise<void>
}

type Data = { id: string, serialized: Uint8Array }

export class WebDB<T extends WithID> implements DB<T> {
    name = "pieces"
    db?: IDBPDatabase<Data>
    cls: BinarySerializable<T>

    constructor(cls: BinarySerializable<T>) {
        this.cls = cls
    }

    async load(): Promise<T[]> {
        this.db = await openDB("standards-utility", 1, {
            upgrade: db => {
                db.createObjectStore(this.name, { keyPath: "id" })
            }
        })
        return (await this.db.getAll(this.name))
            .map((v: Data) => this.cls.fromBinary(new Uint8Array(v.serialized)))
    }

    async set(piece: T): Promise<void> {
        if (!this.db) {
            throw new Error("store has not been loaded yet! please call load() first")
        }
        const tx = this.db.transaction(this.name, "readwrite")
        await tx.store.put({
            id: piece.id,
            serialized: this.cls.toBinary(piece).buffer
        })
        await tx.done
    }

    async remove(piece: T): Promise<void> {
        if (!this.db) {
            throw new Error("store has not been loaded yet! please call load() first")
        }
        const tx = this.db.transaction(this.name, "readwrite")
        await tx.store.delete(piece.id)
        await tx.done
    }
}
