import re

packages = "packages"
templates = "templates"
organization = "@web-std"


number = re.compile(r"[0-9]")
words = re.compile(r"([A-Z][a-z]*)|([0-9]+)")


def to_pascal(name: str) -> str:
    portions = name.split("-")
    return "".join([p.capitalize() for p in portions])


def to_dashed(name: str) -> str:
    matches = words.findall(name)
    portions = []
    for match in matches:
        portions.append("".join(match).lower())
    return "-".join(portions)
