/* 确认支付页接口

1. 根据订单号查询订单 */
module.exports = function (param) {
  // 返回订单的相关信息
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data": {
      orderNo: '@id',
      itemName: '@cword(10)',
      // 浮点数 最小值-最大值-最少位数-最大位数
      totalAmount: '@float(60, 100, 1, 4)'
    }
  }
}
