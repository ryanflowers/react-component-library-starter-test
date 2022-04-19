import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { visualizer } from "rollup-plugin-visualizer";

export default {
  input: "./src/index.ts",
  output: [
    // {
    //   file: packageJson.main,
    //   format: "cjs",
    //   sourcemap: true,
    // },
    {
      dir: "./build",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    visualizer(),
  ],
};
