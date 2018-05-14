<template>
  <div class="list">
  	<div class="listimg" v-for="item in list">
      <div class="title">
        <p class="titletop">{{item.title}}</p>
        <p class="titlebottom">{{item.content}}</p>
      </div>
  		<img :src="GLOBAL.url+item.image">
  	</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'List',
  data:function () {
    return {
      list:[]
    }
  },
  mounted(){
      axios.get(this.GLOBAL.url+"/api/ad_api/AdvertisementPic")
      .then((res)=>{
         //console.log(res.data.data.image);
        this.list = res.data.data;
        console.log(this.list)
      })   
  }
}
</script>


<style scoped lang="scss">
	.list{
		width:100%;
		height:5.75rem;
		display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    flex-grow:1;
		.listimg{
			width:49.5%;
		img{
			width:100%;
			//height:345px;
      position:relative;
			}
      .title{
        width:49.5%;
        position:absolute;
        z-index:1;
        color:#fff;
        text-align:center;
      .titletop{
        font-family: AdobeHeitiStd-Regular;
        font-size: 0.40rem;
        font-weight: normal;
        }
      .titlebottom{
        font-family: AdobeHeitiStd-Regular;
        font-size: 0.20rem;
        font-weight: normal;
        margin-top:-.2rem;
        }
      }
		}
    img:hover{
      transform:scale(1.02);
      transition:all 2s ;
    }

	}
</style>
