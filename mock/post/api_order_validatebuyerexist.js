// 3. 验证购票人是否已经存在
module.exports = function (param) {
  // 输入idCard 身份证号做验证
  return {
    success: '',
    /* 0000	购票人不存在
      1009	购票人已存在 */
    "errorCode|1": ['0000', '1009'],
    msg: '',
    "data": null
  }
}
