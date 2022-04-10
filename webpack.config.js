const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development", // production
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].bundle.js",
        assetModuleFilename: "[name][ext]",
        clean: true,
    },
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 5001,
        open: true,
        hot: true,
    },
    //loader --> инструмент чтобы webpack понимал для файлов
    module: {
        rules: [
            //css
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
            //images
            { test: /\.(svg|ico|png|jpg|jpeg)$/, type: "asset/resource" },
            //babel
            {
                test: /\.js$/,
                exclude: /node_modules/,   // исключать
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    }
                }
            }
        ]
    },
    // plugin --> webpack делал более сложные веши, чтобы обработать файлы, to do more thing
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Demo",  //  <title>Document</title>
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html"),
        }),
    ],
};