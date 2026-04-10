const calcUtil = require('../../utils/calc.js');
const dataUtil = require('../../utils/data.js');
const app = getApp();

Page({
  data: {
    result: null,
    imageSrc: '',
    dimList: [],
    funNote: ''
  },

  onLoad() {
    const answers = app.globalData.answers || {};
    const res = calcUtil.computeResult(answers);
    
    // Prepare view data
    const dimList = dataUtil.dimensionOrder.map(dim => {
      const level = res.levels[dim];
      return {
        name: dataUtil.dimensionMeta[dim].name,
        level: level,
        score: res.rawScores[dim],
        explanation: dataUtil.DIM_EXPLANATIONS[dim][level]
      };
    });

    const imageSrc = dataUtil.TYPE_IMAGES[res.finalType.code] || '';

    const funNote = res.special 
      ? '本测试仅供娱乐。隐藏人格和傻乐兜底都属于故意埋的损招，请勿把它当成医学、心理学、相学、命理学或灵异学依据。'
      : '本测试仅供娱乐，别拿它当诊断、面试、相亲、分手、招魂、算命或人生判决书。你可以笑，但别太当真。';

    this.setData({
      result: res,
      imageSrc,
      dimList,
      funNote
    });
  },

  retest() {
    wx.navigateBack({
      delta: 1, // Go back to test page
      success: function() {
        // Optionally trigger reload on test page, or just navigate to novel test page
      }
    });
    // Alternative: Redirect to index
    wx.reLaunch({
      url: '/pages/test/test'
    });
  },

  goHome() {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  }
})
