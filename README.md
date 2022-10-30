## web-std

> a monorepo of utilities I always end up copying or reimplementing in other projects.

this library goes well with the [tsvt-template](https://github.com/LQR471814/tsvt-template.git)

when using the typescript packages, make sure to add

```json
{
  "compilerOptions": {
    "moduleResolution": "NodeNext"
  }
}
```

in your `tsconfig.json` file

### technologies

| framework | language | css |
| --- | --- | --- |
| svelte | typescript | tailwind |

the typescript utilities can be used independently, however if you wish to use the svelte components, make sure to include all the other technologies

### package index

| name | typescript | tailwind | svelte | description |
| --- | --- | --- | --- | --- |
| common | ✔ | ✘ | ✘ | commonly used DOM utilities |
| form | ✔ | ✔ | ✔ | svelte form components (text fields, inputs, etc...) |
| icons | ✔ | ✘ | ✔ | svelte wrappers for icons from RemixIcon |
| store | ✔ | ✘ | ✘ | stores for persistent and ephemeral storage |
| svelte-common | ✔ | ✘ | ✔ | commonly used, svelte specific utilities (hooks, actions) |
| utility | ✔ | ✔ | ✔ | general svelte components |
| wrappers | ✔ | ✔ | ✔ | higher-order svelte components |

### extending

the `scripts/` exist for convenience when adding new packages, execute them at the root of the directory

- `python3 scripts/add_package.py <package template> <package name>` - this adds or updates an existing package according to a template under `templates/`
- `python3 scripts/manage_index.py` - this updates the `index.ts` file for svelte packages or `package.json`'s `"exports"` field.

### icon conversion

icons come from [RemixIcon](https://remixicon.com/), which are converted to svelte components based on the [`_Icon.svelte`](src/icons/_Icon.svelte) template. to do this, run `make icons` (within a git-bash instance if you're on windows).
