/* 确认支付页接口

2. 获取微信支付codeUrl 接口 */
module.exports = function (param) {
  // 返回微信支付的相关信息
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data": {
      "orderNo": '@id',
      // 微信支付是否成功，提示的状态
      // 0:未支付 -1:支付超时/支付取消 2:已支付
      /* 
      'name|min-max': object
      从属性值 object 中随机选取 min 到 max 个属性。 
      */
      "orderType|1":  [
        "-1",
        "0",
        "2"
      ]
    }
  }
}
