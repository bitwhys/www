// @ts-check
import { defineConfig } from "astro/config"
import { fontProviders } from "astro/config"
import expressiveCode from "astro-expressive-code"
import { createInlineSvgUrl } from "astro-expressive-code"

import tailwindcss from "@tailwindcss/vite"

import mdx from "@astrojs/mdx"

const copyIconSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M172,164a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,164Zm-12-52H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm60-64V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V48A20,20,0,0,1,56,28H90.53a51.88,51.88,0,0,1,74.94,0H200A20,20,0,0,1,220,48ZM100.29,60h55.42a28,28,0,0,0-55.42,0ZM196,52H178.59A52.13,52.13,0,0,1,180,64v8a12,12,0,0,1-12,12H88A12,12,0,0,1,76,72V64a52.13,52.13,0,0,1,1.41-12H60V212H196Z"></path></svg>`

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

  integrations: [
    expressiveCode({
      themes: ["dark-plus", "everforest-light"],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `[data-theme='${theme.name}']`,
      styleOverrides: {
        borderColor: ["var(--white-a3)", "var(--color-brd-control)"],
        frames: {
          editorBackground: ["var(--color-gray-a2)", "var(--white-a12)"],
          shadowColor: ["var(--black-a11)", "var(--black-a2)"],
          editorTabBarBackground: ["", "var(--color-gray-6)"],
          editorActiveTabBackground: ["", "var(--color-gray-3)"],
          editorActiveTabIndicatorBottomColor: ["", "var(--color-brand-8)"],
        },
        borderRadius: "var(--radius-xl)",
      },
    }),
    mdx(),
  ],
})
