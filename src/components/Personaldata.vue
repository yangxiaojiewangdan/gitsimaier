<template>
  <div class="personaldata">
  	<Header></Header>
    <div class="content">
      	<el-container>
      	<el-aside width="2.6rem">
          <!-- 头像 -->
          <div class="headportrait">
            <router-link to="/">
              <p class="bank">返回</p>
            </router-link>
          </div>
            <div class="div1">个人资料</div>
            <div class="div2">账号信息</div>
            <div class="div3">隐私设置</div>
            <div class="div4">消息提醒</div>
            <div class="div5">订阅设置</div>
           <div class="div6">绑定与同步</div>
        </el-aside>
      	<el-container>
          <el-header>
           
          </el-header>
          <el-main></el-main>
      </el-container>
    </el-container>
</div>
  	<Footerr></Footerr>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footerr from '../components/Footerr'
export default {
  name: 'Personaldata',
  components:{
  	Header,
  	Footerr
  },
  data () {
    return {
      activeName: 'second'
    }
  },
  methods:{
    handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>


<style scoped lang="scss">
.personaldata{
  background:#eeeeee;
  .content{
    width:12rem;
    height:8rem;
    background:#fff;
    margin:.2rem auto;
    .el-container{
      margin: 0 auto;
    .el-aside{
      width:2.6rem;
      height:8rem;
      margin-right:.1rem;
      .headportrait{
        width:2.6rem;
        height:2.3rem;
        background:#ddd;
        margin-top:-.13rem;
        .bank{
          color:#5e97db;
          font-size:12px;
          padding-left:.1rem;
          padding-top:.1rem;
          font-weight:600;
        }
     }
      .div1,.div2,.div3,.div4,.div5,.div6{
        width:2.22rem;
        height:.5rem;
        background:#5e97db;
        margin:0 auto;
        border-radius:5px;
        text-align:center;
        line-height:.5rem;
        margin-top:.3rem;
        color:#fff;
        cursor:pointer;
      }
    }
    .el-container{
      width:9.3rem;
      height:8rem;
      .el-header{
        height:.9rem;
      }
    }
  }
}
}
</style>

