//3.根据城市、一级分类、二级分、时间、排序字段查询商品信息
module.exports = function (param) {
 let  paid = 0 ;
  if (paid == 0) {
    return {
      "success": "string",
      "errorCode": "string",
      "msg": "",
      "data": {
        "currentPage": 1,
        "pageCount": 1,
        "pageSize": 10,
        "rows|10": [
          {
            "id": '@string("number", 2)',
            "imgUrl": 'https://pimg.dmcdn.cn/perform/project/1381/138121_n.jpg',
            "areaName": param.body.citys.name == ''?"@province":param.body.citys.name,
            "itemName": '@csentence(5)',
            "abstractMessage": param.body.categrays.name == ''? '@csentence()':'@csentence()'+param.body.categrays.name,
            "startTime": '@datetime("yyyy-MM-dd")',
            "endTime": '@datetime("yyyy-MM-dd")',
            "adress": '@county(true)',
            "latitude":'@float(60, 100, 3)',
            "longitude":'@float(60, 100, 3)',
            "minPrice": '@integer(60, 100)',
            "maxPrice": '@integer(80, 300)'
            
          }
        ],
        "total": "@integer(80, 100)"
      }
    }
  }else if (paid == 1) {
    return {
      "success": "string",
      "errorCode": "string",
      "msg": "",
      "data": {
        "currentPage": 1,
        "pageCount": 1,
        "pageSize": 10,
        "rows|6": [
          {
            "id": '@string("number", 3)',
            "imgUrl": 'https://pimg.dmcdn.cn/perform/project/1381/138121_n.jpg',
            "areaName": '@province',
            "itemName": '@csentence(10)',
            "abstractMessage": '@csentence()',
            "startTime": '@datetime("yyyy-MM-dd")',
            "endTime": '@datetime("yyyy-MM-dd")',
            "adress": '@county(true)',
            "latitude":'@float(60, 100, 3)',
            "longitude":'@float(60, 100, 3)',
            "minPrice": '@integer(60, 100)',
            "maxPrice": '@integer(80, 300)'
          }
        ],
        "total": 6
      }
    }
  }else if (paid == 2) {
    return {
      "success": "string",
      "errorCode": "string",
      "msg": "",
      "data": {
        "currentPage": 1,
        "pageCount": 1,
        "pageSize": 10,
        "rows|6": [
          {
            "id": '@string("number", 3)',
            "imgUrl": 'https://pimg.dmcdn.cn/perform/project/1381/138121_n.jpg',
            "areaName": '@province',
            "itemName": '@csentence(15)',
            "abstractMessage": '@csentence()',
            "startTime": '@datetime("yyyy-MM-dd")',
            "endTime": '@datetime("yyyy-MM-dd")',
            "adress": '@county(true)',
            "latitude":'@float(60, 100, 3)',
            "longitude":'@float(60, 100, 3)',
            "minPrice": '@integer(60, 100)',
            "maxPrice": '@integer(80, 300)'
          }
        ],
        "total": 6
      }
    }
  }else if (paid == 3) {
    return {
      "success": "string",
      "errorCode": "string",
      "msg": "",
      "data": {
        "currentPage": 1,
        "pageCount": 1,
        "pageSize": 10,
        "rows|6": [
          {
            "id": '@string("number", 3)',
            "imgUrl": 'https://pimg.dmcdn.cn/perform/project/1381/138121_n.jpg',
            "areaName": '@province',
            "itemName": '@csentence(20)',
            "abstractMessage": '@csentence()',
            "startTime": '@datetime("yyyy-MM-dd")',
            "endTime": '@datetime("yyyy-MM-dd")',
            "adress": '@county(true)',
            "latitude":'@float(60, 100, 3)',
            "longitude":'@float(60, 100, 3)',
            "minPrice": '@integer(60, 100)',
            "maxPrice": '@integer(80, 300)'
          }
        ],
        "total": 6
      }
    }
  } else  {
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
/*  */