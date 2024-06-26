// import rehypePrism from '@mapbox/rehype-prism'
// import nextMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'
import {withContentlayer} from "next-contentlayer";


/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true }

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
// }

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// })

export default withContentlayer(nextConfig)
