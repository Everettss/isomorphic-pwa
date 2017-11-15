const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'client', 'client.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'script.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                    },
                },
            },
        ],
    },
};
