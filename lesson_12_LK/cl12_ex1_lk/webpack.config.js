/**
 * Created by lkittogsuedu on 11/3/16.
 */
module.exports = {
    entry: {
        app: "./app/js/"
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    }
};
