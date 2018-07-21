// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/jose/Desktop/Projects/Clifden-Lifeboat/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/jose/Desktop/Projects/Clifden-Lifeboat/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/jose/Desktop/Projects/Clifden-Lifeboat/.cache/layouts/index.js")
}