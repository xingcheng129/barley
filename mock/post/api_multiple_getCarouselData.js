//2. 查询分类接口
// 本接口用于商品搜索页查询商品分类列表
module.exports = function (param) {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data|4": [
      {
        id: '@id',
        itemName: "冰雪奇缘-话剧",
        minPrice: 20,
        'imgUrl|1':
          [
            "/static/img/pic3.jpg",
            "/static/img/pic2.jpg",
            "/static/img/pic1.jpg",
            "/static/img/img_03.9ebf4b3.png"
          ]
      },
    ]
  }
}
