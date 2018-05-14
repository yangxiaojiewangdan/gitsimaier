<template>
  <div class="menu">
    <div class="tagPage">
  		<div class="tag" v-for="item in mentList">
    		<div class="btn" @click="chengFlag(`${item.id}`)">{{item.name}}</div>
  		</div>
     	 <div class="ulMent" v-for="item in mentListTow">  
        		{{item.name}}
      	</div>
	</div>
  </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'Menu',
  data () {
    return {
      mentList:[],
      mentListTow:[]
    }
  },
  mounted(){
  	//一级菜单
  	 axios.get(this.GLOBAL.url+"/api/server_api/ServerCategory")
      .then((res)=>{
        //console.log(res)
        this.mentList= res.data.data
        //console.log(this.mentList)
      });
      this.chengFlag(1)

  },
  methods:{
  	//二级菜单
  	chengFlag(id){
      axios.post(this.GLOBAL.url+"/api/server_api/ChildrenCategory",qs.stringify({arrId:id}))
      .then((res)=>{
        //console.log(res)
        this.mentListTow= res.data.data
        //console.log(this.mentListTow)
      })
    },
  }
}
</script>


<style scoped lang="scss">
.tagPage{
  width:8.4rem;
  margin:.3rem auto;
    .ulMent{
        height:.2rem;
        display:inline-block;
        font-size:14px;
        margin:.2rem auto;
        margin-left:.4rem;
        cursor:pointer;
    }
    div:hover{
      color:#77bfe0;
    }
}
  .tag{
    width:1.14rem;
    height:.3rem;
    margin:0 auto;
    //margin-bottom:.7rem;
    display:inline-block;
    text-align:center;
    line-height:.3rem;
    border:1px solid #77dbed;
    border-radius:5px;
    margin-left:.2rem;
    cursor:pointer;
    font-family: AdobeHeitiStd-Regular;
    font-size: 18px;
    div:hover{
      background-image: linear-gradient(-72deg, 
        rgba(102, 235, 255, 0.91) 0%, 
        rgba(94, 188, 235, 0.91) 59%, 
        rgba(86, 141, 214, 0.91) 100%), 
      linear-gradient(
        #2b2b2b, 
        #2b2b2b);
      background-blend-mode: normal, 
        normal;
      border-radius: 5px;
      color:#fff;
    }
  }
</style>
