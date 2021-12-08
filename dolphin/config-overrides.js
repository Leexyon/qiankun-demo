const {name} = require('./package.json');
const {
    overrideDevServer
} = require('customize-cra')

const devServerConfig = () => config => {
    return {
        ...config,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: true,
        open: false
    }
}

module.exports = {
    webpack: function override(config, env) {
        config.entry = config.entry.filter(
            (e) => !e.includes('webpackHotDevClient')
        );
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${name}`;
        return config;
    },
    devServer: overrideDevServer(devServerConfig())
};
