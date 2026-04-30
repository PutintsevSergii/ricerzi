import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'

const rootDir = path.resolve(__dirname, '..')
const srcDir = path.join(rootDir, 'src')

function sourceFiles(dir: string): string[] {
  const files: string[] = []

  for (const entry of readdirSync(dir)) {
    const entryPath = path.join(dir, entry)
    const stat = statSync(entryPath)

    if (stat.isDirectory()) {
      files.push(...sourceFiles(entryPath))
      continue
    }

    if (/\.(ts|tsx|js|jsx|css)$/.test(entry)) {
      files.push(entryPath)
    }
  }

  return files
}

describe('source safety guards', () => {
  it('does not ship debug console logs from source files', () => {
    const violations = sourceFiles(srcDir).filter(file => readFileSync(file, 'utf8').includes('console.log'))

    expect(violations.map(file => path.relative(rootDir, file))).toEqual([])
  })

  it('does not render CMS content through dangerouslySetInnerHTML', () => {
    const violations = sourceFiles(srcDir).filter(file => readFileSync(file, 'utf8').includes('dangerouslySetInnerHTML'))

    expect(violations.map(file => path.relative(rootDir, file))).toEqual([])
  })

  it('uses one font-loading strategy', () => {
    const globalsCss = readFileSync(path.join(srcDir, 'app/globals.css'), 'utf8')
    const layout = readFileSync(path.join(srcDir, 'app/[lang]/layout.tsx'), 'utf8')

    expect(globalsCss).not.toContain('fonts.googleapis.com')
    expect(layout).toContain("next/font/google")
  })
})
