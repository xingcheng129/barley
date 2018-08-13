//2. 查询分类接口
// 本接口用于商品搜索页查询商品分类列表
module.exports = function (param) {
  let baseDesc='<div class="mess-box">'+
              '  <hr>'+
              '  <div class="title">基本信息</div>'+
              '  <div class="body ">'+
              '      <table>'+
              '          <tr class="row">'+
              '              <td class="column">演出时间</td>'+
              '              <td class="column">2018.01.06-01.14</td>'+
              '              <td class="column">演出场馆</td>'+
              '              <td class="column">光华路5号国际会展中心三楼湖西岛音乐厅</td>'+
              '          </tr>'+
              '          <tr class="row">'+
              '              <td class="column">演出时间</td>'+
              '              <td class="column">2018.01.06-01.14</td>'+
              '              <td class="column">演出场馆</td>'+
              '              <td class="column">光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅光华路5号国际会展中心三楼湖西岛音乐厅</td>'+
              '          </tr>'+
              '      </table>'+
              '  </div>'+
              '</div>';
  let projectDesc=
        '<div class="mess-box">'+
        '    <hr>'+
        '    <div class="title">项目介绍</div>'+
        '    <div class="body">'+
        '        <div class="project-desc">'+
        '            <div class="pro-title">英文站入口</div> '+
        '            <p>英文站购买链接：https://en.dami.cn/event/tickets_135693/</p>'+
        '            <div class="pro-title">演出介绍</div>'+
        '            <p>世界经典原版音乐剧《猫》 </p>'+
        '             <p>猫的足迹</p> '+
        '             <p>超过20种语言，30个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众 </p> '+
        '             <p>横扫7座托尼奖，囊获奥利弗奖、格莱美奖等全球主要奖项</p> '+
        '             <p>伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一</p> '+
        '              <p class="p-img">'+
        '                  <img src="/static/img/img_01.21e9c6f.png"  alt="">'+
        '              </p>'+
        '             <p>伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一</p> '+
        '             <p>伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一</p> '+
        '             <p>伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一</p> '+
        '        </div>'+
        '    </div>'+
        '</div>';
  return {
    success: '',
    errorCode: '0000',
    msg: '',
    "data": {
      id: 161,
      itemName: "大型多媒体励志互动儿童剧《奇门遁甲》（11月）",
      abstractMessage: "奇门遁甲",
      itemType1Id: "1",
      itemType1Name: "电影",
      itemType2Id: "101",
      itemType2Name: "演唱会",
      areaId: "1",
      areaName: "北京",
      state: 2,
      basicDescription: baseDesc,
      projectDescription: projectDesc,
      reminderDescription: "",
      imgUrl: "/static/img/img_01.21e9c6f.png",
      cinemaId: 123,
      adress: "中国儿童中心剧院 - 海淀",
      latitude: 125.55,
      longitude: 156.77,
      avgScore: 4.6,
      commentCount: 3000,
      startTime: "2017-12-23",
      endTime: "2017-12-26"
    }
  }
}
 