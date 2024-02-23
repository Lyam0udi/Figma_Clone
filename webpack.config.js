const path = require('path');

module.exports = {
  // other configurations...

  module: {
    rules: [
      // other rules...

      {
        test: /\.node$/,
        loader: 'raw-loader',
      },
    ],
  },
};
