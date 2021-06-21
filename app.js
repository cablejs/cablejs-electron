// Copyright (c) 2021 EmeraldSys Media Ltd, All Rights Reserved.

const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL("https://cablejs.emeraldsys.xyz", { userAgent: "cablejs-win-client/0.0.1" });
    mainWindow.setMenu(null);
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});