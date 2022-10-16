ICON_VERSION = v2.5.0
PYTHON = python3

# * package generation
packages:
	mkdir packages
	cp src/**/[!_]*.{ts,svelte} packages/

packages/icons: packages
	mkdir packages/icons

# * icon generation
assets:
	mkdir assets

assets/icons: assets
	wget https://github.com/Remix-Design/RemixIcon/releases/download/$(ICON_VERSION)/RemixIcon_SVG_$(ICON_VERSION).zip
	unzip -q RemixIcon_SVG_$(ICON_VERSION).zip
	mv icons assets/icons
	rm RemixIcon_SVG_$(ICON_VERSION).zip

icons: assets/icons packages/icons
	$(PYTHON) scripts/convert_icons.py
	rm -rf assets

# * cleanup
clean:
	rm -rf packages
