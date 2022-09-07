export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxf8f3bf43f6c06b54",

  // 公众号APP_SECRET
  APP_SECRET: "156f370b1972f7f4981b3727d8cbe905",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "宝宝",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "oBG7a5xTR6YIVRzLRWwtnYUjYyjw",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "cC5IhFwzC4cUh0H6XXnfd67I7XQ341y6KnRX1o1HOBA",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://www.weibo.com/"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "宝宝",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oBG7a5xTR6YIVRzLRWwtnYUjYyjw",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "cC5IhFwzC4cUh0H6XXnfd67I7XQ341y6KnRX1o1HOBA",
      // 所在省份
      province: "陕西",
      // 所在城市
      city: "渭南",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.bilibili.com"
    } 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjV1glIuCXo4Csr23aXWEio1iP74sZJ7IQEES95lDsg6c4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oBG7a50IpWeuFUAoA8uqz6DDgNPU",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */



  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "香宝宝", "year": "2002", "date": "12-24"},
  //  {"type": "节日", "name": "相识纪念日", "year": "2018", "date": "04-26"},//
    {"type": "生日", "name": "臭宝宝", "year": "2002", "date": "08-26"},
    {"type": "节日", "name": "在一起纪念日", "year": "2019", "date": "01-21"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2019-01-21"},
    // 结婚纪念日
 //   {"keyword": "marry_day", date: "2020-01-04"},
    // 退伍日, 不用可以删掉
 //   {"keyword": "ex_day", date: "2022-08-31"},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "爱你爱你爱你！"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
    //  "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "小说"


}
