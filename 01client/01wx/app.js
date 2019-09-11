//app.js
App({
  onLaunch: function () {
  //设置每一个屏幕的显示面积
  let that = this;
    wx.getSystemInfo({
      success: function (res) {
        //计算屏幕的高度
        let height = (750 / res.windowWidth) * res.windowHeight - 80;
        that.globalData.windowHeight = height;
      },
    })
  },
  globalData: {
    windowHeight: ''
  }
})