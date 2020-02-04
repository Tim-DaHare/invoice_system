const path = require("path")
const { app, BrowserWindow } = require("electron")      

let win

console.log(app.isPackaged)

const createWindow = () => {
    // Todo fix cors and enable websecurity again
    win = new BrowserWindow({
        // width: 800, 
        // height: 600, 
        webPreferences: { 
            webSecurity: false 
        }
    })

    // Todo: only load extensions for prod
    if (!app.isPackaged) {
        BrowserWindow.addDevToolsExtension("C:\\Users\\Tim de Haas\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.17.0_0")
    }

    // Todo: prod condition loadfile index.html
    if (app.isPackaged) {
        win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`)
    } else {
        win.loadURL("http://localhost:3000/")
    }
}
      
app.on("ready", createWindow)