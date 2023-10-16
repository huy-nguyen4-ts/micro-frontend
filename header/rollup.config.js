import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import replace from "rollup-plugin-replace";

export default {
	input: "src/index.tsx",
	output: [
		{
			file: "dist/esm/index.js",
			format: "esm",
			sourcemap: true,
			name: "react-esm",
		},
		{
			file: "dist/umd/index.js",
			format: "umd",
			sourcemap: true,
			name: "react-umd",
			globals: {
				react: "React",
				"react-dom": "ReactDOM",
			},
		},
	],
	external: ["react", "react-dom"],
	plugins: [
		external(),
		replace({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		resolve({ browser: true, extensions: [".js", ".jsx", ".ts", ".tsx"] }),
		commonjs(),
		typescript({ tsconfig: "./tsconfig.json" }),
		postcss(),
		babel({
			exclude: "node_modules/**",
			babelHelpers: "bundled",
			presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
			extensions: [".js", ".jsx", ".ts", ".tsx"],
		}),
		terser(),
	],
};
