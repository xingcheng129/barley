<template>
  <div class="hello">
  	<div>
  		<label for="">用户名</label>
  		<input type="text" v-model="user.name"/>
  	</div>
  	<div>
  		<label for="">密码</label>
  		<input type="password" v-model="user.pwd"/>
  	</div>
    <button @click="send()">发送</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
		return {
			user:{
				name:"",
				pwd:""
			}
		}
  },
  methods:{
    send(){
    	console.log(this);
    	const That = this; 
      this.$http.helloword("/api/user/login",this.user).then(function(rel){
          console.log(rel);
          if(rel.success == 0){
          	console.log(this);
          	That.$router.push({
          		name:"Home",
          		path:"home",
          		params:{
          			user:rel.user
          		}
          	})
          }else{
	      		console.log(rel.msg);
	      	}
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
