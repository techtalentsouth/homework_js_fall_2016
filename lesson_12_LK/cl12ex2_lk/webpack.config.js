/**
 * Created by lkittogsuedu on 11/3/16.
 */
module.exports = {
    entry: __dirname + '/app/js/index.js',

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.css'],
        modulesDirectories: [
            './node_modules',
            './app'
        ]
    },
    devServer: {
        contentBase: './dist',
        port: '3000',
        colors: true,
        inline: true
    }
};
