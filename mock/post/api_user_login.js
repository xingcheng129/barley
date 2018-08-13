module.exports = function(req){
	console.log(2);
	let success = 0;
	let errorCode = "0000000";
	let msg = "登录成功";
	let user = {
		name: "王宝强",
		age: 18,
		sex: '男'
	}
	return {
		success,
		errorCode,
		msg,
		user
	}
}
