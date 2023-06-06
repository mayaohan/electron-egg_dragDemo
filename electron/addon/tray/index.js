const {Tray, Menu,ipcMain} = require('electron');
const path = require('path');
const Ps = require('ee-core/ps');
const Log = require('ee-core/log');
const Electron = require('ee-core/electron');
const Conf = require('ee-core/config');
const _ = require('lodash');
const is = require('ee-core/utils/is');
const {
  dialog 
} = require('electron');
/**
 * 托盘插件
 * @class
 */
class TrayAddon {

  constructor(app) {
    this.app = app;
    this.tray = null;
  }

  /**
   * 创建托盘
   */
  create () {
    // 开发环境，代码热更新开启时，会导致托盘中有残影
    if (Ps.isDev() && Ps.isHotReload()) return;
    
    Log.info('[addon:tray] load');

    const app = this.app;
    const cfg = Conf.getValue('addons.tray');
    const mainWindow = Electron.mainWindow;

    // 托盘图标
    let iconPath = path.join(Ps.getHomeDir(), cfg.icon);
    // 关闭快关
    let willQuitApp = false;
  
    // 托盘菜单功能列表
    let trayMenuTemplate = [
      {
        label: '显示',
        click: function () {
          mainWindow.show();
        }
      },
      {
        label: '退出',
        click: function () {
          app.appQuit();
        }
      }
    ]
  
    // 点击关闭，最小化到托盘
    mainWindow.on('close', (event) => {
      // console.log(event)
      event.preventDefault();
      // console.log(ipcMain)
      mainWindow.webContents.send('handelClose', "执行关闭")
      // let btn = [],c=0
      // Log.info(is.macOS(),cfg.macOS);
      // btn = ["最小化","放到托盘中", "直接退出"]
      // c = 2
      // const choice = dialog.showMessageBoxSync(mainWindow, {
      //   type: "info",
      //   buttons: btn,
      //   title: "提示",
      //   message: "确定要关闭吗？",
      //   defaultId: 0,
      //   cancelId: c
      // });
      // if (choice==0) {
      //   event.preventDefault();
      //   mainWindow.minimize();
      // }
      // if (choice==1) {
      //   Log.info('托盘',event);
      //   const extraObj = Electron.extra;
      //   if (extraObj.closeWindow == true) {
      //     return;
      //   }
      //   mainWindow.hide();
      //   event.preventDefault();
      // }
      // if (choice==3){
      //   event.preventDefault();
      //   app.appQuit();
      //   willQuitApp = true
      // }
      
    });
    
    // 实例化托盘
    this.tray = new Tray(iconPath);
    this.tray.setToolTip(cfg.title);
    const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
    this.tray.setContextMenu(contextMenu);
  }
}

TrayAddon.toString = () => '[class TrayAddon]';
module.exports = TrayAddon;