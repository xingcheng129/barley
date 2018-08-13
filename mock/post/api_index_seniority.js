// 获取分类排行
module.exports = function () {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    'data|8-13': [{
      id: '@id',
      itemName: '@csentence',
      areaId: '@id',
      areaName: '@city'
    }]
  }
}
