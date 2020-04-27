const path = require("path");

module.exports = {
    entry: "./src/main.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist/"),
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        index: "foo.html",
        port: 3000
    },
};