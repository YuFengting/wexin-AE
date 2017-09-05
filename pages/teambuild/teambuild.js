var url = "/data/course.json";
Page({
  data: {
    imgUrls: [
      '/images/courseImg/courseImg9.jpg',
      '/images/courseImg/courseImg12.jpg',
      '/images/courseImg/courseImg13.jpg',
      '/images/courseImg/courseImg14.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // tabName: 'vteambuild',
    setSelected: 0,
    vteambuild: [
      {
        id: '1-0',
        img: '/images/courseImg/courseImg1.jpg',
        name: '《微团建》—您身边的团建专家',
        introduce: '团队建设 — 1天'
      },
      {
        id: '1-1',
        img: '/images/courseImg/courseImg2.jpg',
        name: '企业文化—共建未来城',
        introduce: '企业文化，团队建设课程'
      },
      {
        id: '1-2',
        img: '/images/courseImg/courseImg3.jpg',
        name: '团建基地介绍-您身边的团建基地',
        introduce: '基地介绍-您身边的团建基地'
      },
      {
        id: '1-3',
        img: '/images/courseImg/courseImg4.jpg',
        name: '《国家宝藏》-情景体验式培训课程',
        introduce: '真人秀、剧情介绍、寻宝探秘、游山玩水、解谜团、大冒险......'
      },
      {
        id: '1-4',
        img: '/images/courseImg/courseImg13.jpg',
        name: '《全民总动员》',
        introduce: '《全民总动员》 — 团队建设'
      },
      {
        id: '1-5',
        img: '/images/courseImg/courseImg6.jpg',
        name: '《艺术画廊》',
        introduce: '《艺术画廊》 — 团队建设培训课程'
      },
      {
        id: '1-6',
        img: '/images/courseImg/courseImg7.jpg',
        name: '《彩虹跑》',
        introduce: '《彩虹跑》 — 青春正能量，奔跑吧'
      }
    ],
     sceneExper: [
      {
        id: 7,
        img: '/images/courseImg/courseImg8.jpg',
        name: '《石油寡头》',
        introduce: '《石油寡头》 — 情景体验式培训课程'
      },
      {
        id: 8,
        img: '/images/courseImg/courseImg9.jpg',
        name: '《沙漠掘金》',
        introduce: '《石油寡头》 — 情景体验式培训课程'
      },
      {
        id: 9,
        img: '/images/courseImg/courseImg10.jpg',
        name: '《西部大开发》',
        introduce: '《石油寡头》 — 情景体验式培训课程'
      },
      {
        id: 10,
        img: '/images/courseImg/courseImg11.jpg',
        name: '《决战黄金岛》',
        introduce: '《石油寡头》 — 情景体验式培训课程'
      },
      {
        id: 11,
        img: '/images/courseImg/courseImg12.jpg',
        name: '《收获季节》',
        introduce: '《石油寡头》 — 情景体验式培训课程'
      }
    ],
     themeExpand: [
      {
        id: 12,
        img: '/images/courseImg/courseImg13.jpg',
        name: '助跑你的新人',
        introduce: '新员工培训 — 助跑你的新人'
      },
      {
        id: 13,
        img: '/images/courseImg/courseImg14.jpg',
        name: '《团队建设》',
        introduce: '打造高绩效团队 — 团队建设'
      }
    ],
    Eaction: [
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
        img: '/images/courseImg/courseImg13.jpg',
        name: '《全民总动员》',
        introduce: '《全民总动员》 — 团队建设'
      },
    ],
    hasMore:true,
  },
  changeTabs: function (event) {
      var txt = event.currentTarget.dataset.text;
      var getid = event.currentTarget.dataset.id;
      // console.log(event);
      this.setData({
        // tabName: txt,
        setSelected: getid
      })
    },
  gopath:function(event){
    var dex = event.currentTarget.dataset.id;
    // console.log(dex);
    // setTimeout(function(){
    wx.navigateTo({
        url: '/pages/coursedetail/coursedetail?item='+dex,
        success: function(res){
          // success
          // console.log(res);
        },
        fail: function(res) {
          // fail
        },
        complete: function(res) {
          // complete
        }
      })
    // },1000);
   
  },
  onLoad:function(){
    // wx.request({
    //   url: url,
    //   data: {},
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   success: function(res){
    //     // success
    //     console.log(res);
    //   },
    //   fail: function(res) {
    //     // fail
    //     console.log(res);
    //   },
    //   complete: function(res) {
    //     // complete
    //   }
    // })
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    // String7
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
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '体验学习，您身边的培训专家', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})