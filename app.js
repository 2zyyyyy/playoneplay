// app.js
App({
  // 小程序各个状态下的log输出
  onShow() {
    console.log('lifecycle: app onShow!')
  },
  onHide() {
    console.log('lifecycle: app onHide!')
  },
  onLaunch() {
    // test log
    console.log('lifecycle: app onlaunch!')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
