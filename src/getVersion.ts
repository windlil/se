import pkg from '../package.json' assert { type : 'json' }

export function getVersion() {
  return pkg.version
}