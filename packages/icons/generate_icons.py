from os import listdir
from os.path import join
import re

import lxml.etree as etree

number = re.compile(r"[0-9]")

def main():
    source = "icons"
    destination = "src/"
    template = "src/_Icon.svelte"

    default_content = ""
    with open(template, "r") as f:
        default_content = f.read()

    for category in listdir(source):
        processed: dict[str, str] = {}

        for icon in listdir(join(source, category)):
            filename = ".".join(icon.split(".")[:-1])

            segments = filename.split("-")
            variant = segments.pop()
            name = "-".join(segments)
            if len(name) == 0:
                continue

            with open(join(source, category, icon), mode="r") as icon_file:
                svg_content = ""
                doc = etree.HTML(icon_file.read())

                g = doc.iterfind(".//path")
                if g is None:
                    print(
                        f"WARNING: could not find <svg> contents in {category}/{icon}")
                    continue
                for child in g:
                    svg_content += etree.tostring(child).decode('utf8').strip()

                if name not in processed:
                    processed[name] = default_content

                processed[name] = processed[name].replace(
                    f"[{variant.upper()}_SVG_CONTENT]", svg_content)

        for name in processed:
            prefix = ""
            if number.match(name[0]):
                prefix = "i-"
            with open(join(destination, f"{prefix}{name}.icon.svelte"), mode="w") as f:
                f.write(processed[name])

if __name__ == "__main__":
    main()
