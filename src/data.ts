import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const dataPath = path.resolve(__dirname, './data.json')

export const searchAddress = [
  'https://www.google.com/search?q=',
  'https://cn.bing.com/search?q=',
  'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=',
]