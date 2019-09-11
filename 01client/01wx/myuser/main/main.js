const app = getApp()

Page({
  data: {

  },

  onLoad: function () {
    let that=this;
    wx.request({
      url: 'http://localhost:8888/myuser',
      success:function(res){
        let navis = res.data.navis;
        let longs = res.data.longs;
          that.setData({
            navis:navis,
            longs:longs
          })
          console.log(navis);
          console.log(longs);
      }
    })
  },
  phoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '7788990',
    })
  },
})
