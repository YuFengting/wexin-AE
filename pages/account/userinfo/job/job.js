// pages/account/userinfo/job/job.js
Page({
  data:{
    selectedflag:false,
		Index:{typeindex:0,jobindex:0},
    jobLists:[
      {
        type:'通用岗位',
        alljob:[
          '销售',
          '市场',
          '人力资源',
          '行政',
          '公关',
          '客服',
          '采购',
          '技工',
          '公司职员',
          '职业经理人',
          '私营企业主',
          '中层管理者',
          '自由职业者',
        ]
      },{
        type:'IT互联网',
        alljob:[
          '开发工程师',
          '测试工程师',
          '设计师',
          '运营师',
          '产品经理'
        ]
      },{
        type:'文化传媒',
        alljob:[
          '编辑策划',
          '记者',
          '媒体工作者',
        ]
      },{
        type:'金融',
        alljob:[
          '咨询',
          '投行',
          '保险',
          '金融分析',
          '财务'
        ]
      },{
        type:'医疗生物',
        alljob:[
          '医生',
          '护士',
          '宠物医生',
          '医学研究'
        ]
      },{
        type:'政府组织',
        alljob:[
          '公务员',
          '事业单位',
          '国企工作者',
          '运动员'
        ]
      },{
        type:'服务业',
        alljob:[
          '导游',
          '家政服务',
          '美容美发',
          '婚庆摄影',
          '运动健身'
        ]
      },{
        type:'其他',
        alljob:[
          '其他'
        ]
      }
    ]
  },
  selectjob:function(event){
    let typeIndex = event.currentTarget.dataset.typeindex;
		let jobIndex = event.currentTarget.dataset.index;
		let getvalue = event.currentTarget.dataset.value;
		if(jobIndex == this.data.Index.jobindex){
				jobIndex = -1;
		}
		this.setData({
				Index:{
					typeindex:typeIndex,
					jobindex:jobIndex,
					// value:getvalue
				}
		});
		
		var pages = getCurrentPages();
		var prevPage = pages[pages.length - 2]; //通过页面栈获取上一个页面的整个页面实例
		prevPage.setData({
			userJob: getvalue,
			jobindex:jobIndex,
			typeindex:typeIndex
		})

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
		this.setData({
				Index:{
					// value:options.item
					jobindex:options.jobindex,
					typeindex:options.typeindex
				}
		});
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