// pages/trends/trends.js
const app = getApp()
Page({
  data: {
    resetindex: 0,
    newstate:0,
    headItem: [{
        id: 0,
        title: "全部"
      },
      {
        id: 1,
        title: "先锋头条"
      },
      {
        id: 2,
        title: "时政要闻"
      },
      {
        id: 3,
        title: "最新资讯"
      }
    ],
    imgUrls: [
      '../../imgs/pic1.jpg',
      '../../imgs/pic2.jpg',
      '../../imgs/pic3.jpg'
    ],
    contexts: [{

        word: "国办印发意见 加快发展流通促进商业消费",
        time: "2019年08月29日 635阅读 0评论"
      },
      {
        word: "甘肃 立行立改 即知即改",
        time: "2019年08月29日 363阅读 0评论"
      },
      {
        word: "新华社评论员：对接群众关切抓实主题教育",
        time: "2019年08月29日 966阅读 0评论"
      },
      {
        word: "北京石景山开展冰雪体育场馆消防演练 机器人协同作战",
        time: "2019年08月29日 966阅读 0评论"
      },
      {
        word: "浙江海宁：“四高”模式牢筑防火墙",
        time: "2019年08月29日 966阅读 0评论"
      },
      {
        word: "盲人种粮模范“点亮”的脱贫路 广西兴安县村民文教书致富不忘带领乡亲们一起富",
        time: "2019年08月29日 966阅读 0评论"
      },
      {
        word: "在交流互鉴中拥抱世界多彩文明",
        time: "2019年08月29日 966阅读 0评论"
      }
    ]
  },
  onLoad: function() {

  },
  onclickItem: function(res) {
    let id = res.currentTarget.dataset.num;
    this.setData({
      resetindex: id
    });
  },
  onclickFind: function(res){
    let change = res.currentTarget.dataset.find;
    this.setData({
      newstate:change
    });
  }
})