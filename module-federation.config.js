// All shared libs, across all micro front ends
const coreLibs = new Set([
    "@angular/core",
    "@angular/router",
    "@angular/common",
    "@angular/common/http",
    "@angular/router",
    "@ngrx/store",
    "@ngrx/store-devtools",
    "rxjs",
    "rxjs/operators",
]);

module.exports = {
    shared: (libraryName, defaultConfig) => {
        if (coreLibs.has(libraryName)) {
            return defaultConfig;
        }
    },
};
