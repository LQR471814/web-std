import json
from os import listdir
from os.path import join

from utils import to_pascal, packages


def run():
    for package in listdir(packages):
        svelte = False
        with open(join(packages, package, "package.json"), "r") as f:
            package_json = json.loads(f.read())
            if "svelte" in package_json:
                svelte = True

        if svelte:
            lines = []
            for name in listdir(join(packages, package, "src")):
                if name == "index.ts" or name[0] == "_":
                    continue
                if not (name.endswith(".svelte") or name.endswith(".ts")):
                    continue

                export_name = to_pascal(name.split(".")[0])
                if name.endswith(".svelte"):
                    lines.append(
                        f"export {{ default as {export_name} }} from \"./{name}\"")
                elif name.endswith(".ts"):
                    filename = '.'.join(name.split('.')[:-1])
                    lines.append(
                        f"export * as {export_name} from \"./{filename}\"")

            with open(join(packages, package, "src", "index.ts"), "w") as f:
                f.write("\n".join(lines))
        else:
            with open(join(packages, package, "package.json"), "r+") as f:
                package_json = json.loads(f.read())
                package_json["exports"] = {}

                for name in listdir(join(packages, package, "src")):
                    if not name.endswith(".ts"):
                        continue
                    # filename = '.'.join(name.split('.')[:-1])
                    package_json["exports"][f"./{name}"] = f"./src/{name}"

                f.seek(0)
                f.truncate()
                f.write(json.dumps(package_json, indent=2))


if __name__ == "__main__":
    run()
