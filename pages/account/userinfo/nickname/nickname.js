// pages/account/userinfo/nickname/nickname.js
var app = getApp();
Page({
  data:{
    inputvalue:'',
    inputfocus:true,
    showicon:true
  },
  //点击清空按钮
  clearName:function(){
    this.setData({
      inputvalue:'',
      inputfocus:true,
      showicon:false
    })
  },
  changeName:function(event){
    var val = event.detail.value;
    this.setData({
      inputvalue: val,
      showicon: true
    })
  },
  //点击保存按钮
  submitBtn:function(){
    wx.navigateBack({
      delta:1
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        inputvalue:userInfo.nickName
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