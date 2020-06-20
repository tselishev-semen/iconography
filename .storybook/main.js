const path = require('path');

module.exports = {
    stories: ['../**/*/*.stories.jsx'],
    webpackFinal: async (config) => {
        config.module.rules.unshift({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader']
        });
        return config;
    }
};