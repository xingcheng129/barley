
// 使用手机号注册
module.exports = function (req) {
  const phone = req.body.phone || ''
  let success = 0
  let errorCode = '0000'
  let msg = '注册成功'
  let data = null

  // 13311112222 测试失败情况
  if (!phone || phone === '13311112222') {
    success = 1004
    errorCode = '1004'
    msg = '验证码不正确'
  }

  return {
    success,
    errorCode,
    msg,
    data
  }
}
