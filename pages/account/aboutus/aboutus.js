// pages/account/aboutus/aboutus.js
Page({
  data:{},
  /*拨打电话号码 */
  callNumber:function(){
    wx.makePhoneCall({
      phoneNumber: '18505199081',
      success: function(res) {
        // success
      }
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