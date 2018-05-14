<template>
  <div class="banner">
    <div class="block">
   	<el-carousel trigger="click"height="400px">
      	<el-carousel-item v-for="item in bannerList" :key="item" class="banner"> 
          <img :src="GLOBAL.url+item.image" >
    	</el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'Banner',
  data () {
    return {
    	bannerList:[]
    }
  },
  mounted(){
  	axios.get(this.GLOBAL.url+"/api/server_api/getServerPic")
  	.then((res)=>{
  		console.log(res)
  		this.bannerList = res.data.data
  	})
  }
}
</script>


<style scoped lang="scss">
.banner{
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
