const { override } = require('customize-cra');
const cssnano = require('cssnano');

module.exports = override(
  // Add custom webpack configurations here
  (config) => {
    // Find the CssMinimizerPlugin and remove it
    config.optimization.minimizer = config.optimization.minimizer.filter(
      (plugin) => !(plugin.constructor.name === 'CssMinimizerPlugin')
    );

    // Add cssnano as a postcss plugin
    const postcssLoader = config.module.rules.find(
      (rule) => rule.oneOf && rule.oneOf.find((innerRule) => String(innerRule.test) === String(/\.module\.(css|sass|scss)$/))
    );

    if (postcssLoader) {
      const postcssLoaderOptions = postcssLoader.use[postcssLoader.use.length - 1].options;

      postcssLoaderOptions.postcssOptions.plugins.push(cssnano());
    }

    return config;
  }
);