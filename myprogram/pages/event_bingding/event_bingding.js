// pages/event_bingding/event_bingding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0, 
    msg: "hello,"
  },

  btnTapHandler(e){
    console.log(e)
  },

  countChange(){
    this.setData({
      count: this.data.count + 1
    })
    console.log(this.data)
  },

// 使用event.target.dataset."参数名" 获取参数值
  btnTap2(event){
    this.setData({
      count: this.data.count + event.target.dataset.info
    })
    console.log(this.data.count)
  },

  // input输入框的事件处理函数
  inputHandler(e){
    this.setData({
      msg: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})