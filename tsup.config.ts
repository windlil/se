import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/ss.ts',
  ],
  format: [ 'esm'],
  splitting: true,
  clean: true,
  shims: false,
})