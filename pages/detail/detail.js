// pages/detail/detail.js
Page({
  data:{
    detail: {},
    hidden: false,
    is_collect: false,
    modalHidden: true,
    title: '话题详情',
    collectText: '收藏'
  },
  collect: function() {
    //用户登入了吗？
    //本地存储
    var accesstoken = wx.getStorageSync('CuserInfo').accesstoken;
    if(!accesstoken) {
      this.setData({
        modalHidden: false
      })
    }
  },
  onLoad:function(options){
    // id解析
    var id = options.id;
    this.fetchData(id);
    // 页面初始化 options为页面跳转所带来的参数
  },
  confirmChange: function() {
    this.setData({
      modalHidden: true
    });
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  cancelChange: function() {
    this.setData({
      modalHidden: true
    })
  },
  // 获取详情页数据
  fetchData: function(id) {
    var url = 'https://cnodejs.org/api/v1/topic';
    url += '/' + id + '?mdrender=false';
    console.log(url);
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      success: function(res) {
        console.log(res.data.data);
        setTimeout(function() {
          that.setData({
            hidden: true,
            detail: res.data.data
          });
        }, 1000)

        // console.log(res.data.data);
      }
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
