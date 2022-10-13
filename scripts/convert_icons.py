from os import listdir, mkdir
from os.path import join

import lxml.etree as etree

def main():
    source = "assets/icons"
    destination = "packages/icons"
    template = "packages/_Icon.svelte"

    default_content = ""
    with open(template, "r") as f:
        default_content = f.read()

    for category in listdir(source):
        processed: dict[str, str] = {}

        for icon in listdir(join(source, category)):
            filename, _ = icon.split(".")

            segments = filename.split("-")
            variant = segments.pop()
            component_name = "".join([s.capitalize() for s in segments])

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

                location = join(destination, component_name)
                if location not in processed:
                    processed[location] = default_content

                processed[location] = processed[location].replace(
                    f"[{variant.upper()}_SVG_CONTENT]", svg_content)

        for location in processed:
            with open(f"{location}.svelte", mode="w") as f:
                f.write(processed[location])

if __name__ == "__main__":
    main()
