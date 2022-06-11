/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
*/
const { addWidgetCompilation } = require("./config/widgetCompiler");

module.exports = addWidgetCompilation({})