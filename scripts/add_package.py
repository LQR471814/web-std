import argparse
from copy import deepcopy
import json
from os import mkdir
from os.path import exists, join
from shutil import copytree

from utils import organization, packages, templates


json_configs = ["package.json", "tsconfig.json"]
base_json_configs: dict[str, dict] = {}
for name in json_configs:
    with open(join(templates, "base", name), "r") as f:
        base_json_configs[name] = json.loads(f.read())


def deep_apply(obj: dict, overrides: dict) -> None:
    for key in overrides:
        if not isinstance(overrides[key], dict):
            obj[key] = overrides[key]
            continue
        if key not in obj:
            obj[key] = {}
        deep_apply(obj[key], overrides[key])

def load_json_config(template: str, config: str):
    package_json = deepcopy(base_json_configs[config])
    with open(join(templates, template, config), "r") as f:
        overrides = json.loads(f.read())
        deep_apply(package_json, overrides)
    return package_json


def run(template: str, target: str):
    if not exists(join(packages, target)):
        copytree(
            join(templates, template),
            join(packages, target)
        )

    for config_name in json_configs:
        with open(join(packages, target, config_name), "w") as f:
            json_config = load_json_config(template, config_name)
            if config_name == "package.json":
                json_config["name"] = f"{organization}/{target}"
            f.write(json.dumps(json_config, indent=2))

    src_dir = join(packages, target, "src")
    if not exists(src_dir):
        mkdir(src_dir)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="add a package to the monorepo")
    parser.add_argument(
        "template", help="which subdirectory from 'templates/' to use")
    parser.add_argument("name", help="package name")
    args = parser.parse_args()
    run(args.template, args.name)
