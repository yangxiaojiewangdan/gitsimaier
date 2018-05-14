<template>
  <div class="service">
    <Header></Header>
   <Nav></Nav>
  <Anchors></Anchors>
   <!-- 轮播 -->
   <div class="block">
   	<el-carousel trigger="click">
      	<el-carousel-item v-for="item in list" :key="item" class="banner"> 
          <img :src="GLOBAL.url+item.image" >
    	</el-carousel-item>
    </el-carousel>
  </div>
  <!-- 一级标题 -->
<div class="tagPage">
  <div class="tag" v-for="item in mentList">
    <div class="btn" @click="chengFlag(`${item.id}`)">{{item.name}}</div>
  </div>
      <div class="ulMent" v-for="item in mentListTow">  
        {{item.name}}
      </div>
</div>
  <hr>
  <div class="servList">
    <!-- 下拉菜单 -->
      <select v-model="selected">
          <option v-for="option in options1" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>

      <select v-model="selected">
          <option v-for="option in options2" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>
      <select v-model="selected">
          <option v-for="option in options3" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>
      <select v-model="selected">
          <option v-for="option in options4" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>
      <select v-model="selected">
          <option v-for="option in options5" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>

<!-- 产品列表 -->
  <div class="listBox">

      <div class="list" v-for="item in ProductList">
        <div class="imgBox">
          <router-link :to="{name:'ServiceDetails',params:{fid: item.id}}">
            <img :src="item.pic">
          </router-link>
        </div>
        <div class="priseBox">
          <span class="name">{{item.name}}</span>
          <span class="prise">预约价:￥<span class="priseNum">{{item.pirce}}</span></span>
        </div>
        <div class="yuanprise">原价:￥{{item.virtual_price}}</div>
        <div class="last">
          <div class="imgBox2">
            <img src="../assets/img/形状21.png">
          </div>
          <span class="title">{{item.hospital_name}}</span>
            <button class="btn">立即预约</button>
        </div>
      </div> 
  </div>
</div>
<div class="page">
 <el-pagination
  background
  @prev-click="pagtop"
  @next-click="pagbottom"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
</div>
   <Footerr></Footerr>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footerr from '../components/Footerr'
import Anchors from '../components/Anchors'
export default {
  name: 'Service',
  components:{
  	Header,
  	Nav,
    Anchors,
  	Footerr
  },
  data:function() {    
    return {
      list:[],     //轮播
      mentList:[],  //一级菜单
      mentListTow:[],//二级菜单
      ProductList:[],//产品列表
      selected:"",
      //下拉数据
       options1: [
      { text: '智能排序'},
      { text: 'Two'},
      { text: 'Three'}
    ],
    options2: [
      { text: '优惠活动'},
      { text: 'Two'},
      { text: 'Three'}
    ],
    options3: [
      { text: '价格'},
      { text: 'Two'},
      { text: 'Three'}
    ],
    options4: [
      { text: '商户'},
      { text: 'Two'},
      { text: 'Three'}
    ],
    options5: [
      { text: '更多'},
      { text: 'Two'},
      { text: 'Three'}
    ],
    }
  },
  methods:{
    pagtop(){
      console.log("上一页")
    },
    pagbottom(){
      console.log("下一页")
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
    },
    //二级菜单
    chengFlag(id){
      axios.post(this.GLOBAL.url+"/api/server_api/ChildrenCategory",qs.stringify({arrId:id}))
      .then((res)=>{
        //console.log(res)
        this.mentListTow= res.data.data
        //console.log(this.mentListTow)
      })
    },
    abcd(){
      console.log("你好")
    }
  },
  mounted(){
    //轮播
    // console.log(this.$route.query.name,this.$route.query.age)
     axios.get(this.GLOBAL.url+"/api/server_api/getServerPic")
      .then((res)=>{
       //console.log(res)
       this.list= res.data.data
      }); 
      //一级菜单
      axios.get(this.GLOBAL.url+"/api/server_api/ServerCategory")
      .then((res)=>{
        //console.log(res)
        this.mentList= res.data.data
        //console.log(this.mentList)
      });
      //产品列表
      axios.get(this.GLOBAL.url+"/api/server_api/goodslist")
      .then((res)=>{
        console.log(res)
        this.ProductList= res.data.data
        console.log(this.ProductList)
      });
      this.chengFlag(1)
  }
}
</script>


<style scoped lang="scss">
.banner{
  img{
    width:100%;
  }
}
.tagPage{
  width:8.4rem;
  margin:.2rem auto;
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
  .servList{
    width:12rem;
    margin:0 auto;
    select{
      margin-left:.2rem;
      display:inline-block;
      width:1rem;
      height:.3rem;
      background-color: rgba(43, 43, 43, 0.2);
      border-radius: 5px;
      color:#333333;
      outline:none;
      width: auto;
      padding: 0 2%;
      margin: 0;
      option{
        text-align:center;
        background:#fff;
      }

    }
    select:hover{
      background-color: #5e97db;
    }
  }
    .listBox{
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      flex-grow:1;
      width:12rem; 
      .list{
        width:24.3%;
        border:1px solid #000;
        margin-top:.1rem;
      }
      .list:hover{
        width:24.3%;
        background-color: rgba(252, 252, 252, 0.2);
        opacity: 0.8;
        z-index:99;
      }
      .imgBox{
        width:2.92rem;
        height:2.18rem;
        img{
          width:100%;
          height:100%;
        }
      }
      .priseBox{
        width:2.7rem;
        margin:0 auto;
        margin-top:.16rem;
        margin-bottom:.1rem;
        overflow:hidden;
        .name{
        font-size:18px;
        font-family: AdobeHeitiStd-Regular;
        color: #2b2b2b;
        float:left;
      }
      .prise{
        font-family: AdobeHeitiStd-Regular;
        font-size:16px;
        color: #2b2b2b;
        float:right;
        .priseNum{
          color:red;
        }
      }
    }
    .yuanprise{
        margin-left:.1rem;
        font-size: 14px;
        font-family: AdobeHeitiStd-Regular;
        color: rgba(43, 43, 43, 0.5);
    }
    .last{
      width:2.7rem;
      margin:0 auto;
      margin-top:.1rem;
      margin-bottom:.1rem;
      .imgBox2{
        width: .16rem;
        height:.16rem;
        display:inline-block;
        img{
          width:100%;
          height:100%;
        }
      }
      .title{
        font-size:14px;
        color:#2b2b2b;
      }
      .btn{
        float:right;
        width: 1.04rem;
        height: .28rem;
        margin-top:-10px;
        outline:none;
        background-image: linear-gradient(265deg, 
          rgba(255, 190, 190, 0.91) 1%, 
          rgba(255, 0, 0, 0.91) 49%, 
          rgba(255, 190, 190, 0.91) 100%),
      linear-gradient(
            #ff0000, 
            #ff0000);
      background-blend-mode: normal, 
      normal;
      border-radius: 5px;
      color:#fff;
      }
    }
}
.page{
  width:4rem;
  height:.2rem;
  margin:.4rem auto;
}

</style>
