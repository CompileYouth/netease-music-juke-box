const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./src"),

    entry: {
        vendor: [ "jquery" ],
        nm: [ "./nm/index.js" ]
    },

    output: {
        path: "./assets",
        publicPath: "assets",
        filename: "[name]/bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: "node_modules/",
                loaders: [
                    "babel-loader?sourceRoot=./src"
                ]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity
        })
    ]
};
