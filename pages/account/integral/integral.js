// pages/account/integral/integral.js
var app = getApp();
Page({
  data:{
    userInfo:{},
    classnum:0,
    percent:0,
    distance:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var getnum = options.num;
    var nextnum = (Math.floor(getnum/100)+1)*100;
    var getpercent = getnum/1000*100;
    var distancenum = nextnum - getnum;
    this.setData({
      classnum:getnum,
      percent:getpercent,
      distance:distancenum
    });

    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
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