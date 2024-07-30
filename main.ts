import { app, BrowserWindow } from 'electron';
import * as path from 'path';

// Function to create the main window
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Update to 'preload.ts' if using TypeScript
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173'); // Vite dev server URL
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist/index.html')); // Production build
  }
}

// When Electron has finished initialization, create the window
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Recreate a window when the app icon is clicked (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});