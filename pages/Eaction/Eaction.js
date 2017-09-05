//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '/images/courseImg/courseImg9.jpg',
      '/images/courseImg/courseImg12.jpg',
      '/images/courseImg/courseImg13.jpg',
      '/images/courseImg/courseImg14.jpg',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    // tabName: 'vteambuild',
    setSelected: 0,
    vteambuild: [
      {
        id: 2,
        img: '/images/courseImg/courseImg3.jpg',
        name: '团建基地介绍-您身边的团建基地',
        introduce: '基地介绍-您身边的团建基地'
      },
      {
        id: 3,
        img: '/images/courseImg/courseImg4.jpg',
        name: '《国家宝藏》-情景体验式培训课程',
        introduce: '真人秀、剧情介绍、寻宝探秘、游山玩水、解谜团、大冒险......'
      },
      {
        id: 4,
        img: '/images/courseImg/courseImg5.jpg',
        name: '《全民总动员》',
        introduce: '《全民总动员》 — 团队建设'
      },
    ]
  },
  gopath:function(event){
    var dex = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/coursedetail/coursedetail?item='+dex,
      success: function(res){
        // success
        console.log(res);
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
   
  },
  onLoad: function () {
   
  }
})
