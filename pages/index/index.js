// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '万里车车小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: true,
      showScale: true,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    location: {
      latitude: 30.230486,
      longitude: 119.991007
    },
    scale: 15,
    markers: [
      {
        iconPath: "/resources/摩托车.png",
        id: 0,
        latitude: 30.226589,
        longitude: 119.984724,
        width: 25,
        height: 25
      },
      {
        iconPath: "/resources/摩托车.png",
        id: 1,
        latitude: 30.230833,
        longitude: 120.008632,
        width: 25,
        height: 25
      },
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs?color=red'
    })
  },
  // 小程序在各个状态下的log
  onShow() {
    console.log('lifecycle: index onShow!')
  },
  onHide() {
    console.log('lifecycle: index onHide!')
  },
  onReady() {
    console.log('lifecycle: index onReady!')
  },
  onUnload() {
    console.log('lifecycle: index onUnloa!')
  },
  onLoad() {
    console.log('lifecycle: index onLoad!')
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  // getUserProfile(e) {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // },
  // getUserInfo(e) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  // onTap() {
  //   this.setData({
  //     motto: '修改文本信息文字'
  //   })
  // },
})
