// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "VisbyCF",
        cssVariable: "--visby-font",
        variants: [
          {
            src: [
              "./src/assets/fonts/visby/VisbyCF-Heavy.woff2",
              "./src/assets/fonts/visby/VisbyCF-Heavy.woff",
            ],
            weight: 900,
            style: "normal",
            display: "swap",
          },
          {
            src: [
              "./src/assets/fonts/visby/VisbyCF-Bold.woff2",
              "./src/assets/fonts/visby/VisbyCF-Bold.woff",
            ],
            weight: 800,
            style: "normal",
            display: "swap",
          },
          {
            src: [
              "./src/assets/fonts/visby/VisbyCF-Medium.woff2",
              "./src/assets/fonts/visby/VisbyCF-Medium.woff",
            ],
            weight: 500,
            style: "normal",
            display: "swap",
          },
          {
            src: [
              "./src/assets/fonts/visby/VisbyCF-Regular.woff2",
              "./src/assets/fonts/visby/VisbyCF-Regular.woff",
            ],
            weight: 400,
            style: "normal",
            display: "swap",
          },

          {
            src: [
              "./src/assets/fonts/visby/VisbyCF-DemiBold.woff2",
              "./src/assets/fonts/visby/VisbyCF-DemiBold.woff",
            ],
            weight: 600,
            style: "normal",
            display: "swap",
          },
        ],
      },
      {
        provider: "local",
        name: "Geliat",
        cssVariable: "--geliat-font",
        variants: [
          {
            src: [
              "./src/assets/fonts/geliat-alt/Geliat-AltBlack.woff2",
              "./src/assets/fonts/geliat-alt/Geliat-AltBlack.woff",
            ],
            weight: 900,
            display: "swap",
          },
          {
            src: [
              "./src/assets/fonts/geliat-alt/Geliat-AltBold.woff2",
              "./src/assets/fonts/geliat-alt/Geliat-AltBold.woff",
            ],
            weight: 800,
            display: "swap",
          },
          {
            src: [
              "./src/assets/fonts/geliat-alt/Geliat-AltSemiBold.woff2",
              "./src/assets/fonts/geliat-alt/Geliat-AltSemiBold.woff",
            ],
            weight: 600,
            display: "swap",
          },
          {
            src: [
              "./src/assets/fonts/geliat-alt/Geliat-AltMedium.woff2",
              "./src/assets/fonts/geliat-alt/Geliat-AltMedium.woff",
            ],
            weight: 500,
            display: "swap",
          },
          {
            src: [
              "./src/assets/fonts/geliat-alt/Geliat-AltRegular.woff2",
              "./src/assets/fonts/geliat-alt/Geliat-AltRegular.woff",
            ],
            weight: 400,
            display: "swap",
          },
        ],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
