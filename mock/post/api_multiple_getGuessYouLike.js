//2. 查询分类接口
// 本接口用于商品搜索页查询商品分类列表
module.exports = function (param) {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data|6":
      [
        {
          'id|+1': 1,
          itemName: "小柯音乐剧 我变了，我没变》",
          areaId: "",
          areaName: "",
          address: "",
          startDate: "2018年1月8日 11:56",
          endDate: "",
          'imgUrl|1':
          ["/static/img/cardimg6.jpg",
            "/static/img/cardimg2.jpg",
            "/static/img/cardimg1.jpg",
            "/static/img/cardimg3.jpg",
            "/static/img/cardimg4.jpg",
            "/static/img/cardimg5.jpg"
          ],
          'minPrice|+10': 100
        }
      ]
  }
}
