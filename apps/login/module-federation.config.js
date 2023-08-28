const baseConfig = require("../../module-federation.config");

module.exports = {
    ...baseConfig,
    name: "login",
    exposes: {
        "./Module": "apps/login/src/app/remote-entry/entry.module.ts",
    },
};
