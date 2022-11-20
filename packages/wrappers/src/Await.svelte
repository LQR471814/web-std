<script lang="ts">
type T = $$Generic

let value: T | undefined = undefined
let resolved = false
let error: Error | undefined = undefined

export let promise: Promise<T>

promise.then((v) => {
  resolved = true
  value = v
}).catch((e) => {
  error = e
})
</script>

<slot {value} {resolved} {error} />
