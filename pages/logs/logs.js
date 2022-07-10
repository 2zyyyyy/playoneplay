// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  // 小程序在各个状态下的log
  onShow() {
    console.log('lifecycle: logs onShow!')
  },
  onHide() {
    console.log('lifecycle: logs onHide!')
  },
  onReady() {
    console.log('lifecycle: logs onReady!')
  },
  onUnload() {
    console.log('lifecycle: logs onUnload!')
  },
  onLoad() {
    console.log('lifecycle: logs onLoad!')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  onLogTap() {
    wx.navigateTo({
      url: '/pages/page2/page2'
    })
  }
})
