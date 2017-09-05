// pages/account/mycollect/mycollect.js
var startX;
var startY;
var endX;
var endY;
var maxright = 75;
Page({
  data:{
    hasMore: false,
    vteambuild: [
      {
        id: '1-0',
        img: '/images/courseImg/courseImg1.jpg',
        name: '《微团建》—您身边的团建专家',
        introduce: '团队建设 — 1天',
        right:0,
        startright:0
      },
      {
        id: '1-1',
        img: '/images/courseImg/courseImg2.jpg',
        name: '企业文化—共建未来城',
        introduce: '企业文化，团队建设课程',
        right:0,
        startright:0
      },
      {
        id: '1-2',
        img: '/images/courseImg/courseImg3.jpg',
        name: '团建基地介绍-您身边的团建基地',
        introduce: '基地介绍-您身边的团建基地',
        right:0,
        startright:0
      },
      {
        id: '1-3',
        img: '/images/courseImg/courseImg4.jpg',
        name: '《国家宝藏》-情景体验式培训课程',
        introduce: '真人秀、剧情介绍、寻宝探秘、游山玩水、解谜团、大冒险......',
        right:0,
        startright:0
      },
      {
        id: '1-4',
        img: '/images/courseImg/courseImg13.jpg',
        name: '《全民总动员》',
        introduce: '《全民总动员》 — 团队建设',
        right:0,
        startright:0
      },
      {
        id: '1-5',
        img: '/images/courseImg/courseImg6.jpg',
        name: '《艺术画廊》',
        introduce: '《艺术画廊》 — 团队建设培训课程',
        right:0,
        startright:0
      },
      {
        id: '1-6',
        img: '/images/courseImg/courseImg7.jpg',
        name: '《彩虹跑》',
        introduce: '《彩虹跑》 — 青春正能量，奔跑吧',
        right:0,
        startright:0
      }
    ],
    
  },
  touchstart:function(e){
    var touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    var vteambuild = this.data.vteambuild;
    for(var i in vteambuild){
      var data = vteambuild[i];
      data.startright = data.right
    }
  },
  touchemove:function(e){
    var touch = e.touches[0];
    endX = touch.clientX;
    endY = touch.clientY;
    
    var vteambuild = this.data.vteambuild;
    var getid = e.currentTarget.dataset.id;
    if(getmove > 0){
      for(var i in vteambuild){
          var list = vteambuild[i];
          if(list.id == getid){
            var startright = list.startright;
            var getmove = startX - endX;
            startright += getmove;
            list.right = startright;
          }
      }
    }else{
      for(var i in vteambuild){
          var list = vteambuild[i];
          if(list.id == getid){
            var startright = list.startright;
            var getmove = endX - startX;
            startright -= getmove;
            list.right = startright;
          }
      }
    }
    
  },
  touchend:function(e){
    var vteambuild = this.data.vteambuild;
    
    for(var i in vteambuild){
      var data = vteambuild[i];
      if(data.right <= 100/2 ){
        data.right = 0
      }else{
        data.right = maxright
      }
    }
    this.setData({
      vteambuild:vteambuild
    });

  },
  /*删除列表信息 */
  deleteIcon:function(e){
    var index = e.currentTarget.dataset.index;
    var getid = e.currentTarget.dataset.item;
    var lists = this.data.vteambuild;
    // var newlists = []; 
    for(var i in lists){
      var list = lists[i];
      if(list.id == getid){
        lists.splice(index,1);
        // newlists.push(lists);
      }
    }
    this.setData({
      vteambuild:lists 
    })
  },
  gopath:function(){
    wx.navigateTo({
      url: '../../coursedetail/coursedetail?item=1-0',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    var that = this;
     that.setData({
       hasMore: true
     })
     setTimeout(function(){
       that.setData({
        hasMore: false
      })
     },5000);
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})