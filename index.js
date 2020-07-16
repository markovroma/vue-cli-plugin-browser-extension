const CopyPlugin = require('copy-webpack-plugin');

module.exports = (api, options) => {
    api.chainWebpack((config) => {
        config
            .entry('content')
            .add('./src/extension/content/content.js');
        config
            .entry('background')
            .add('./src/extension/background/background.js');
        config.output.filename('[name].js');
    });

    api.configureWebpack((config) => {
        // No need for splitting
        config.optimization = {
            splitChunks: false,
        };
        config.plugins = config.plugins.concat(
            new CopyPlugin([
                { from: 'src/extension/background/background.html', to: 'background.html' },
                { from: 'src/extension/manifest.json', to: 'manifest.json', force: true },
            ]),
        );
    });
};

