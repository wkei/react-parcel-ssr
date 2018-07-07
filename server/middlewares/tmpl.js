// src/server/middlewares/tmpl.prod.js
import fs from 'fs'
import path from 'path'
import _template from 'lodash/template'

let compiled = null

export default (markup) => {
  if (!compiled) {
    if (process.env.NODE_ENV === 'production') {
      const html = fs.readFileSync(path.resolve(__dirname, './static/index.html'))
      compiled = _template(html)
    } else {
      const html = fs.readFileSync(path.resolve(__dirname, '../../.tmp/index.html'))
      compiled = _template(html)
    }
  }
  return compiled({ markup })
}
