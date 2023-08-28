const { createGlobPatternsForDependencies } = require("@nrwl/angular/tailwind");
const { join } = require("path");

module.exports = {
    content: [
        join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            colors: {
                nasa: {
                    100: "#cfd6df",
                    200: "#9faebf",
                    300: "#6f85a0",
                    400: "#3f5d80",
                    500: "#0f3460",
                    600: "#0c2a4d",
                    700: "#091f3a",
                    800: "#061526",
                    900: "#030a13",
                },
                midnight: {
                    100: "#d0d3d8",
                    200: "#a2a6b2",
                    300: "#737a8b",
                    400: "#454d65",
                    500: "#16213e",
                    600: "#121a32",
                    700: "#0d1425",
                    800: "#090d19",
                    900: "#04070c",
                },
                galaxy: {
                    100: "#ddd6e6",
                    200: "#baaecd",
                    300: "#9885b5",
                    400: "#755d9c",
                    500: "#533483",
                    600: "#422a69",
                    700: "#321f4f",
                    800: "#211534",
                    900: "#110a1a",
                },
                nebula: {
                    100: "#fbdadf",
                    200: "#f6b5bf",
                    300: "#f28fa0",
                    400: "#ed6a80",
                    500: "#e94560",
                    600: "#ba374d",
                    700: "#8c293a",
                    800: "#5d1c26",
                    900: "#2f0e13",
                },
            },
            translate: {
                90: "90%",
            },
        },
    },
    plugins: [],
    // corePlugins: {
    //     preflight: false,
    //   }
};
