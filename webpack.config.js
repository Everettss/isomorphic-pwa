const path = require('path');
const nodeExternals = require('webpack-node-externals');

const commonModule = {
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
};

module.exports = [
    {
        // client
        entry: path.resolve(__dirname, 'client', 'client.js'),
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'script.js',
        },
        module: commonModule,
    },
    {
        // server
        entry: path.resolve(__dirname, 'server.js'),
        output: {
            path: __dirname,
            filename: 'server.build.js',
        },
        module: commonModule,
        target: 'node',
        externals: [nodeExternals()],
    },
];
