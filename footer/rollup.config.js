import resolve from "@rollup/plugin-node-resolve";
import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import replace from "rollup-plugin-replace";

export default {
	input: "src/index.ts",
	output: [
		{
			file: "dist/esm/index.js",
			format: "esm",
			sourcemap: true,
			name: "vue-lib",
		},
		{
			file: "dist/umd/index.js",
			format: "umd",
			sourcemap: true,
			name: "vue-umd",
		},
	],
	plugins: [
		vue(),
		external(),
		replace({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		resolve({ browser: true }),
		typescript({ tsconfig: "./tsconfig.json" }),
		commonjs(),
	],
};
