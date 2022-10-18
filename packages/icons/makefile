ICON_VERSION = v2.5.0
PYTHON = python3

icons:
	wget https://github.com/Remix-Design/RemixIcon/releases/download/$(ICON_VERSION)/RemixIcon_SVG_$(ICON_VERSION).zip
	unzip -q RemixIcon_SVG_$(ICON_VERSION).zip
	rm RemixIcon_SVG_$(ICON_VERSION).zip

svelte-icons: icons
	$(PYTHON) generate_icons.py

clean:
	rm src/*.icon.svelte
	rm -rf icons
