import { unknownTip } from "./console"

export async function handleUndefined(options: string[]) {
  const optionsType = ['-h', '--help', '-u', '--use']
  if (options.length > 1) {
    unknownTip()
    process.exit(0)
  }
  if (options.length === 1 && !optionsType.includes(options[0])) {
    unknownTip()
    process.exit(0)
  }
}