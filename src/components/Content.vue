<template>
  <div class="content">
  	<div class="getimg" v-for="item in list">
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
  name: 'Content',
  data :function() {
    return {
    	list:[],
    	url:this.GLOBAL.url,//全局变量url
    }
  },
  mounted(){
      axios.get(this.GLOBAL.url+"/api/ad_api/getIndexPic")
      .then((res)=>{
         console.log(res.data.data.image);
        this.list = res.data.data;
        console.log(this.list)
      })   
  },
  methods:{
    chengFlag(){
      
    }
  }
}
</script>


<style scoped lang="scss">
	.content{
		width:100%;
		.getimg{
			width:100%;
			margin-bottom:.15rem;
			img{
        position:relative;
				width:100%;
			}
      .title{
        width:1.9rem;
        text-align:center;
        position:absolute;
        z-index:9999;
        left:50%;
        margin-left:-.95rem;
        .titletop{
          font-family: AdobeHeitiStd-Regular;
          font-size:30px;
          line-height:.2rem;
          font-weight: normal;
          color: #333333;
        }
        .titlebottom{
          font-family: AdobeHeitiStd-Regular;
          font-size: 16px;
          font-weight: 600;
          margin-top:-0.15rem;
          color: #333333;
          letter-spacing: 1px;
        }
      }
		}
     img:hover{
      transform:scale(1.03);
      transition:all 2s ;
      //background-color: rgba(252, 252, 252, 0.1);
      opacity: 0.9;
      z-index:999;
    }
	}
</style>
