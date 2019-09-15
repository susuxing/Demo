//index.js
//获取应用实例

let app = getApp()
Page({
  data: {

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
     let that=this;
     //获得后台服务的数据
     wx.request({
       url: 'http://localhost:8088/home',
       success:function(res){
         console.log(res);
         if(res.statusCode==200){
           console.log(res);
           console.log(res.data);
           let swipers=res.data.swipers;
           let homelistItem=res.data.homelistItem;
           let contents=res.data.contents;
           that.setData({
             swipers:swipers,
             homelistItem: homelistItem,
             contents:contents

           });

          
         }
       }
     })
  }
})
