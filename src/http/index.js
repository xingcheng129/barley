/**
 * Created by Administrator on 2018/8/13 0013.
 */
import * as http from './http'
const $http = http;
export default{
  install(Vue){
    Vue.prototype.$http = http;
  }
}
