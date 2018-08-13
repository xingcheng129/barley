// 获取登录验证码
module.exports = function (req) {
  const phone = req.body.phone || ''
  let success = 0
  let errorCode = '0000'
  let msg = '验证发送成功'
  let data = '1234'

  // 13311112222 测试失败情况
  if (!phone || phone === '13311112222') {
    success = 10007
    errorCode = '10007'
    msg = '手机号未注册'
    data = null
  }

  return {
    success,
    errorCode,
    msg,
    data
  }
}
