//2. 查询分类接口
// 本接口用于商品搜索页查询商品分类列表
module.exports = function (param) {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data|6": [
      {
        id: "@id",
        itemName: "小柯音乐剧未来三部曲之《我变了，我没变》",
        areaId: "",
        areaName: "深圳市少年宫剧场",
        address: "深圳市少年宫剧场",
        startDate: "2018.1.8",
        endDate: "2018.1.9",
        'imgUrl|1': [
          "/static/img/child1.png",
          "/static/img/child2.png",
          "/static/img/child3.png",
          "/static/img/child4.png",
          "/static/img/child5.png",
          "/static/img/child6.png"
        ],
        minPrice: "120"
      }
    ]
  }
}
 