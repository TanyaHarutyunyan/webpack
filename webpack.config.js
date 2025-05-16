const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        compress: true,
        hot: true,
        open: true,
    },
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: '[name][ext]',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack",
            filename: "index.html",
            template: "./src/template/index.html",
        })
    ]
}