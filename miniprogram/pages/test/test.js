const dataUtil = require('../../utils/data.js');
const app = getApp();

Page({
  data: {
    visibleQuestions: [],
    answers: {},
    totalCount: 0,
    doneCount: 0,
    percent: 0,
    isComplete: false,
    hintText: '全选完才会放行。世界已经够乱了，起码把题做完整。'
  },

  onLoad() {
    this.startTest();
  },

  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  startTest() {
    const shuffledRegular = this.shuffle(dataUtil.questions);
    const insertIndex = Math.floor(Math.random() * shuffledRegular.length) + 1;
    this.shuffledQuestions = [
      ...shuffledRegular.slice(0, insertIndex),
      dataUtil.specialQuestions[0],
      ...shuffledRegular.slice(insertIndex)
    ];
    
    this.setData({
      answers: {}
    }, () => {
      this.updateVisibleQuestions();
    });
  },

  getVisibleQuestions() {
    const answers = this.data.answers;
    const visible = [...this.shuffledQuestions];
    const gateIndex = visible.findIndex(q => q.id === 'drink_gate_q1');
    if (gateIndex !== -1 && answers['drink_gate_q1'] == 3) {
      visible.splice(gateIndex + 1, 0, dataUtil.specialQuestions[1]);
    }
    return visible;
  },

  updateVisibleQuestions() {
    const visible = this.getVisibleQuestions();
    const answers = this.data.answers;
    const totalCount = visible.length;
    const doneCount = visible.filter(q => answers[q.id] !== undefined).length;
    const percent = totalCount ? (doneCount / totalCount) * 100 : 0;
    const isComplete = doneCount === totalCount && totalCount > 0;
    
    this.setData({
      visibleQuestions: visible,
      totalCount,
      doneCount,
      percent,
      isComplete,
      hintText: isComplete 
        ? '都做完了。现在可以把你的电子魂魄交给结果页审判。'
        : '全选完才会放行。世界已经够乱了，起码把题做完整。'
    });
  },

  onRadioChange(e) {
    const qid = e.currentTarget.dataset.qid;
    const value = e.detail.value;
    
    const answers = this.data.answers;
    answers[qid] = Number(value);

    // Dynamic gate question check
    if (qid === 'drink_gate_q1') {
      if (Number(value) !== 3) {
        delete answers['drink_gate_q2'];
      }
    }

    this.setData({
      answers: answers
    });

    this.updateVisibleQuestions();
  },

  goBack() {
    wx.navigateBack();
  },

  submitTest() {
    // Stores temporarily in global string or passes as object
    app.globalData.answers = this.data.answers;
    wx.navigateTo({
      url: '/pages/result/result'
    });
  }
})
