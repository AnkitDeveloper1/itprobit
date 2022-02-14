//const webpack = require('webpack');
module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      counterUp: 'jquery.counterup',
      Waypoint: 'react-waypoint'
    }))
    return config;
  }
}
