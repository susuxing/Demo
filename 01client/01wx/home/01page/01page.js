//index.js
//获取应用实例

const app = getApp()
Page({
  data: {
    imgUrls: [
      'https://images-1300072974.cos.ap-chengdu.myqcloud.com/u%3D1985464711%2C3130247605%26fm%3D26%26gp%3D0.jpg',
      'https://images-1300072974.cos.ap-chengdu.myqcloud.com/u%3D1985464711%2C3130247605%26fm%3D26%26gp%3D0.jpg',
      'https://images-1300072974.cos.ap-chengdu.myqcloud.com/u%3D1985464711%2C3130247605%26fm%3D26%26gp%3D0.jpg',
      'https://images-1300072974.cos.ap-chengdu.myqcloud.com/u%3D1985464711%2C3130247605%26fm%3D26%26gp%3D0.jpg'
    ]
  },
  towork:function(){
    wx.navigateTo({
      url: '../work/work',
    })
  },
  todemocratic:function(){
    wx.navigateTo({
      url: '../democratic/democratic',
    })
  },
  onLoad: function () {
     
  }
})
