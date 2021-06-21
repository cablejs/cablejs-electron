const packager = require("electron-packager");

async function main(options) {
    const buildPaths = await packager(options);
    console.log(`Built electron apps into paths:\n${buildPaths.join("\n")}`);
}

main({
    dir: __dirname + "/electron/",
    all: true,
    appCopyright: "Copyright (C) 2021 EmeraldSys Media Ltd",
    win32metadata: {
        CompanyName: "EmeraldSys Media Limited",
        FileDescription: "CableJS Electron Client",
        ProductName: "CableJS Electron Client"
    }
});