const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: {"functions":"./src/main.ts"}, // string | object | array
    entry: {"style":"./src/style.css"},
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },

    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "public"), // string (default)
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "scripts/[name].js", // string (default)
        // the filename template for entry chunks
        publicPath: "", // string
        // the url to the output directory resolved relative to the HTML page
        library: { // There is also an old syntax for this available (click to show)
            type: "umd", // universal module definition
            // the type of the exported library
            name: "MyLibrary", // string | string[]
            // the name of the exported library

            /* Advanced output.library configuration (click to show) */
        },
    },
    plugins:  [
        new MiniCssExtractPlugin({
            filename: "styles/[name].css"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
}
