// @ts-check
import { defineConfig } from "astro/config"
import { fontProviders } from "astro/config"
import mdx from "@astrojs/mdx"
import expressiveCode from "astro-expressive-code"
import remarkDirective from "remark-directive"
import remarkEmbeddedMedia from "./src/plugins/remark-embedded-media.mjs"

import tailwindcss from "@tailwindcss/vite"
import rehypeImageProcessor from "./src/plugins/rehype-image-processor.mjs"
import { imageConfig } from "./src/utils/image-config"

import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: "https://bitwhys.io",

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: imageConfig,
    },
  },

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

  markdown: {
    remarkPlugins: [remarkDirective, remarkEmbeddedMedia],
    rehypePlugins: [rehypeImageProcessor],
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
        borderColor: ["var(--white-a3)", "var(--color-brd-line)"],
        codeFontFamily: "var(--fonts-mono)",
        frames: {
          editorBackground: ["var(--color-gray-a2)", "var(--white-a12)"],
          shadowColor: ["var(--black-a11)", "var(--color-gray-3)"],
          editorTabBarBackground: "var(--color-gray-6)",
          editorActiveTabBackground: "var(--color-gray-3)",
          editorActiveTabIndicatorBottomColor: [
            "var(--color-brand-9)",
            "var(--color-brand-8)",
          ],
          terminalBackground: ["var(--color-gray-a2)", "var(--white-a12)"],
          terminalTitlebarBackground: "var(--color-gray-6)",
          terminalTitlebarDotsForeground: "var(--color-gray-9)",
          terminalTitlebarDotsOpacity: "1",
          tooltipSuccessBackground: "var(--color-brand-9)",
          tooltipSuccessForeground: "var(--lime-contrast)",
        },
        borderRadius: "var(--radius-xl)",
      },
    }),
    mdx(),
  ],
})
