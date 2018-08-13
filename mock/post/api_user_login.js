// 密码登录接口
module.exports = function (req) {
  const phone = req.body.phone || ''
  let success = 0
  let errorCode = '0000'
  let msg = '登录成功'
  let data = {
    token: '@guid',
    extTime: '60',
    genTime: Math.round(Date.now() / 1000) + '',
    nickName: '巴巴爸爸'
  }

  // 13311112222 测试失败情况
  if (!phone || phone === '13311112222') {
    success = 1006
    errorCode = '1006'
    msg = '用户名或密码错误'
    data = null
  }

  return {
    success,
    errorCode,
    msg,
    data
  }
}
