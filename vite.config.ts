import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true, // จะสร้าง entry types ใน package.json อัตโนมัติ
    }),
  ],
  build: {
    lib: {
      entry: "index.ts",
      name: "VueSharedLib",
      fileName: (format) => `vue-shared-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
