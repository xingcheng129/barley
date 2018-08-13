
// 获取注册验证码
module.exports = function (req) {
  const phone = req.body.phone || ''
  let success = 0
  let errorCode = '0000'
  let msg = '验证发送成功'
  let data = '1234'

  // 13311112222 测试失败情况
  if (!phone || phone === '13311112222') {
    success = 1001
    errorCode = '10001'
    msg = '手机号格式不正确'
    data = null
  }

  return {
    success,
    errorCode,
    msg,
    data
  }
}
