ICON_VERSION = v2.5.0
PYTHON = python3

# * icon generation
setup:
	cd packages/icons && \
		make svelte-icons
	$(PYTHON) scripts/setup.py

# * cleanup
clean:
	rm -rf packages
