const { app, BrowserWindow } = require("electron")      

let win

const createWindow = () => {
    win = new BrowserWindow({
        // width: 800, 
        // height: 600, 
        webPreferences: { 
            webSecurity: false 
        }
    })

    // Todo: only load extensions for prod
    // console.log(process.env.NODE_ENV)
    // if (__DEV__) {
    BrowserWindow.addDevToolsExtension("C:\\Users\\Tim de Haas\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.17.0_0")
    // }

    // Todo: prod condition loadfile index.html
    win.loadURL("http://localhost:3000/")
}
      
app.on("ready", createWindow)