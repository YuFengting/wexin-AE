// pages/account/userinfo/nickname/nickname.js
var app = getApp();
Page({
  data: {
    inputvalue: '',
    inputfocus: true,
    showicon: false
  },
  //点击清空按钮
  clearName: function () {
    this.setData({
      inputvalue: '',
      inputfocus: true,
      showicon: false
    })
  },
  changeName: function (event) {
    var val = event.detail.value;
    this.setData({
      inputvalue: val,
      showicon: true
    })
  },
  //点击保存按钮
  submitBtn: function () {
    var that = this;
    wx.navigateBack({
      delta: 1
    });
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //通过页面栈获取上一个页面的整个页面实例
    prevPage.setData({
      commpyAddr: that.data.inputvalue,
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setData({
      inputvalue: options.item
    })
    if (that.data.inputvalue.length > 0) {
      that.setData({
        showicon: true
      })
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})