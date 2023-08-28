const baseConfig = require("../../module-federation.config");

module.exports = {
    ...baseConfig,
    name: "hive",
    exposes: {
        "./Module": "./apps/hive/src/modules/application/application.module.ts",
    },
};
