//4. 猜你喜欢接口
module.exports = function (param) {
 let  paid = parseInt(param.body.itemTypeId) ;
  // let  paid = 1;
  if (paid == 0) {
    return {
      "success": "string",
      "errorCode": "string",
      "msg": "",
      "data|1-4":  [
          {
            "id": '@string("number", 2)',
            "itemName": '@csentence(5)',
            "imgUrl": 'https://pimg.dmcdn.cn/perform/project/1381/138121_n.jpg',
            "areaId": '@string("number", 3)',
            "areaName": '@province',
            "address": '@county(true)',
            "startDate": '@datetime("yyyy-MM-dd")',
            "endDate": '@datetime("yyyy-MM-dd")',
            "minPrice": '@integer(60, 100)'
          }
        ]
    }
  }else if (paid == 1) {
    return {
      "success": "string",
      "errorCode": "string",
      "msg": "",
      "data|1-4": 
         [
          {
            "id": '@string("number", 2)',
            "itemName": '@csentence(10)',
            "imgUrl": 'https://pimg.dmcdn.cn/perform/project/1381/138121_n.jpg',
            "areaId": '@string("number", 3)',
            "areaName": '@province',
            "address": '@county(true)',
            "startDate": '@datetime("yyyy-MM-dd")',
            "endDate": '@datetime("yyyy-MM-dd")',
            "minPrice": '@integer(60, 100)'
          }
        ]
    }
  }else  {
    return {
      "success": "string",
      "errorCode": "string",
      "msg": "",
      "data": {
        "currentPage": param,
        "pageCount": 1,
        "pageSize": 10,
        "total": 6
      }
    }
  }

}