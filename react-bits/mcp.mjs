// Starts the shadcn MCP server inside this folder so it finds components.json
// (and the @react-bits registry), even when Claude Code launches from the site root.
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const child = spawn('npx', ['shadcn@latest', 'mcp'], {
  cwd: here,
  stdio: 'inherit',
  shell: process.platform === 'win32',
})
child.on('exit', (code) => process.exit(code ?? 0))
