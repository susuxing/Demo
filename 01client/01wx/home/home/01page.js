//index.js
//获取应用实例

const app = getApp()
Page({
  data: {
    imgUrls: [
      'https://images-1300072974.cos.ap-chengdu.myqcloud.com/u%3D1985464711%2C3130247605%26fm%3D26%26gp%3D0.jpg',
      'https://4-1300072974.cos.ap-chengdu.myqcloud.com/untitled.png',
      'https://6-1300072974.cos.ap-chengdu.myqcloud.com/u%3D3220745536%2C1855392985%26fm%3D26%26gp%3D0.jpg',
      'https://8-1300072974.cos.ap-chengdu.myqcloud.com/u%3D137301959%2C1577441612%26fm%3D26%26gp%3D0.jpg'
      
    ]
  },
  towork: function () {
    wx.navigateTo({
      url: '../work/work',
    })
  },
  todemocratic: function () {
    wx.navigateTo({
      url: '../democratic/democratic',
    })
  },
  todocument: function () {
    wx.navigateTo({
      url: '../document/document',
      
    })
  },
  toinspect:function(){
    wx.navigateTo({
      url: '../inspect/inspect',

    })
  },
  tomyuser:function(){
    wx.switchTab({
      url: '../../myuser/main/main',
    })
 
  },
  toform:function(){
    wx.navigateTo({
      url: '../form/form',
    })
  },
  toparty:function(){
    wx.navigateTo({
      url: '../party/party',
    })
  },
  totest: function () {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  torelation: function () {
    wx.navigateTo({
      url: '../relation/relation',
    })
  },
  tolife: function () {
    wx.navigateTo({
      url: '../life/life',
    })
  },
  onLoad: function () {

  }
})
