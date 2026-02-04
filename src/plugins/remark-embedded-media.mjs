import { visit } from "unist-util-visit"
import { cx } from "../utils/cx"

/**
 * Helper to ensure Tailwind classes are readable
 */

const embedHandlers = {
  // Link Card
  link: (node) => {
    const url = node.attributes?.url
    if (!url) return false

    // We keep the "link-card-x" classes for the JS to target,
    // but add Tailwind classes for the visual styling.
    return `
      <div class="link-card-wrapper my-6">
        <a href="${url}"
           class="link-card group relative flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--astro-code-background)] no-underline transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--selection)_75%,transparent)]"
           target="_blank"
           rel="noopener noreferrer"
           data-url="${url}">

          <div class="link-card-image-outer hidden w-full overflow-hidden bg-[var(--astro-code-background)] pt-[56.25%] relative group-has-[.link-card-image[style*='display: block']]:block aspect-video">
            <div class="link-card-image hidden w-full h-full absolute inset-0">
               <img src="" alt="" loading="lazy" class="absolute inset-0 h-full w-full object-cover object-center" />
            </div>
          </div>

          <div class="link-card-content flex flex-col gap-1 p-4">
            <p class="link-card-title truncate text-lg font-bold text-[var(--text-primary)] m-0" style="display: none;"></p>

            <p class="link-card-description text-sm text-[var(--text-primary)] opacity-60 line-clamp-2 m-0" style="display: none;"></p>

            <div class="link-card-url mt-1 flex items-center gap-1.5 text-xs tracking-wide text-[var(--text-tertiary)]">
               <div class="h-4 w-24 animate-pulse rounded bg-[var(--text-tertiary)]/20"></div>
            </div>
          </div>
        </a>
      </div>
    `
  },

  // ... (Keep your other handlers for Spotify/Youtube/etc. if needed)
}

export default function remarkEmbeddedMedia() {
  return (tree) => {
    visit(
      tree,
      ["leafDirective", "containerDirective", "textDirective"],
      (node) => {
        const handler = embedHandlers[node.name]
        if (!handler) return

        const htmlContent = handler(node)
        if (!htmlContent) return

        node.type = "html"
        node.value = htmlContent
        delete node.name
        delete node.attributes
        delete node.children
      },
    )
  }
}
