import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as path from 'path';

const __dirname = path.resolve();
let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 1200,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.cjs'),
        },
    });

    mainWindow.loadURL('http://localhost:9000');
};

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
