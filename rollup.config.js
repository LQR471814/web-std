import glob from "glob"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import svelte from "rollup-plugin-svelte"
import sveltePreprocess from "svelte-preprocess"

function transformFilename(name) {
  const segments = name.replace("src/", "build/").split(".")
  segments.pop()
  segments.push("js")
  return segments.join(".")
}

export default glob.sync("src/**/*.svelte").map(f => {
  return {
    input: f,
    output: {
      file: transformFilename(f),
      format: "es",
      sourcemap: true
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess({
          postcss: {
            plugins: [
              require('tailwindcss')(),
              require('autoprefixer')(),
            ]
          }
        })
      }),
      resolve(),
      typescript(),
    ]
  }
})
