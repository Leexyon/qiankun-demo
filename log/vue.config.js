const {name} = require('./package');
module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        port: 33522
    },
    css: {
        loaderOptions: {
            scss: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
                prependData: `@import "~@/style/reset.scss";`
            },
        }
    },
    configureWebpack: {
        entry: './src/entry-micro.js',
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};