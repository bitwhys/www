// @ts-check
import { defineConfig } from "astro/config"
import { fontProviders } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://bitwhys.io",

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--geist-sans-font",
        weights: ["100 900"],
        display: "swap",
      },
      {
        provider: fontProviders.google(),
        name: "Geist Mono",
        cssVariable: "--geist-mono-font",
        weights: ["100 900"],
        display: "swap",
      },
      {
        provider: fontProviders.local(),
        name: "VisbyCF",
        cssVariable: "--visby-font",
        options: {
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
      },
      {
        provider: fontProviders.local(),
        name: "Bluu Next",
        cssVariable: "--bluu-next-font",
        options: {
          variants: [
            {
              src: [
                "./src/assets/fonts/bluu-next/bluunext-bold.ttf",
                "./src/assets/fonts/bluu-next/bluunext-bold-webfont.woff",
                "./src/assets/fonts/bluu-next/bluunext-bold-webfont.woff2",
              ],
              display: "swap",
            },
          ],
        },
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
