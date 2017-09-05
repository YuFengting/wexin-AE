// mymsg.js
var startX;
var startY;
var endX;
var endY;
var maxright = 75;
Page({
  data:{
    msgLists:[{
       id:0,
       src:"/images/logo.jpg",
       name:"系统消息",
       content:"1感谢关注体验学习微信小程序，在这里你将学到很多的东西" ,
       right:0,
       startright:0
    },{
       id:1,
       src:"/images/logo.jpg",
       name:"系统消息",
       content:"2感谢关注体验学习微信小程序，在这里你将学到很多的东西",
       right:0,
       startright:0
    }]
  },
  //跳转消息详情
  godetail:function(){
    wx.navigateTo({
      url: '../../account/mymsg/msgdetail/msgdetail',
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
  touchstart:function(e){
    var touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    var msgLists = this.data.msgLists;
    for(var i in msgLists){
      var data = msgLists[i];
      data.startright = data.right
    }
  },
  touchemove:function(e){
    var touch = e.touches[0];
    endX = touch.clientX;
    endY = touch.clientY;
    
    var msgLists = this.data.msgLists;
    var getid = e.currentTarget.dataset.id;
    if(getmove > 0){
      for(var i in msgLists){
          var list = msgLists[i];
          if(list.id == getid){
            var startright = list.startright;
            var getmove = startX - endX;
            startright += getmove;
            list.right = startright;
          }
      }
    }else{
      for(var i in msgLists){
          var list = msgLists[i];
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
    var msgLists = this.data.msgLists;
    
    for(var i in msgLists){
      var data = msgLists[i];
      if(data.right <= 100/2 ){
        data.right = 0
      }else{
        data.right = maxright
      }
    }
    this.setData({
      msgLists:msgLists
    });

  },
  /*删除列表信息 */
  deleteIcon:function(e){
    var index = e.currentTarget.dataset.index;
    var getid = e.currentTarget.dataset.item;
    var lists = this.data.msgLists;
    // var newlists = []; 
    for(var i in lists){
      var list = lists[i];
      if(list.id == getid){
        lists.splice(index,1);
        // newlists.push(lists);
      }
    }
    this.setData({
      msgLists:lists 
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
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