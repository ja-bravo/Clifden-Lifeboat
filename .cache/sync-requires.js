// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/jose/Desktop/Projects/Clifden-Lifeboat/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/jose/Desktop/Projects/Clifden-Lifeboat/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/json/layout-index.json"),
  "404.json": require("/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/json/404.json"),
  "index.json": require("/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/json/index.json"),
  "404-html.json": require("/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/json/404-html.json")
}