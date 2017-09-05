// pages/account/account.js
//获取应用实例
var app = getApp()
Page({
  data:{
      recordTxt: '签到',
      record: false,
      userInfo:{},
      classnum:0
  },
  //签到
  recordFn: function(){
    var that = this;
      if(that.data.recordTxt == "签到"){
          wx.showToast({
              title:'签到成功,获得  10积分',
              icon:'success',
              duration:2000
          })
         that.data.classnum += 110;
          that.setData({
              recordTxt: '已签到',
              record: true,
              classnum:that.data.classnum
            })
      } 
  },
  //跳转个人详情
  goUserInfor:function(){
    wx.navigateTo({
      url: '../account/userinfo/userinfo',
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
  //跳转积分详情
  integralBox:function(){
    var num = this.data.classnum;
    wx.navigateTo({
      url: '../account/integral/integral?num='+num,
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
  //跳转我的信息
  goMyMsg:function(){
    wx.navigateTo({
      url: '../account/mymsg/mymsg',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //跳转我的收藏
  gomycollect:function(){
    wx.navigateTo({
      url: '../account/mycollect/mycollect',
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
  //跳转关于我们
  aboutus:function(){
    wx.navigateTo({
      url: '../account/aboutus/aboutus',
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
  // 跳转设置页面
  goSetting:function(){
    wx.navigateTo({
      url: '../account/setting/setting',
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
    // var getdate = new Date();
    // var year = getdate.getFullYear();
    // var month = getdate.getMonth()+1;
    // var day = getdate.getDate();
    // var time = getdate.getTime();
    var that = this;
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
    console.log(11)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})