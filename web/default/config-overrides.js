module.exports = function override(config, env) {
  config.output = {
    ...config.output,
    publicPath: '/oapt/',
  };
  return config;
};