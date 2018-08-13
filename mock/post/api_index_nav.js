
// 首页商品分类接口
module.exports = function (param) {
  return {
    success: '0000',
    errorCode: '0000',
    msg: '',
    'data|7': [{
      'id': '@id',
      'itemType|+1': ['演唱会', '音乐会','歌剧话剧','曲苑杂坛','体育比赛','儿童亲子','舞蹈芭蕾'],
      'level': 1,
      'parent': 0,
      'aliasName|+1': ['戏剧', '体育','亲子','摇滚','舞蹈古典'],
      'children|2-3': [{
        'id': '@id',
        'itemType|+1': ['子类1', '子类2', '子类3', '子类4', '子类5', '子类6'],
        'level': 2,
        'parent': 1,
        'aliasName': ''
      }],
      'hotItems|4-5': [{
        'id': '@id',
        'itemName': '@csentence',
        'minPrice|100-1000': 123,
        'imgUrl|+1': ['/static/img/cardimg1.jpg',
        '/static/img/cardimg2.jpg',
        '/static/img/cardimg3.jpg',
        '/static/img/cardimg4.jpg',
        '/static/img/cardimg5.jpg'
      ]
      }]
    }]
  }
}
