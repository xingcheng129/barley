//2. 查询分类接口
// 本接口用于商品搜索页查询商品分类列表
module.exports = function (param) {
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data|9": [ 
          {
            'day|+3':20180108,
            'itemList|1-2': [
              {
                id: "1",
                itemName: "小柯音乐剧未来三部曲之《我变了，我没变》",
                areaId: "",
                areaName: "",
                address: "",
                startDate: "2018年1月8日 11:56",
                endDate: "",
                'imgUrl|+1': ['/static/img/calendar01.png',
                '/static/img/calendar02.png',
                '/static/img/calendar03.png',
                '/static/img/calendar04.png',
                '/static/img/calendar05.png',
                '/static/img/calendar06.png',
                '/static/img/calendar07.png',
                '/static/img/calendar08.png',
                '/static/img/calendar09.png',
              ],
                minPrice: ""
              } 
            ]
          }
       
    ]
  }
}
 