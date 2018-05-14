<template>
  <div class="register">
  	<Passcheck></Passcheck>
    <router-link to="/">
      <p class="btn"><<返回首页</p>
    </router-link>
    <div class="background">
      <img src="../assets/img/banner.png">
    </div>
    <div class="from">
      <div class="from-message">
        <h3>注册会员</h3>
        <div class="tep">
          <span class="chspan">中国 +86 
            <i class="iconfont jiantou">&#xe668;</i>
          </span>
          <!-- 手机号 -->
          <input class="tep-inp" type="tel" placeholder="请输入正确手机号" v-model="tepValue" @blur="sendtep">
      </div>
      <p class="error-tep">{{errortep}}</p>
      <!-- 引入组件Drag -->
      <Drag class="isdrag"></Drag>
      <!-- 隐藏效果 -->
<div class="isshow" v-show="isshow">
      <div class="code">
        <button type="button" class="code-btn" :disabled="disabled" @click="sendcode">{{btntxt}}</button>
        <!-- 验证码 -->
        <input class="code-inp" type="text" placeholder="请输入验证码" v-model="codeValue">
      </div>
      <p class="error-code">{{errorcode}}</p>
      <div class="password">
        <div class="zz">
          <!-- 密码 -->
          <input class="password-inp" :type="this.registration_data.pwdType" v-model="passwordValue" @blur="sendpassword">
          <span>
            <img src="../assets/img/密码可见.png" @click="changeType()"/>
          </span>
      </div>
      </div>
      <p class="error-password">
        {{errorpassword}}
      </p>
</div>
      <!-- 同意协议 -->
      <div class="Agreement">
        <div class="state">
          <img src="../assets/img/对号.png">
        </div>
          <span class="title">阅读并同意《口腔点评网》以下政策与协议：</span>
          <p class="book">《用户协议》、《隐私协议》</p>
      </div>
    </div>
    <!-- 立即注册按钮 -->
    <router-link to="/Personaldata">
    <div class="btnbox" @click="regbtn">
      立即注册
    </div>
  </router-link>
    <!-- 使用社交账号注册 -->
    <div class="Third-party-login">
      <span>使用社交账号注册</span>
      <i class="iconfont weixin">&#xe73b;</i>
      <i class="iconfont xinlang">&#xe606;</i>
      <i class="iconfont qq">&#xe6b4;</i>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Passcheck from '../components/Passcheck'
import Drag from '../components/Drag'
export default {
  name: 'Register',
  components:{
  	Passcheck,
    Drag
  },
  data:function () {
    return {
      registration_data:{
          pwdType:"password"
        },
        //注册数据
        tepValue:"",//手机号
        codeValue:"", //验证码
        passwordValue:"",//密码
        errortep:"",
        errorcode:"",
        errorpassword:"提示：密码应包含数字、大小写字母、两种或两种以上特殊字符、最少6位字符",
        disabled:false,
        btntxt:"发送验证码",
        time:0,
        isshow:true
    }
  },
  methods:{
    //密码显示影藏
    changeType(){
      this.registration_data.pwdType = this.registration_data.pwdType==='password'?'text':'password';
    },
    //验证手机号
    sendtep(){
    //判断手机号正则
    var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    if(this.tepValue==""){
      this.errortep ="手机号不能为空"
      }else if(!reg.test(this.tepValue)){
        this.errortep ="请输入正确手机号"
      }else {
        this.errortep =""
      }
    },
    //获取验证码
    sendcode(){
      this.time="60"
      this.disabled=true
      this.timer();
      axios.post(this.GLOBAL.url+"/api/sms_api/createSms",qs.stringify({mobile:this.tepValue}))
      .then((res)=>{
        console.log(res)
      })
    },
      //时间倒计时
      timer(){
        if (this.time > 0) {
            this.time--;
            this.btntxt=this.time+"s后重新获取";
            setTimeout(this.timer, 1000);
            } else{
              this.time=0;
              this.btntxt="获取验证码";
              this.disabled=false;
          }
      },
      //判断验证码

       //判断密码
      sendpassword(){
        var regpassword=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/;
        if(this.passwordValue==""){
        this.errorpassword ="密码不能为空"
        }else if(!regpassword.test(this.passwordValue)){
        this.errorpassword ="请输入正确密码"
        }else {
        this.errorpassword =""
        }
      },
      //点击注册
      regbtn(){
      axios.post(this.GLOBAL.url+"/api/register_api/register",qs.stringify({mobile:this.tepValue,postcode:this.codeValue,postpassword:this.passwordValue}))
        .then((res)=>{
          console.log(res.data.code)
          if(res.data.code=="200"){
              this.$router.push({path:'/'})
          }else{
            alert("注册失败")
          }
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    }
  }
</script>


<style scoped lang="scss">
	.background{
    position:relative;
    width:100%;
    height:100%;
    img{
      width:100%;
      height:100%;
      display:block;
    }
  }
  .btn{
    color:#fff;
    position:absolute;
    z-index:99;
    margin-left:2.05rem;
    font-size:0.2rem;
  }
  .from{
    width:4.05rem;
    height:5rem;
    background:#fff;
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-2.03rem;
    margin-top:-2.50rem;
    z-index:100;
    border-radius:5px;
    .from-message{
      width:3.4rem;
      margin:0 auto;
    }
    h3{
      text-align:center;
      font-family: MicrosoftYaHei;
      font-size: 20px;
      font-weight: normal;
    }
    .tep{
      width:3.40rem;
      height:0.48rem;
      margin:0 auto;
      border:1px solid #aaa;
      background:#f8f8f8;
      line-height:0.48rem;
      text-align:center;
      border-radius:5px;
      input{
        border:none;
        outline:medium;
        background:#f8f8f8;
        margin-left:.1rem;
        text-align:center;
        font-size:16px;
      }
    }
    .error-tep,.error-code,.error-password{
      font-size:8px;
      color:red;
      text-align:right;
    }
    .code{
      width:3.40rem;
      height:0.47rem;
      margin:0 auto;
      .code-btn{
        background:#adadad;
        border:none;
        width:1.24rem;
        height:0.47rem;
        border-radius:5px;
        font-family: MicrosoftYaHei;
        letter-spacing: 2px;
        color:#fff; 
        cursor:pointer;
        user-select:none;
      }
      .code-inp{
        width:2rem;
        height:0.47rem;
        border:none;
        border:1px solid #aaa;
        outline:medium;
        background:#f8f8f8;
        margin-left:0.09rem;
        border-radius:5px;
        text-align:center;
        font-size:16px;
      }
    }
    .password{
      width:3.40rem;
      border:1px solid #aaa;
      background:#f8f8f8;
      border-radius:5px;
        .password-inp{
          width:3rem;
          height:0.47rem;
          border:none;
          outline:medium;
          background:#f8f8f8;
          text-align:center;
          font-size:16px;
        }
        img{
          cursor:pointer;
        }
      }
      .Agreement{
        width:3.4rem;
        height:0.33rem;
        font-size: 12px;
      .state{
        width:.15rem;
        height:.15rem;
        border:1px solid #000;
        border-radius:50%;
        vertical-align: middle;
        text-align:center;
        display:inline-block;
        img{
          width:100%;
          height:100%;
        }
      }
      .book{
          color:#7ebddb;
          padding-left:.23rem;
          margin-top:-0.01rem;
        }
      .title{
        padding-left:.10rem;
      }
    }
    .btnbox{
      width: 2.04rem;
      height: 0.47rem;
      background-color: #adadad;
      border-radius: 5px;
      color:#fff;
      font-size:0.2rem;
      margin:0 auto;
      text-align:center;
      line-height:0.47rem;
      margin-top:0.18rem;
      cursor:pointer;
      user-select:none;
    }
    .Third-party-login{
      text-align:center;
      font-size:14px;
      padding-top:0.25rem;
      span{
        letter-spacing: 1px;
      }
      i{
        padding-left:0.10rem;
        font-size:18px;
        color:#adadad;
      }
      .xinlang{
        font-size:20px;
      }
      .weixin:hover{
          color:#60e460;
      }
      .xinlang:hover{
        color:#e25d5d;
      }
      .qq:hover{
        color:#5fc2fb;
      }
    }
    .isdrag{
      padding-left:.2rem;
      padding-bottom:.1rem;
    }
  }
</style>
