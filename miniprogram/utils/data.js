const dimensionMeta = {
  S1: { name: 'S1 自尊自信', model: '自我模型' },
  S2: { name: 'S2 自我清晰度', model: '自我模型' },
  S3: { name: 'S3 核心价值', model: '自我模型' },
  E1: { name: 'E1 依恋安全感', model: '情感模型' },
  E2: { name: 'E2 情感投入度', model: '情感模型' },
  E3: { name: 'E3 边界与依赖', model: '情感模型' },
  A1: { name: 'A1 世界观倾向', model: '态度模型' },
  A2: { name: 'A2 规则与灵活度', model: '态度模型' },
  A3: { name: 'A3 人生意义感', model: '态度模型' },
  Ac1: { name: 'Ac1 动机导向', model: '行动驱力模型' },
  Ac2: { name: 'Ac2 决策风格', model: '行动驱力模型' },
  Ac3: { name: 'Ac3 执行模式', model: '行动驱力模型' },
  So1: { name: 'So1 社交主动性', model: '社交模型' },
  So2: { name: 'So2 人际边界感', model: '社交模型' },
  So3: { name: 'So3 表达与真实度', model: '社交模型' }
};

const questions = [
  {
    id: 'q1', dim: 'S1',
    text: '我不仅是屌丝，我还是joker,我还是咸鱼，这辈子没谈过一场恋爱，胆怯又自卑，我的青春就是一场又一场的意淫，每一天幻想着我也能有一个女孩子和我一起压马路，一起逛街，一起玩，现实却是爆了父母金币，读了个烂学校，混日子之后找班上，没有理想，没有目标，没有能力的三无人员，每次看到你能在网上开屌丝的玩笑，我都想哭，我就是地底下的老鼠，透过下水井的缝隙，窥探地上的各种美好，每一次看到这种都是对我心灵的一次伤害，对我生存空间的一次压缩，求求哥们给我们这种小丑一点活路吧，我真的不想在白天把枕巾哭湿一大片',
    options: [
      { label: '我哭了。。', value: 1 },
      { label: '这是什么。。', value: 2 },
      { label: '这不是我！', value: 3 }
    ]
  },
  {
    id: 'q2', dim: 'S1',
    text: '我不够好，周围的人都比我优秀',
    options: [
      { label: '确实', value: 1 },
      { label: '有时', value: 2 },
      { label: '不是', value: 3 }
    ]
  },
  {
    id: 'q3', dim: 'S2',
    text: '我很清楚真正的自己是什么样的',
    options: [
      { label: '不认同', value: 1 },
      { label: '中立', value: 2 },
      { label: '认同', value: 3 }
    ]
  },
  {
    id: 'q4', dim: 'S2',
    text: '我内心有真正追求的东西',
    options: [
      { label: '不认同', value: 1 },
      { label: '中立', value: 2 },
      { label: '认同', value: 3 }
    ]
  },
  {
    id: 'q5', dim: 'S3',
    text: '我一定要不断往上爬、变得更厉害',
    options: [
      { label: '不认同', value: 1 },
      { label: '中立', value: 2 },
      { label: '认同', value: 3 }
    ]
  },
  {
    id: 'q6', dim: 'S3',
    text: '外人的评价对我来说无所吊谓。',
    options: [
      { label: '不认同', value: 1 },
      { label: '中立', value: 2 },
      { label: '认同', value: 3 }
    ]
  },
  {
    id: 'q7', dim: 'E1',
    text: '对象超过5小时没回消息，说自己窜稀了，你会怎么想？',
    options: [
      { label: '拉稀不可能5小时，也许ta隐瞒了我。', value: 1 },
      { label: '在信任和怀疑之间摇摆。', value: 2 },
      { label: '也许今天ta真的不太舒服。', value: 3 }
    ]
  },
  {
    id: 'q8', dim: 'E1',
    text: '我在感情里经常担心被对方抛弃',
    options: [
      { label: '是的', value: 1 },
      { label: '偶尔', value: 2 },
      { label: '不是', value: 3 }
    ]
  },
  {
    id: 'q9', dim: 'E2',
    text: '我对天发誓，我对待每一份感情都是认真的！',
    options: [
      { label: '并没有', value: 1 },
      { label: '也许？', value: 2 },
      { label: '是的！（问心无愧骄傲脸）', value: 3 }
    ]
  },
  {
    id: 'q10', dim: 'E2',
    text: '你的恋爱对象是一个尊老爱幼，温柔敦厚，洁身自好，光明磊落，大义凛然，能言善辩，口才流利，观察入微，见多识广，博学多才，诲人不倦，和蔼可亲，平易近人，心地善良，慈眉善目，积极进取，意气风发，玉树临风，国色天香，倾国倾城，花容月貌的人，此时你会？',
    options: [
      { label: '就算ta再优秀我也不会陷入太深。', value: 1 },
      { label: '会介于A和C之间。', value: 2 },
      { label: '会非常珍惜ta，也许会变成恋爱脑。', value: 3 }
    ]
  },
  {
    id: 'q11', dim: 'E3',
    text: '恋爱后，对象非常黏人，你作何感想？',
    options: [
      { label: '那很爽了', value: 1 },
      { label: '都行无所谓', value: 2 },
      { label: '我更喜欢保留独立空间', value: 3 }
    ]
  },
  {
    id: 'q12', dim: 'E3',
    text: '我在任何关系里都很重视个人空间',
    options: [
      { label: '我更喜欢依赖与被依赖', value: 1 },
      { label: '看情况', value: 2 },
      { label: '是的！（斩钉截铁地说道）', value: 3 }
    ]
  },
  {
    id: 'q13', dim: 'A1',
    text: '大多数人是善良的',
    options: [
      { label: '其实邪恶的人心比世界上的痔疮更多。', value: 1 },
      { label: '也许吧。', value: 2 },
      { label: '是的，我愿相信好人更多。', value: 3 }
    ]
  },
  {
    id: 'q14', dim: 'A1',
    text: '你走在街上，一位萌萌的小女孩蹦蹦跳跳地朝你走来（正脸、侧脸看都萌，用vivo、苹果、华为、OPPO手机看都萌，实在是非常萌的那种），她递给你一根棒棒糖，此时你作何感想？',
    options: [
      { label: '呜呜她真好真可爱！居然给我棒棒糖！', value: 3 },
      { label: '一脸懵逼，作挠头状', value: 2 },
      { label: '这也许是一种新型诈骗？还是走开为好。', value: 1 }
    ]
  },
  {
    id: 'q15', dim: 'A2',
    text: '快考试了，学校规定必须上晚自习，请假会扣分，但今晚你约了女/男神一起玩《绝地求生：刺激战场》（一款刺激的游戏），你怎么办？',
    options: [
      { label: '翘了！反正就一次！', value: 1 },
      { label: '干脆请个假吧。', value: 2 },
      { label: '都快考试了还去啥。', value: 3 }
    ]
  },
  {
    id: 'q16', dim: 'A2',
    text: '我喜欢打破常规，不喜欢被束缚',
    options: [
      { label: '认同', value: 1 },
      { label: '保持中立', value: 2 },
      { label: '不认同', value: 3 }
    ]
  },
  {
    id: 'q17', dim: 'A3',
    text: '我做事通常有目标。',
    options: [
      { label: '不认同', value: 1 },
      { label: '中立', value: 2 },
      { label: '认同', value: 3 }
    ]
  },
  {
    id: 'q18', dim: 'A3',
    text: '突然某一天，我意识到人生哪有什么他妈的狗屁意义，人不过是和动物一样被各种欲望支配着，纯纯是被激素控制的东西，饿了就吃，困了就睡，一发情就想交配，我们简直和猪狗一样没什么区别。',
    options: [
      { label: '是这样的。', value: 1 },
      { label: '也许是，也许不是。', value: 2 },
      { label: '这简直是胡扯', value: 3 }
    ]
  },
  {
    id: 'q19', dim: 'Ac1',
    text: '我做事主要为了取得成果和进步，而不是避免麻烦和风险。',
    options: [
      { label: '不认同', value: 1 },
      { label: '中立', value: 2 },
      { label: '认同', value: 3 }
    ]
  },
  {
    id: 'q20', dim: 'Ac1',
    text: '你因便秘坐在马桶上（已长达30分钟），拉不出很难受。此时你更像',
    options: [
      { label: '再坐三十分钟看看，说不定就有了。', value: 1 },
      { label: '用力拍打自己的屁股并说：“死屁股，快拉啊！”', value: 2 },
      { label: '使用开塞露，快点拉出来才好。', value: 3 }
    ]
  },
  {
    id: 'q21', dim: 'Ac2',
    text: '我做决定比较果断，不喜欢犹豫',
    options: [
      { label: '不认同', value: 1 },
      { label: '中立', value: 2 },
      { label: '认同', value: 3 }
    ]
  },
  {
    id: 'q22', dim: 'Ac2',
    text: '此题没有题目，请盲选',
    options: [
      { label: '反复思考后感觉应该选A？', value: 1 },
      { label: '啊，要不选B？', value: 2 },
      { label: '不会就选C？', value: 3 }
    ]
  },
  {
    id: 'q23', dim: 'Ac3',
    text: '别人说你“执行力强”，你内心更接近哪句？',
    options: [
      { label: '我被逼到最后确实执行力超强。。。', value: 1 },
      { label: '啊，有时候吧。', value: 2 },
      { label: '是的，事情本来就该被推进', value: 3 }
    ]
  },
  {
    id: 'q24', dim: 'Ac3',
    text: '我做事常常有计划，____',
    options: [
      { label: '然而计划不如变化快。', value: 1 },
      { label: '有时能完成，有时不能。', value: 2 },
      { label: '我讨厌被打破计划。', value: 3 }
    ]
  },
  {
    id: 'q25', dim: 'So1',
    text: '你因玩《第五人格》（一款刺激的游戏）而结识许多网友，并被邀请线下见面，你的想法是？',
    options: [
      { label: '网上口嗨下就算了，真见面还是有点忐忑。', value: 1 },
      { label: '见网友也挺好，反正谁来聊我就聊两句。', value: 2 },
      { label: '我会打扮一番并热情聊天，万一呢，我是说万一呢？', value: 3 }
    ]
  },
  {
    id: 'q26', dim: 'So1',
    text: '朋友带了ta的朋友一起来玩，你最可能的状态是',
    options: [
      { label: '对“朋友的朋友”天然有点距离感，怕影响二人关系', value: 1 },
      { label: '看对方，能玩就玩。', value: 2 },
      { label: '朋友的朋友应该也算我的朋友！要热情聊天', value: 3 }
    ]
  },
  {
    id: 'q27', dim: 'So2',
    text: '我和人相处主打一个电子围栏，靠太近会自动报警。',
    options: [
      { label: '认同', value: 3 },
      { label: '中立', value: 2 },
      { label: '不认同', value: 1 }
    ]
  },
  {
    id: 'q28', dim: 'So2',
    text: '我渴望和我信任的人关系密切，熟得像失散多年的亲戚。',
    options: [
      { label: '认同', value: 1 },
      { label: '中立', value: 2 },
      { label: '不认同', value: 3 }
    ]
  },
  {
    id: 'q29', dim: 'So3',
    text: '有时候你明明对一件事有不同的、负面的看法，但最后没说出来。多数情况下原因是：',
    options: [
      { label: '这种情况较少。', value: 1 },
      { label: '可能碍于情面或者关系。', value: 2 },
      { label: '不想让别人知道自己是个阴暗的人。', value: 3 }
    ]
  },
  {
    id: 'q30', dim: 'So3',
    text: '我在不同人面前会表现出不一样的自己',
    options: [
      { label: '不认同', value: 1 },
      { label: '中立', value: 2 },
      { label: '认同', value: 3 }
    ]
  }
];

const specialQuestions = [
  {
    id: 'drink_gate_q1',
    special: true,
    kind: 'drink_gate',
    text: '您平时有什么爱好？',
    options: [
      { label: '吃喝拉撒', value: 1 },
      { label: '艺术爱好', value: 2 },
      { label: '饮酒', value: 3 },
      { label: '健身', value: 4 }
    ]
  },
  {
    id: 'drink_gate_q2',
    special: true,
    kind: 'drink_trigger',
    text: '您对饮酒的态度是？',
    options: [
      { label: '小酌怡情，喝不了太多。', value: 1 },
      { label: '我习惯将白酒灌在保温杯，当白开水喝，酒精令我信服。', value: 2 }
    ]
  }
];

const TYPE_LIBRARY = {
  "CTRL": { "code": "CTRL", "cn": "拿捏者", "intro": "怎么样，被我拿捏了吧？", "desc": "恭喜您，您测出了全中国最为罕见的人格，您是宇宙熵增定律的天然反抗者！..." },
  "ATM-er": { "code": "ATM-er", "cn": "送钱者", "intro": "你以为我很有钱吗？", "desc": "恭喜您，您竟然测出了这个世界上最稀有的人格。您或将成为金融界的未解之谜..." },
  "Dior-s": { "code": "Dior-s", "cn": "屌丝", "intro": "等着我屌丝逆袭。", "desc": "恭喜！您并非屌丝，您是犬儒主义先贤第欧根尼失散多年的精神传人..." },
  "BOSS": { "code": "BOSS", "cn": "领导者", "intro": "方向盘给我，我来开。", "desc": "BOSS是一个手里永远拿着方向盘的人。哪怕油箱已经亮了红灯..." },
  "THAN-K": { "code": "THAN-K", "cn": "感恩者", "intro": "我感谢苍天！我感谢大地！", "desc": "恭喜您，您测出了全中国最为罕见的人格。您应当感谢我！..." },
  "OH-NO": { "code": "OH-NO", "cn": "哦不人", "intro": "哦不！我怎么会是这个人格？！", "desc": "“哦不！”并非恐惧的尖叫，而是一种顶级的智慧。当普通人看到一个杯子放在桌沿..." },
  "GOGO": { "code": "GOGO", "cn": "行者", "intro": "gogogo~出发咯", "desc": "经研究发现，GOGO人格的大脑构造与常人有根本性不同。GOGO活在一个极致的世界里..." },
  "SEXY": { "code": "SEXY", "cn": "尤物", "intro": "您就是天生的尤物！", "desc": "当您走进一个房间，照明系统会自动将您识别为天生的尤物..." },
  "LOVE-R": { "code": "LOVE-R", "cn": "多情者", "intro": "爱意太满，现实显得有点贫瘠。", "desc": "LOVE-R人格像远古神话时代幸存至今的珍稀物种..." },
  "MUM": { "code": "MUM", "cn": "妈妈", "intro": "或许...我可以叫你妈妈吗....?", "desc": "恭喜您，您测出了全中国最稀有的妈妈人格。是的，在混沌未开之前..." },
  "FAKE": { "code": "FAKE", "cn": "伪人", "intro": "已经，没有人类了。", "desc": "SCP基金会紧急报告：项目编号 SCP-CN-████ “伪人”。在社交场合..." },
  "OJBK": { "code": "OJBK", "cn": "无所谓人", "intro": "我说随便，是真的随便。", "desc": "让我们直面这个词的粗犷本质：OJBK。这已经不是一种人格，而是一种统治哲学。" },
  "MALO": { "code": "MALO", "cn": "吗喽", "intro": "人生是个副本，而我只是一只吗喽。", "desc": "朋友，你不是“童心未泯”，你压根就没进化。你的灵魂还停留在那里..." },
  "JOKE-R": { "code": "JOKE-R", "cn": "小丑", "intro": "原来我们都是小丑。", "desc": "请注意，JOKE-R人格不是一个“人”，更像一个把笑话穿在身上的小丑。" },
  "WOC!": { "code": "WOC!", "cn": "握草人", "intro": "卧槽，我怎么是这个人格？", "desc": "我们发现了一种神奇的生物——WOC!人。他们拥有两种完全独立的操作系统..." },
  "THIN-K": { "code": "THIN-K", "cn": "思考者", "intro": "已深度思考100s。", "desc": "经研究发现，THIN-K人格的大脑构造与常人有根本性不同。正如名称所示..." },
  "SHIT": { "code": "SHIT", "cn": "愤世者", "intro": "这个世界，构石一坨。", "desc": "恭喜您，SHIT人格是宇宙中已知的唯一一种稀有人格。所谓狗屎，并不是在抱怨..." },
  "ZZZZ": { "code": "ZZZZ", "cn": "装死者", "intro": "我没死，我只是在睡觉。", "desc": "恭喜您，您测出了全中国最稀有的装死人格。群里99+条消息您可以视而不见..." },
  "POOR": { "code": "POOR", "cn": "贫困者", "intro": "我穷，但我很专。", "desc": "恭喜您，您测出了【POOR - 贫困者】。这个“贫困”不是钱包余额的判决书..." },
  "MONK": { "code": "MONK", "cn": "僧人", "intro": "没有那种世俗的欲望。", "desc": "当别人在KTV里参悟爱与恨的纠缠，MONK人格选择在家中参悟一份大道。" },
  "IMSB": { "code": "IMSB", "cn": "傻者", "intro": "认真的么？我真的是傻逼么？", "desc": "恭喜您！您根本不在人类范畴内！您测出了百万年一遇的【IMSB】人格。" },
  "SOLO": { "code": "SOLO", "cn": "孤儿", "intro": "我哭了，我怎么会是孤儿？", "desc": "恭喜您，您测出了全中国最稀有的【SOLO - 孤儿】人格。别急着哭，国王的加冕..." },
  "FUCK": { "code": "FUCK", "cn": "草者", "intro": "操！这是什么人格？", "desc": "恭喜您！您根本不在人类范畴内！您测出了百万年一遇的【FUCK】人格。" },
  "DEAD": { "code": "DEAD", "cn": "死者", "intro": "我，还活着吗？", "desc": "恭喜您，您测出了全中国最为罕见的人格，只是“死者”这个名字实在有点晦气..." },
  "IMFW": { "code": "IMFW", "cn": "废物", "intro": "我真的...是废物吗？", "desc": "恭喜您，您测出的不是一个普通人格，您是一种极其珍稀的、仅占世界人口0.0001％的——【废物】。" },
  "HHHH": { "code": "HHHH", "cn": "傻乐者", "intro": "哈哈哈哈哈哈。", "desc": "恭喜您！由于您的思维回路过于清奇，标准人格库已全面崩溃..." },
  "DRUNK": { "code": "DRUNK", "cn": "酒鬼", "intro": "烈酒烧喉，不得不醉。", "desc": "您为什么走路摇摇晃晃？您为什么总是情绪高涨？因为您体内流淌的不是血液，是美味的白酒！..." }
};

const TYPE_IMAGES = {
  "IMSB": "/images/IMSB.png", "BOSS": "/images/BOSS.png", "MUM": "/images/MUM.png",
  "FAKE": "/images/FAKE.png", "Dior-s": "/images/Dior-s.jpg", "DEAD": "/images/DEAD.png",
  "ZZZZ": "/images/ZZZZ.png", "GOGO": "/images/GOGO.png", "FUCK": "/images/FUCK.png",
  "CTRL": "/images/CTRL.png", "HHHH": "/images/HHHH.png", "SEXY": "/images/SEXY.png",
  "OJBK": "/images/OJBK.png", "JOKE-R": "/images/JOKE-R.jpg", "POOR": "/images/POOR.png",
  "OH-NO": "/images/OH-NO.png", "MONK": "/images/MONK.png", "SHIT": "/images/SHIT.png",
  "THAN-K": "/images/THAN-K.png", "MALO": "/images/MALO.png", "ATM-er": "/images/ATM-er.png",
  "THIN-K": "/images/THIN-K.png", "SOLO": "/images/SOLO.png", "LOVE-R": "/images/LOVE-R.png",
  "WOC!": "/images/WOC.png", "DRUNK": "/images/DRUNK.png", "IMFW": "/images/IMFW.png"
};

const NORMAL_TYPES = [
  {"code": "CTRL", "pattern": "HHH-HMH-MHH-HHH-MHM"},
  {"code": "ATM-er", "pattern": "HHH-HHM-HHH-HMH-MHL"},
  {"code": "Dior-s", "pattern": "MHM-MMH-MHM-HMH-LHL"},
  {"code": "BOSS", "pattern": "HHH-HMH-MMH-HHH-LHL"},
  {"code": "THAN-K", "pattern": "MHM-HMM-HHM-MMH-MHL"},
  {"code": "OH-NO", "pattern": "HHL-LMH-LHH-HHM-LHL"},
  {"code": "GOGO", "pattern": "HHM-HMH-MMH-HHH-MHM"},
  {"code": "SEXY", "pattern": "HMH-HHL-HMM-HMM-HLH"},
  {"code": "LOVE-R", "pattern": "MLH-LHL-HLH-MLM-MLH"},
  {"code": "MUM", "pattern": "MMH-MHL-HMM-LMM-HLL"},
  {"code": "FAKE", "pattern": "HLM-MML-MLM-MLM-HLH"},
  {"code": "OJBK", "pattern": "MMH-MMM-HML-LMM-MML"},
  {"code": "MALO", "pattern": "MLH-MHM-MLH-MLH-LMH"},
  {"code": "JOKE-R", "pattern": "LLH-LHL-LML-LLL-MLM"},
  {"code": "WOC!", "pattern": "HHL-HMH-MMH-HHM-LHH"},
  {"code": "THIN-K", "pattern": "HHL-HMH-MLH-MHM-LHH"},
  {"code": "SHIT", "pattern": "HHL-HLH-LMM-HHM-LHH"},
  {"code": "ZZZZ", "pattern": "MHL-MLH-LML-MML-LHM"},
  {"code": "POOR", "pattern": "HHL-MLH-LMH-HHH-LHL"},
  {"code": "MONK", "pattern": "HHL-LLH-LLM-MML-LHM"},
  {"code": "IMSB", "pattern": "LLM-LMM-LLL-LLL-MLM"},
  {"code": "SOLO", "pattern": "LML-LLH-LHL-LML-LHM"},
  {"code": "FUCK", "pattern": "MLL-LHL-LLM-MLL-HLH"},
  {"code": "DEAD", "pattern": "LLL-LLM-LML-LLL-LHM"},
  {"code": "IMFW", "pattern": "LLH-LHL-LML-LLL-MLL"}
];

const DIM_EXPLANATIONS = {
  "S1": { "L": "对自己下手比别人还狠...","M": "自信值随天气波动...","H": "心里对自己大致有数..." },
  "S2": { "L": "内心频道雪花较多...", "M": "平时还能认出自己...", "H": "对自己的脾气门儿清..." },
  "S3": { "L": "更在意舒服和安全...", "M": "想上进，也想躺会儿...", "H": "很容易被目标推着往前..." },
  "E1": { "L": "警报器灵敏...", "M": "一半信任一半试探...", "H": "更愿意相信关系本身..." },
  "E2": { "L": "感情投入偏克制...", "M": "会投入但有后手...", "H": "一旦认定极易认真..." },
  "E3": { "L": "容易黏人...", "M": "亲密和独立都需要一点...", "H": "空间感很重要..." },
  "A1": { "L": "看世界自带防御滤镜...", "M": "既不天真也不彻底阴谋论...", "H": "更愿意相信人性和善意..." },
  "A2": { "L": "规则能绕就绕...", "M": "适度变通...", "H": "秩序感较强..." },
  "A3": { "L": "意义感偏低...", "M": "人生观处于半开机...", "H": "做事更有方向..." },
  "Ac1": { "L": "避险系统先启动...", "M": "动机混合...", "H": "易被成果点燃..." },
  "Ac2": { "L": "决定前脑内多转...", "M": "正常犹豫...", "H": "拍板速度快..." },
  "Ac3": { "L": "靠死线激发...", "M": "状态看时机...", "H": "事情不落地不踏实..." },
  "So1": { "L": "社交启动慢热...", "M": "有人来就接...", "H": "更愿意主动打开场子..." },
  "So2": { "L": "熟了把人划进内圈...", "M": "边界感看对象调节...", "H": "边界感偏强..." },
  "So3": { "L": "表达更直接...", "M": "真实体面各留一点...", "H": "真实感分层发放..." }
};

const dimensionOrder = ['S1', 'S2', 'S3', 'E1', 'E2', 'E3', 'A1', 'A2', 'A3', 'Ac1', 'Ac2', 'Ac3', 'So1', 'So2', 'So3'];

module.exports = {
  dimensionMeta,
  questions,
  specialQuestions,
  TYPE_LIBRARY,
  TYPE_IMAGES,
  NORMAL_TYPES,
  DIM_EXPLANATIONS,
  dimensionOrder
};
