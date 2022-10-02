## web-std

> a collection of utilities I always end up copying or reimplementing in other projects.

this library goes well with the [tsvt-template](https://github.com/LQR471814/tsvt-template.git)

### technologies

| framework | language | css |
| --- | --- | --- |
| svelte | typescript | tailwind |

the typescript utilities can be used independently, however if you wish to use the svelte components, make sure to include all the other technologies

### icon conversion

icons come from [RemixIcon](https://remixicon.com/), which are converted to svelte components based on the [`_Icon.svelte`](src/icons/_Icon.svelte) template. to do this, run `make icons` (within a git-bash instance if you're on windows).
