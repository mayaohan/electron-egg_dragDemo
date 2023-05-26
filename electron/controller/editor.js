'use strict';

const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const { Controller } = require('ee-core');
const {
  app: electronApp,
  dialog, shell, BrowserView, Notification, 
  powerMonitor, screen, nativeTheme
} = require('electron');
const dayjs = require('dayjs');
const Ps = require('ee-core/ps');
const Log = require('ee-core/log');
class EditorController extends Controller {

    constructor(ctx) {
      super(ctx);
    }
  
    /**
   * 检测http服务是否开启
   */ 
  async setHTML () {
    const filePaths = dialog.showOpenDialogSync({
      title: '对话框窗口的标题',
      // 默认打开的路径，比如这里默认打开下载文件夹
      // defaultPath: app.getPath('downloads'), 
      buttonLabel: '确认按钮文案',
      // 限制能够选择的文件类型
      filters: [
        // { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        // { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
        // { name: 'Custom File Type', extensions: ['as'] },
        // { name: 'All Files', extensions: ['*'] }, 
      ],
      properties: [ 'openFile', 'showHiddenFiles' ],
      message: 'mac文件选择器title'
    })

    if (_.isEmpty(filePaths)) {
      return null
    }
    console.log(filePaths)
    let res = null
    return new Promise((resolve,reject)=>{
      fs.readFile(filePaths[0], 
        // 读取文件完成时调用的回调函数
        (err, data)=> {  
            if (err) throw err; 
            // 数据是包含文件内容的缓冲区
            // console.log(data.toString('utf8')) 
            res = data.toString('utf8')
            resolve(res)
        });
    })
  }
}


EditorController.toString = () => '[class EditorController]';
module.exports = EditorController;
