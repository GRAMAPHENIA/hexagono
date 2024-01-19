const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    // Resuelve la configuración de alias
    config.resolve.alias["@"] = path.join(__dirname, "src");

    return config;
  },
};
