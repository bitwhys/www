// @ts-check
import { defineConfig, fontProviders } from "astro/config"
import rehypeKatex from "rehype-katex"
import rehypePrettyCode from "rehype-pretty-code"
import remarkMath from "remark-math"

import tailwindcss from "@tailwindcss/vite"

import mdx from "@astrojs/mdx"

import expressiveCode from "astro-expressive-code"

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist Mono",
        cssVariable: "--geist-mono-font",
      },
      {
        provider: fontProviders.google(),
        name: "IBM Plex Mono",
        cssVariable: "--ibm-plex-mono-font",
      },
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--geist-sans-font",
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
        name: "Geliat",
        cssVariable: "--geliat-font",
        options: {
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
      {
        provider: fontProviders.local(),
        name: "Bluu Next Titling",
        cssVariable: "--bluu-next-titling-font",
        options: {
          variants: [
            {
              src: [
                "./src/assets/fonts/bluu-next/bluunext-titling.ttf",
                "./src/assets/fonts/bluu-next/bluunext-titling.woff",
                "./src/assets/fonts/bluu-next/bluunext-titling.woff2",
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

  integrations: [expressiveCode({
    themes: ["dracula-soft", "snazzy-light"],
    useDarkModeMediaQuery: false,
    themeCssSelector: (theme) => `[data-theme='${theme.name}']`,
    styleOverrides: {
      codeFontFamily: "var(--geist-mono-font)",
      borderRadius: "var(--radius-xl)",
      borderColor: "var(--color-brd-main)",
      frames: {
        shadowColor: "var(--codeblack-frame-shadow-color)",
      },
    },
  }), mdx(), icon()],
  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },
})