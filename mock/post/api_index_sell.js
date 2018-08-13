// 首页即将开售接口
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
        '/static/img/cardimg4.jpg',
        '/static/img/cardimg5.jpg',
        '/static/img/cardimg3.jpg',
        '/static/img/cardimg2.jpg',
        '/static/img/cardimg1.jpg'
      ]
    }]
  }
}
