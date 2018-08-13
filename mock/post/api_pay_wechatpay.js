/* 确认支付页接口

2. 获取微信支付codeUrl 接口 */
module.exports = function (param) {
  // 返回微信支付的相关信息
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data": {
      orderNo: '@id',
      itemName: '@cword(10)',
      // 浮点数 最小值-最大值-最少位数-最大位数
      totalAmount: '@float(60, 100, 1, 4)',
      // 微信官方生成的数据，用于生成二维码
      codeUrl:"微信返回的URL地址"
    }
  }
}
