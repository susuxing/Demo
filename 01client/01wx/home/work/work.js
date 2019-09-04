// pages/work/work.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '500',
    indexSelect: 0,
    topics: [{
      id: 0,
      title: "已上报"
    },
      {
        id: 1,
        title: "未上报"
      }
    ]
  },
  clickTopItem: function (res) {
    //获得传递过来的数据
    let id = res.currentTarget.dataset.yjs;
    //把index换成id
    this.setData({
      indexSelect: id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})