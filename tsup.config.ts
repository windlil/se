import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/ss.ts'
  ],
  format: [ 'esm'],
  dts: true,
  splitting: true,
  clean: true,
  shims: false,
})