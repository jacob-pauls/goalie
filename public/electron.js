const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
    let window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadURL(
        isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../public/index.html')}`
    );
    
    if (isDev) {
        window.webContents.openDevTools();
    }

    window.on('closed', () => window = null);
}

function activate() {
    if (window === null)
        createWindow();
}

function eject() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
}

app.on('ready', createWindow);
app.on('activate', activate);
app.on('window-all-closed', eject);