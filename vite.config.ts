import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import {
  presetWind,
  presetAttributify,
  presetIcons,
  presetWebFonts,
} from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        // write attributes directly
        presetAttributify(),
        // css icons support
        presetIcons(),
        // css grammar support
        presetWind(),
        // webfont support
        presetWebFonts({
          provider: "google", // default provider
          fonts: {
            // these will extend the default theme
            cons: "Consolas",
            mono: ["Fira Code", "Fira Mono:400,700"],
            // custom ones
            lobster: "Lobster",
            lato: [
              {
                name: "Lato",
                weights: ["400", "700"],
                italic: true,
              },
              {
                name: "sans-serif",
                provider: "none",
              },
            ],
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
