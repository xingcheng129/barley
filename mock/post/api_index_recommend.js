// 首页今日推荐接口
module.exports = function () {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    'data|6': [{
      'id': '@id',
      'itemName': '@csentence',
      'minPrice|100-1000': 123,
      'imgUrl|+1': [
        '/static/img/cardimg6.jpg',
        '/static/img/cardimg2.jpg',
        '/static/img/cardimg3.jpg',
        '/static/img/cardimg4.jpg',
        '/static/img/cardimg5.jpg'
      ]
    }]
  }
}
