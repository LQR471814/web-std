import json
import copy
from os import listdir
from os.path import isdir, isfile, join, splitext, split, sep
from typing import Any, Callable

extensions = [".svelte", ".ts"]
package_template: dict[str, Any] = {}


def match_file(entry: str) -> bool:
    if entry.startswith("_"):
        return False
    for e in extensions:
        if entry.endswith(e):
            return True
    return False


def walk(directory: str, ondir: Callable[[str], None]) -> None:
    for entry in listdir(directory):
        path = join(directory, entry)
        if isdir(path):
            ondir(path)
            walk(path, ondir)


def package_name(directory: str) -> str:
    return join(
        package_template["name"],
        *(directory.split(sep)[1:]),
    ).replace("\\", "/")


def main() -> None:
    packages = []
    for entry in listdir("packages"):
        path = join("packages", entry)
        if isdir(path):
            packages.append(path)

    dependencies: dict[str, str] = {}
    for p in packages:
        _, base = split(p)
        dependencies[package_name(p)] = f"link:../{base}"

    def generate_index(directory: str) -> None:
        is_svelte = False
        files: list[str] = []

        for entry in listdir(directory):
            if isfile(join(directory, entry)) and match_file(entry):
                if entry.endswith(".svelte"):
                    is_svelte = True
                    files.append(entry)

        package_json = copy.deepcopy(package_template)
        package_json["name"] = package_name(directory)
        for k, v in dependencies.items():
            if k != package_json["name"]:
                package_json["dependencies"][k] = v

        if is_svelte:
            package_json["svelte"] = "index.ts"

            index_path = join(directory, "index.ts")
            index_contents = []
            for f in files:
                name, _ = splitext(f)
                index_contents.append(
                    f"export {{ default as {name} }} from \"./{f}\"")

            with open(index_path, "w") as index_file:
                index_file.write("\n".join(index_contents))

        with open(join(directory, "package.json"), "w") as package_file:
            package_file.write(json.dumps(package_json))

    for p in packages:
        generate_index(p)


if __name__ == "__main__":
    with open("package.template.json", "r") as f:
        package_template = json.loads(f.read())
    main()
