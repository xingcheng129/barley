
// 首页根据token返回用户信息接口
module.exports = function (param) {
  return {
    success: '0000',
    errorCode: '0000',
    msg: '',
    'data': [{
      'userId': '@id',
      'phone':'13122222222',
      'realName': '@name',
      'nickName': '@name',
      'sex|+1': ['男','女'],
      'idCard': 111111111111111111
    }]
  }
}
