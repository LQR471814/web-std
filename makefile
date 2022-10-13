ICON_VERSION = v2.5.0
PYTHON = py

assets:
	mkdir assets

src/icons/components:
	mkdir src/icons/components

assets/icons: assets
	wget https://github.com/Remix-Design/RemixIcon/releases/download/$(ICON_VERSION)/RemixIcon_SVG_$(ICON_VERSION).zip
	unzip -q RemixIcon_SVG_$(ICON_VERSION).zip
	mv icons assets/icons
	rm RemixIcon_SVG_$(ICON_VERSION).zip

icons: assets/icons src/icons/components
	$(PYTHON) scripts/convert_icons.py
	rm -rf assets

clean:
	rm -rf packages/icons/*
