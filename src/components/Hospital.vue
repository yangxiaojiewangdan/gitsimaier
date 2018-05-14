<template>
  <div class="hospital">
    <Header></Header>
   	<Nav></Nav>
    <Anchors></Anchors>
   	<Banner></Banner>
    <Menu></Menu>
    <hr>
    <div class="servList">
    <!-- 下拉菜单 -->
      <select>
          <option v-for="option in options1" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>

      <select>
          <option v-for="option in options2" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>
      <select >
          <option v-for="option in options3" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>
    </div>
    <!-- 医院列表1 -->
    <div class="hospitalList">
      <router-link to="/HospitalDetails">
      <div class="imgBox">
        <img src="../assets/img/22.png" alt="">
      </div>
   
      <div class="messageBox">
        <h3>医院名称：斯迈尔齿科(华贸店)</h3>
        <span class="comment"><i class="iconfont write">&#xe605;</i>写点评</span>
        <p class="goods">擅长项目：美学修复、牙齿正畸、牙齿美白、种植牙、儿童口腔</p>
        <span class="score">星级指数：
          <el-rate
            v-model="value1"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </span>
        <p>人均价格：<span>￥2000</span></p>
        <p class="Group">团购优惠：</p>
            <ul class="GroupUL">
              <li>原价1599元，单人洁牙套餐，现价仅999</li>
              <li>原价1599元，单人洁牙套餐，现价仅999</li>
              <li>原价1599元，单人洁牙套餐，现价仅999</li>
            </ul>
        <p class="guanzhu"><i class="iconfont guaniconf" @click="follow()">&#xe604;</i>关注</p>
      </div>
      </router-link>
    </div>
        <!-- 医院列表2 -->
    <div class="hospitalList">
      <router-link to="/HospitalDetails">
      <div class="imgBox">
        <img src="../assets/img/22.png" alt="">
      </div>
   
      <div class="messageBox">
        <h3>医院名称：斯迈尔齿科(华贸店)</h3>
        <span class="comment"><i class="iconfont write">&#xe605;</i>写点评</span>
        <p class="goods">擅长项目：美学修复、牙齿正畸、牙齿美白、种植牙、儿童口腔</p>
        <span class="score">星级指数：
          <el-rate
            v-model="value1"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </span>
        <p>人均价格：<span>￥2000</span></p>
        <p class="Group">团购优惠：</p>
            <ul class="GroupUL">
              <li>原价1599元，单人洁牙套餐，现价仅999</li>
              <li>原价1599元，单人洁牙套餐，现价仅999</li>
              <li>原价1599元，单人洁牙套餐，现价仅999</li>
            </ul>
        <p class="guanzhu"><i class="iconfont guaniconf" @click="follow()">&#xe604;</i>关注</p>
      </div>
      </router-link>
    </div>
   	<Footerr></Footerr>
  </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import Footerr from '../components/Footerr'
import Anchors from '../components/Anchors'
export default {
  name: 'Hospital',
   components:{
  	Header,
  	Nav,
    Anchors,
  	Banner,
    Menu,
  	Footerr
  },
  data () {
    return {
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
    value1:5,
      
    }
  },
  methods:{
    follow(){
      this.false = !this.flag
    }
  }
}
</script>

<style scoped lang="scss">
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
  .hospitalList{
    a{
      color:#000;
    }
    width:12rem;
    height:3.25rem;
    background:#eee;
    margin:.2rem auto;
    border:1px solid #000;
    .imgBox{
      width:6rem;
      height:3.24rem;
     float:left;
     img{
      width:100%;
      height:100%;
     }
    }
    .messageBox{
      width:5.7rem;
      height:3.24rem;
      float:right;
      position:relative;
      .el-rate{
        display:inline-block;
      }
      h3{
         margin:0;
         margin-top:10px;
         margin-bottom:10px;
        display:inline-block;
      }
      .comment{
        display:inline-block;
        color:#65b2d6;
        float:right;
        padding-top:14px;
        padding-right:10px;
        cursor:pointer;
        .write{
          color:#65b2d6;
        }
      }
      .goods{
        font-size: 14px;
        color: rgba(43, 43, 43, 0.5);
        margin:0;
        padding-bottom:14px;
      }
      .Group{
        
      }
      .GroupUL{
        position:absolute;
        top:1.35rem;
        left:.8rem;
        li:hover{
          color:#48b8f0;
          cursor: pointer;
        }
      }
      .guanzhu{
        cursor:pointer;
        float:right;
        padding-top:.9rem;
        padding-right:.1rem;
      }
      .guaniconf{
        color:#ffea00;
      }
    }
  }
</style>
