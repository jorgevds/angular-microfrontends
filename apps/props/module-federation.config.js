const baseConfig = require("../../module-federation.config");
const path = require("path");

module.exports = {
    ...baseConfig,
    name: "props",
    exposes: {
        "./Module": "./apps/props/src/app/remote-entry/entry.module.ts",
    },
};
