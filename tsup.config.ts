import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  bundle: false,
  treeshake: true,
  format: ["esm", "cjs"],
});
