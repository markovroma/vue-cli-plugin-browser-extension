module.exports = api => {
    api.extendPackage({
        devDependencies: {
            'copy-webpack-plugin': '^5.1.1',
        },
    });
    api.render('./template');
};

module.exports.hooks = (api) => {
    api.afterInvoke(() => {});
};
