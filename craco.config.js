const { resolve } = require("path");

module.exports = {
  webpack: {
    alias: {
      '@components': resolve(__dirname, "src/components/"),
      '@routes': resolve(__dirname, "src/routes/"),
      '@pages': resolve(__dirname, "src/pages/")
    }
  }
}