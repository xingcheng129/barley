//2. 下单接口
// 本接口用于提交订单的相关信息
module.exports = function (param) {
  // 返回值用于测试查看是否提交成功
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data": { "orderNo": '@id' }
  }
}
