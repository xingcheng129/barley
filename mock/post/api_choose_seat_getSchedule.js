//2. 查询分类接口
// 本接口用于商品搜索页查询商品分类列表
module.exports = function (param) {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data": {
      scheduleId: 12,
      cinemaId: 13,
      seatPriceList: [
        { areaLevelName: "A", price: 90 },
        { areaLevelName: "B", price: 100 },
        { areaLevelName: "C", price: 120 }
      ],
      seatInfoList: [
        {
          id: "12_12",
          x: 1,
          y: 6,
          areaLevel: "A",
          cinemaId: "12",
          sort: "16",
          status: 1
        },
        {
          id: "12_2",
          x: 1,
          y: 7,
          areaLevel: "A",
          cinemaId: "12",
          sort: "16",
          status: 1
        }
      ] 
    }
  }
}
