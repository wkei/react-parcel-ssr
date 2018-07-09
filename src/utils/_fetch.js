// src/utils/_fetch.js
import 'isomorphic-fetch'
import to from 'await-to-js'

const _fetch = async (url, opt = {}) => {
  const res = await fetch(url, opt)
  console.log('[fetch]', opt.method || 'GET', url)
  if (res.ok) {
    const data = await res.json()
    return data 
  }
  throw res
}

export default async (url, opt) => {
  return to(_fetch(url, opt))
}
