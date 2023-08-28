const baseConfig = require("../../module-federation.config");

module.exports = {
    ...baseConfig,
    name: "nasa",
    exposes: {
        "./Module": "./apps/nasa/src/modules/application/application.module.ts",
    },
};
