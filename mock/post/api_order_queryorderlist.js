// 1. 根据订单状态、订单创建时间、关键词(商品名称，订单号，商品编号模糊)

// 说明:本接口用于订单管理页面查询
module.exports = function (param) {
  // 返回值用于测试查看筛选订单的结果

  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data|3": [
      {
        orderNo: "@id",
        sellTime: "@now()",
        itemName: "@csentence(20)",
        num: "@integer(1, 5)",
        unitPrice: "@integer(100, 200)",
        totalAmount: "@integer(600, 1000)",
        "orderType|1": [
          "-1",
          "0",
          "2"
        ],
        operate: ""
      }
    ]
  }

  
  // orderType 订单类型
  /* let orderTypeNum = parseInt(param.body.orderType);
  // orderTime 订单创建时间
  let orderTime = parseInt(param.body.orderTime);
  // keyword 关键词
  let keyword = parseInt(param.body.keyword);
   let orderTypeNum = 10;
  let keyword = 10;
  let orderTime = 0; 
  if (orderTypeNum == -1) {// orderType 订单类型
    return {
      success: '',
      errorCode: '0000',
      msg: '',
      "data": {
        orderNo: "@id",
        sellTime: "@now()",
        itemName: "@csentence(10)",
        num: "@integer(1, 5)",
        unitPrice: "@integer(100, 200)",
        totalAmount: "@integer(600, 1000)",
        "orderType|1": [
          "-1",
          "0",
          "2"
        ],
        operate: ""
      }
    }
  } else if (orderTypeNum == 0 || orderTypeNum == 2) {
    return {
      success: '',
      errorCode: '0000',
      msg: '',
      "data": {
        orderNo: "@id",
        sellTime: "@now()",
        itemName: "@csentence(15)",
        num: "@integer(1, 5)",
        unitPrice: "@integer(100, 200)",
        totalAmount: "@integer(600, 1000)",
        "orderType|1": [
          "-1",
          "0",
          "2"
        ],
        operate: ""
      }
    }
  } else if (orderTime == 0 && orderTypeNum == "") {// orderTime 订单创建时间
    return {
      success: '',
      errorCode: '0000',
      msg: '',
      "data": {
        orderNo: "@id",
        sellTime: "@now()",
        itemName: "@csentence(5)",
        num: "@integer(1, 5)",
        unitPrice: "@integer(100, 200)",
        totalAmount: "@integer(600, 1000)",
        "orderType|1": [
          "-1",
          "0",
          "2"
        ],
        operate: ""
      }
    }
  } else if (orderTime == 1 || orderTime == 2) {
    return {
      success: '',
      errorCode: '0000',
      msg: '',
      "data": {
        orderNo: "@id",
        sellTime: "@now()",
        itemName: "@csentence(3)",
        num: "@integer(1, 5)",
        unitPrice: "@integer(100, 200)",
        totalAmount: "@integer(600, 1000)",
        "orderType|1": [
          "-1",
          "0",
          "2"
        ],
        operate: ""
      }
    }
  } else {// keyword 关键词
    
  } */


}
