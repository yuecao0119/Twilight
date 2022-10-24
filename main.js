const { app, BrowserWindow } = require('electron')
const path = require('path')
const WinState = require('electron-win-state').default

const createWindow = () => {
    const winState = new WinState({
        defaultWidth: 1000,
        defaultHeight: 800
    })
    const win = new BrowserWindow({
        // 自定义窗口状态
        ...winState.winOptions,
        webPreferences: {
            // 定义预加载js
            preload: path.resolve(__dirname, './preload')
        },

        show: false
    })

    win.loadURL('http://localhost:5173/')
    
    // 显示调试工具
    win.webContents.openDevTools()

    winState.manage(win)

    // 页面加载完成之后才会打开窗口
    win.on('ready-to-show', () => {
        win.show()
    })
}

app.whenReady().then(() => {
    createWindow()

    // 激活应用后创建窗口
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 当所有窗口是关闭时，关闭
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})