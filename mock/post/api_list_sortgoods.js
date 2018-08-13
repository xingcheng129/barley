//2. 查询分类接口
// 本接口用于商品搜索页查询商品分类列表
module.exports = function (param) {
  param=param.body.parent;
  let level=param==0?'"level": 1':('"level|1-2":'+param);
  let levelParam='{"id|+1": 1,  '+
    '"itemType|+1": [  '+
    '  "音乐会",  '+
    '  "朗诵",  '+
    '  "曲苑杂坛",  '+
    '  "独奏",  '+
    '  "管弦乐",  '+
    '  "声乐及合唱",  '+
    '],  '+
    level+','+
    '"parent|1-3" : 0,  '+
    'aliasName : ""  }'
    let json=eval('('+levelParam+')');
    let test = {
    	"childType|3:[大 ,中,小]"
    }
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data|6": [
      json
    ],
    child:[
    	test
    ]
  }
}

/* {
  "success": '',
  "errorCode": '0000',
  "msg": '',
} */