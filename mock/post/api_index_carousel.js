// 首页轮播图接口接口
module.exports = function () {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    'data|2-4': [{
      id: '@id',
      itemName: '',
      minPrice: 111,
      'imgUrl|+1': [
        '/static/img/pic1.jpg',
        '/static/img/pic2.jpg',
        '/static/img/pic3.jpg'
      ]
    }]
  }
}
