import adapter from "svelte-adapter-github"
import path from "path"
import preprocess from "svelte-preprocess"

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [],
			resolve: {
				alias: {
					src: path.resolve("./src")
				}
			}
		}
	},
	preprocess: preprocess()
}

if (process.env.NODE_ENV === "production") {
	config.kit.paths = { base: "/instant-css" }
}

export default config
