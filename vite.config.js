import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import fs from 'fs'
import path from 'path'

const excludeFiles = [
  'blogposts/lessons-from-aws.md',
]

// Unfinished posts live in public/blogposts/drafts/. They are served by
// `npm run dev` (preview at /posts/<slug>) but stripped from production
// builds, so `./deploy` never publishes them.
const DRAFTS_PREFIX = 'blogposts/drafts/'

const getAllFiles = (dirPath, { includeDrafts }, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, { includeDrafts }, arrayOfFiles)
    } else {
      const relativePath = path.relative('public', fullPath)
      const isDraft = relativePath.split(path.sep).join('/').startsWith(DRAFTS_PREFIX)
      if (excludeFiles.includes(relativePath)) return
      if (isDraft && !includeDrafts) return
      arrayOfFiles.push(fullPath)
    }
  })

  return arrayOfFiles
}

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: getAllFiles('public', { includeDrafts: command === 'serve' }),
          dest: '.',
          rename: (name, extension, fullPath) => {
            return path.relative('public', fullPath)
          }
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  base: '/',
  publicDir: false,
}))
