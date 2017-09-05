Page({
  data:{
    templateName:"",
    courseInforAttr: [{
      id: '1-0',
      title: '《微团建》——您身边的团建专家',
      date: '2017-03-20 Young',
      img: [
        {src: '/images/courseImg/course1_intro1.jpg'},
        {src: '/images/courseImg/course1_intro2.jpg'},
        {src: '/images/courseImg/course1_intro3.jpg'}
      ],
      collectflag:true
    }],
  },
  /*收藏按钮点击*/
  collectClick:function(event){
      var getid = event.currentTarget.dataset.id;
      var getitem = this.data.templateName;
      var lists = this.data.courseInforAttr;
      for(var i in lists){
          var list = lists[i];
          if(getid == list.id){
             list.collectflag = !list.collectflag
             if(list.collectflag){
               wx.showToast({
                  title: '取消收藏成功',
                  icon: 'success',
                  duration: 2000
                })
             }else{
               wx.showToast({
                  title: '收藏成功',
                  icon: 'success',
                  duration: 2000
                })
             }
          }
      }
      this.setData({
        courseInforAttr:lists
      })
      
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // String2
    var that = this;
    // console.log(options.item);
    that.setData({
      templateName:options.item
    })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    // String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    // String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    // String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    // String6
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    // String7
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    // String8
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})