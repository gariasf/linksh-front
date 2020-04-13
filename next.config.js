const withSass = require('@zeit/next-sass')
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = withSass({
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/auth': { page: '/auth' },
      '/home': { page: '/home' }
    };
  },
  experimental: {
    modern: true,
    polyfillsOptimization: true
  },

  webpack(config, { dev, isServer }) {
    const splitChunks = config.optimization && config.optimization.splitChunks
    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups;
      const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
          test: preactModules
        });
        cacheGroups.commons.name = 'framework';
      }
      else {
        cacheGroups.preact = {
          name: 'commons',
          chunks: 'all',
          test: preactModules
        };
      }
    }

    // inject Preact DevTools
    if (dev && !isServer) {
      const entry = config.entry;
      config.entry = () => entry().then(entries => {
        entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || []);
        return entries;
      });
    }

    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config;
  }
});
