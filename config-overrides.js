const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssNesting = require('postcss-nesting');

module.exports = config =>
  reactAppRewirePostcss(config, {
    plugins: () => [postcssNesting(/* pluginOptions */)]
  });
