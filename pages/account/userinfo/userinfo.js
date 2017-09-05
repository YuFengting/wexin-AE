// pages/account/userinfo/userinfo.js
var area = require("../../../data/area.js")
var p = 0, c=0,d=0
var app = getApp()
Page({
  data:{
    userInfo:{},
    userJob:'',
    typeindex:0,
    jobindex:0,
    sexvalue:'女',
    cityRange: ['南京','苏州','无锡','常州','徐州','南通','连云港','淮安','盐城','扬州','镇江','泰州','宿迁'],
    cityIndex:3,
    commpyName:'',
    commpyAddr:'',
    popShow:false,
    provinceName:[],
    provinceCode: [],
    provinceSelName: '',
    provinceSelIndex:0,
    cityName: [],
    cityCode: [],
    citySelName: '',
    citySelIndex: 0,
    districtName: [],
    districtCode: [],
    districtSelName: '',
    districtSelIndex: 0
  },
  //选择头像
  changeHeadImg:function(){
    var that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        var tempFilePaths = res.tempFilePaths[0];
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function(res) {
            var savedFilePath = res.savedFilePath
          }
        })
       
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
          
          //更新数据
          that.setData({
            userInfo:{
              avatarUrl:tempFilePaths,
              nickName:userInfo.nickName
            }
          });
          var pages = getCurrentPages();
          var prevPage = pages[pages.length - 2]; //通过页面栈获取上一个页面的整个页面实例
          prevPage.setData({
            userInfo:{
                avatarUrl:tempFilePaths,
                nickName:userInfo.nickName
              }
          })
        })
        
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  //更改名字
  changeName:function(){
      wx.navigateTo({
        url: '../../account/userinfo/nickname/nickname',
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
  //选择性别
  selectSex:function(){
    var that = this;
    wx.showActionSheet({
      itemList: ['男','女'],
      success:function(res){
        var e = res.tapIndex;
        if(e == 0){
          that.setData({
            sexvalue:'男'
          })
        }else{
          that.setData({
            sexvalue: '女'
          })
        }
      }
    })
  },
  //选择地区
  selectCity:function(event){
    this.setData({
      cityIndex:event.detail.value
    });
  },
  selectAddress:function(){
    this.setData({
      popShow:true,
    });
  },
  /*选择地区数据 */
  setAreaData:function(p,c,d){
    var p = p || 0;
    var c = c || 0;
    var d = d || 0;
    //设置省数据
    var province = area[100000];
    var provinceName = [];
    var provinceCode = [];
    for(var item in province){
      provinceName.push(province[item]);
      provinceCode.push(item);
    }
    this.setData({
      provinceName:provinceName,
      provinceCode:provinceCode
    });
    //设置市数据
    var cityName = [];
    var cityCode = [];
    var city = area[provinceCode[p]];
    for(var item in city){
      cityName.push(city[item]);
      cityCode.push(item);
    }
    this.setData({
      cityName:cityName,
      cityCode:cityCode
    });
    //设置区的数据
    var districtName = [];
    var districtCode = [];
    var district = area[cityCode[c]];
    for(var item in district){
      districtName.push(district[item]);
      districtCode.push(item);
    }
   this.setData({
      districtName:districtName,
      districtCode:districtCode
    });
  },
  bindChange:function(e){
    var val = e.detail.value;
    p = val[0];
    c = val[1];
    d = val[2];
    this.setAreaData(p,c,d);
  },
  distpickerCancel:function(){
    this.setData({
      popShow:false
    });
  },
  distpickerSure:function(){
    var provinceName = this.data.provinceName;
    var cityName = this.data.cityName;
    var districtName = this.data.districtName;
    if(districtName[d] == undefined || districtName[d] == null){
         districtName[d] = "";
    }
    this.setData({
      provinceSelName: provinceName[p],
      citySelName:cityName[c],
      districtSelName:districtName[d],
      provinceSelIndex:p,
      citySelIndex:c,
      districtSelIndex:d
    })
    this.distpickerCancel();
  },
  //跳转职业页面
  goJob:function(event){
    var typeindex = event.currentTarget.dataset.typeindex;
    var jobindex = event.currentTarget.dataset.jobindex;
    wx.navigateTo({
      url: '../../account/userinfo/job/job?typeindex='+typeindex+'&jobindex='+jobindex,
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
  //跳转填写公司名称
  addCommpyName:function(event){
    var val = event.currentTarget.dataset.value;
    wx.navigateTo({
      url: '../../account/userinfo/commpyname/commpyname?item='+val,
    })
  },
  //跳转填写公司地址
  addCommpyAddr: function (event) {
    var val = event.currentTarget.dataset.value;
    wx.navigateTo({
      url: '../../account/userinfo/commpyaddr/commpyaddr?item='+val,
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    this.setAreaData();
   
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