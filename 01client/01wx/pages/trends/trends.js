// pages/trends/trends.js
const app = getApp()
Page({
  data: {
    resetindex: 0,
    newstate: 0,
    second: 0,
  },
  onLoad: function () {
    let that = this;
    //获得后台服务的数据
    wx.request({
      url: 'http://localhost:8888/trends',
      success:function(res){
        if (res.statusCode==200){
          console.log(res);
          console.log(res.data);
          let headItem = res.data.headItem;
         
          let imgUrls = res.data.imgUrls;
          let contexts = res.data.contexts;
          that.setData(
            {headItem: headItem,
          imgUrls: imgUrls ,
          contexts: contexts
          });
          app.globalData.headItem = headItem;
        }
      }
    })
    //获得屏幕的高度
    let height = app.globalData.windowHeight;
    this.setData({
      height: height - 90
    });
  },
  onclickItem: function (res) {
    let id = res.currentTarget.dataset.num;
    this.setData({
      resetindex: id,
      second: id
    });
  },
  onclicktip:function(){
    wx.navigateTo({
      url: '../trendsback/trendsback'
    })
  },
  onclickFind: function (res) {
    let change = res.currentTarget.dataset.find;
    this.setData({
      newstate: change
    });
  }
})