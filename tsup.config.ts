import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/se.ts',
    'src/ss.ts',
  ],
  format: [ 'esm'],
  splitting: true,
  clean: true,
  shims: false,
})