<template>
  <div class="register">
  	<Passcheck></Passcheck>
  	<div class="contentbox">
	  	<div class="content1" v-for="item in listuser">
	  		<router-link to="/Reguser">
	  			<img :src="GLOBAL.url+item.image">
	  			<p class="p1">{{item.content}}</p>
			</router-link>
	  	</div>
	  	<div class="content2" v-for="item in listhospital">
	  		<router-link to="/Reguser">
	  			<img :src="GLOBAL.url+item.image">
	  			<p>{{item.content}}</p>
			</router-link>
	  	</div>
	  	<div class="content3" v-for="item in listdoctor">
	  		<router-link to="/Reguser">
	  			<img :src="GLOBAL.url+item.image">
	  			<p>{{item.content}}</p>
			</router-link>
	  	</div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import Passcheck from '../components/Passcheck'
export default {
  name: 'Register',
  components:{
  	Passcheck
  },
  data:function() {
    return {
      listuser:[],
      listhospital:[],
      listdoctor:[]
    }
  },
  mounted(){
      axios.get(this.GLOBAL.url+"/api/ad_api/personalloginpic")
      .then((res)=>{
         console.log(res.data.data.image);
        this.listuser = res.data.data;
        console.log(this.listuser)
      })
      axios.get(this.GLOBAL.url+"/api/ad_api/hospitalLoginPic")
      .then((res)=>{
         console.log(res.data.data.image);
        this.listhospital = res.data.data;
        console.log(this.listhospital)
      })
      axios.get(this.GLOBAL.url+"/api/ad_api/doctorLoginPic")
      .then((res)=>{
         console.log(res.data.data.image);
        this.listdoctor = res.data.data;
        console.log(this.listdoctor)
      })         
  }
}
</script>


<style scoped lang="scss">
	.register{
	.contentbox{
		display:flex;
	}
	.content1,.content2,.content3{
		height:100%;
		img{
			width:100%;
			height:100%;
		}
		p{
			font-size:18px;
      color:red;
		}
	}
}	
	
</style>
