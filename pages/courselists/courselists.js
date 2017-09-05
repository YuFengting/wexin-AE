Page({
  data:{
    courseLists:[{
      lists:[{
        id:1,
        src:'/images/courseImg/course1.png',
      },{
        id:2,
        src:'/images/courseImg/course2.png',
      }
      ]
    },{
      lists:[{
        id:3,
        src:'/images/courseImg/course3.png',
      },{
        id:4,
        src:'/images/courseImg/course4.png',
      }
      ]
    },{
      lists:[{
        id:5,
        src:'/images/courseImg/course5.png',
      },{
        id:6,
        src:'/images/courseImg/course6.png',
      }
      ]
    },{
      lists:[{
        id:7,
        src:'/images/courseImg/course7.png',
      },{
        id:8,
        src:'/images/courseImg/course8.png',
      }
      ]
    }]
  },
  gotoDetail:function(event){
    var item = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/courselists/courseVideo/courseVideo?item='+ item,
      success: function(res){
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
  scroll: function(event) {
    console.log(event);
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