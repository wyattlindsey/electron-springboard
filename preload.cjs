const ipcRenderer = require('electron').ipcRenderer;
const contextBridge = require('electron').contextBridge;
window.ipcRenderer = require('electron').ipcRenderer;

contextBridge.exposeInMainWorld('ipcRenderer', {
    on: (channel, listener) => {
        ipcRenderer.on(channel, listener);
    },
    send: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
});
