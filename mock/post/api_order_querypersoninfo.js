// 1. 根据用户Id返回用户信息
// 本接口用于个人信息页根据用户Id返回用户信息
module.exports = function (param) {
  // 用于个人信息页根据用户Id返回用户信息
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data": {  
      // 昵称
      nickName: "一路阳光",
      // 联系电话
      phone: "13678902310",
      // 真实姓名
      realName: "大名",
      // 性别
      "sex|1": [
        "0",
        "1"
      ],
      // 身份证号
      idCard: "372892303849230398",
      // 生日
      birthday: '@date("yyyy-MM-dd")',
      // 用户头像
      headUrl: "@image(150x150)",
      // 兴趣爱好
      interest: "@csentence(20)"
    }
  }
}
