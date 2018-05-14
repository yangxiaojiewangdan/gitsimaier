//vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var store = new Vuex.Store({
	state:{
		orderNum: 0,
	}//cart: [],
})

// 持久化：从本地取出数据
// if(localStorage.getItem("data")) {
// 	var data = JSON.parse(localStorage.getItem("data"));
// 	state = data;
// }

// function saveTolocal(state) {
// 	// 持久化：保存数据
// 	localStorage.setItem("data", JSON.stringify(state));
// }

const mutations = {
	//setUserName: function(state, username) {
		//state.username = username;
		// 持久化：保存数据
		//saveTolocal(state);
		getAxios:function(state,orderNum){
		axios.get("http://192.168.1.158/api/order_api/nowBuy")
		.then((res)=>{
			//console.log(res)
			this.orderNum = res.data.data.order_number
			//console.log(this.orderNum)
		})	

	}
}
	// addToCart: function(state, goods_info) {
	// 	state.cart.push(goods_info);
	// 	// 持久化：保存数据
	// 	saveTolocal(state);
	// }

const actions = {
	getAxios:function({commit},orderNum){
		commit("getAxios",orderNum)
	},
	// setUserNameA: function({commit}, username) {
	// 	commit("setUserName", username)
	// },
	// addToCartA: function({commit}, goods_info) {
	// 	commit("addToCart", goods_info);
	// }
}

export default new Vuex.Store({
	store,
	mutations,
	actions
})