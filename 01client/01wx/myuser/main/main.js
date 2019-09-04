const app = getApp()

Page({
  data: {

  },
  onLoad: function () {

  },
  phoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '7788990',
    })
  },
})
