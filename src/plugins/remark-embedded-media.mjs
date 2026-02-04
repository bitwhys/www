import { visit } from "unist-util-visit"
import { cx } from "../utils/cx"

/**
 * Helper to ensure Tailwind classes are readable
 */

const embedHandlers = {
  // Link Card
  link: (node) => {
    const url = node.attributes?.url
    if (!url) {
      return false
    }

    // Create the LinkCard HTML structure - all metadata will be fetched by JavaScript
    return `
      <div class="link-card-wrapper">
        <a href="${url}" class="link-card" target="_blank" rel="noopener noreferrer" data-url="${url}">
          <div class="link-card-content">
            <div class="link-card-url"></div>
            <p class="link-card-title" style="display: none;"></p>
            <p class="link-card-description" style="display: none;"></p>
          </div>
          <div class="link-card-image-outer">
            <div class="link-card-image" style="display: none;">
              <img src="" alt="" loading="lazy" />
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
