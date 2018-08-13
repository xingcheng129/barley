//2. 查询分类接口
// 本接口用于商品搜索页查询商品分类列表
module.exports = function (param) {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data|7": [
      {
        id: "1",
        itemName: "小柯音乐剧《我变了，我没变》",
        areaId: "",
        areaName: "深圳市少年宫剧场",
        address: "深圳市少年宫剧场",
        startDate: "2018.1.8",
        endDate: "2018.1.9",
        'imgUrl|1': ["/static/img/img_07.748404b.png",
          "/static/img/cardimg6.jpg", 
          "/static/img/cardimg1.jpg",
           "/static/img/cardimg2.jpg",
            "/static/img/cardimg3.jpg", 
            "/static/img/cardimg4.jpg", 
            "/static/img/cardimg5.jpg"],
        minPrice: "120"
      } 
    ]
  }
}
