<template>
  <div class="login">
    <Passcheck></Passcheck>
    <div class="background">
    	<img src="../assets/img/banner.png">
    </div>
    <div class="loginFrom">
    	 <el-tabs v-model="activeName" @tab-click="handleClick" class="content">
		    <el-tab-pane label="密码登录" name="first">
		    	<input  class="tep-inp"type="text" v-model="DLtep" placeholder="请输入手机号" @blur="sendtep">
		    	<p class="error">{{teperror}}</p>
		    	<input  class="psssword-inp"type="text" v-model="DLpassword" placeholder="请输入密码">
		    	<p class="error">{{passworderror}}</p>
            <!-- 登录按钮 -->
		    		<div class="btn" @click="Login">登录</div>
		    	<div class="box">
			    	<div class="imgbox">
			    		<img src="../assets/img/对号.png">
			    	</div>
			    	<span class="spndl">下次自动登录</span>
            <router-link to="">
		    	     <span class="spnpw">忘记密码 | </span>
            </router-link>
			    	<router-link to="/Reguser">
			    		<span class="spnzc">立即注册</span>
			    	</router-link>
		    	</div>
		    	<div class="ThreeLogin">
		    		使用社交账号登录
		    		<p class="ThreeLoginiconf">
		    			<i class="iconfont weixin">&#xe73b;</i>
      					<i class="iconfont xinlang">&#xe606;</i>
      					<i class="iconfont qq">&#xe6b4;</i>
		    		</p>
		    	</div>
		    </el-tab-pane>
		    <!--短信登陆-->
		    <el-tab-pane label="短信登录" name="second">
		    	<input  class="tep-inp"type="text" v-model="DLtep" placeholder="请输入手机号">
		    	<p class="error">{{teperror2}}</p>
		    	<div class="code">
		    		<button type="button" class="code-btn" :disabled="disabled" @click="sendcode">{{btntxt}}</button>
		    		<input class="code-inp" type="text" placeholder="请输入验证码" v-model="codeValue">
		    		<p class="error">{{codeValue}}</p>
		    	</div>
		    		<div class="btn">登录</div>
		    	<div class="box">
			    	<div class="imgbox">
			    		<img src="../assets/img/对号.png">
			    	</div>
			    	<span class="spndl">下次自动登录</span>
			    	<span class="spnpw">忘记密码 | </span>
			    	<router-link to="/Reguser">
			    		<span class="spnzc">立即注册</span>
			    	</router-link>
		    	</div>
		    	<div class="ThreeLogin">
		    		使用社交账号登录
		    		<p class="ThreeLoginiconf">
		    			<i class="iconfont weixin">&#xe73b;</i>
      					<i class="iconfont xinlang">&#xe606;</i>
      					<i class="iconfont qq">&#xe6b4;</i>
		    		</p>
		    	</div>
		    </el-tab-pane>
		  </el-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Passcheck from '../components/Passcheck'                                                                  
export default {
  name: 'Login',
  components:{
  	Passcheck
  },
  data :function() {
    return {
    	activeName: 'first',
      //密码登录的手机号
    	DLtep:"",
      //密码登录的密码
    	DLpassword:"",
      //错误手机号
    	teperror:"",
      //错误密码
      	passworderror:"",
      	//验证码
      	disabled:false,
        btntxt:"发送验证码",
        time:0,
        codeValue:"",
        teperror2:"",
        openid:""
    }
  },
  methods: {
      handleClick(tab, event) {
        
      },
       sendcode(){
      this.time="60"
      this.disabled=true
      this.timer();
      // axios.post(this.GLOBAL.url+"/api/sms_api/createSms",qs.stringify({mobile:this.tepValue}))
      // .then((res)=>{
      //   console.log(res)
      // })
    },
    //验证手机号
    sendtep(){
    //判断手机号正则
    var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    if(this.DLtep==""){
      this.teperror ="手机号不能为空"
      }else if(!reg.test(this.DLtep)){
        this.teperror ="请输入正确手机号"
      }else {
        this.teperror =""
      }
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
      //点击登录
      Login(){
          axios.post(this.GLOBAL.url+"/api/register_api/login",qs.stringify({mobile:this.DLtep,postpassword:this.DLpassword}))
        .then((res)=>{
          console.log(res)
          this.openid = res.data.data
          //this.sessionStorage.setItem(res.data.data);
          console.log(this.openid)
          if(res.data.code=="200"){
              this.$router.push({path:'/'})
              alert("登录成功")
              sessionStorage.setItem("openid",res.data.data);
          }else{
            alert("登录错误请检查手机号或密码")
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
  .loginFrom{
  	width:4.05rem;
  	height:5rem;
  	background:#ffffff;
  	position:absolute;
    top:50%;
    left:50%;
    margin-left:-2.02rem;
    margin-top:-2.50rem;
    z-index:100;
    border-radius:5px;
    .content{
		width:3.45rem;
		height:4.50rem;
		margin:.2rem auto;
    }
    .tep-inp,.psssword-inp,{
		width: 3.40rem;
		height: .48rem;
		background-color: rgba(238, 238, 238, 0.4);
		border-radius: 5px;
		border: solid 1px rgba(238, 38, 48, 0.4);
		opacity: 0.4;
		font-size:16px;
    }
    input::-webkit-input-placeholder { 
		padding-left:.20rem;
	} 
    .error{
    font-family: MicrosoftYaHei;
	font-size: 12px;
	font-weight: normal;
	color:red;
	margin-top:.1rem;
    }
    .btn{
  width: 2.04rem;
	height: .47rem;
	background-color: #5fc2fb;
	border-radius: 5px;
	color:#fff;
	text-align:center;
	line-height:.47rem;
	margin:0 auto;
	margin-top:.5rem;
	cursor:pointer;
    }
    .box{
    	width:100%;
    	height:.18rem;
    	font-size:12px;
    	color:#fff;
    	margin-top:.40rem;
    	.imgbox{
    	width:.14rem;
    	height:.14rem;
    	border:1px solid #000;
    	vertical-align: middle;
    	border-radius:50%;
    	display:inline-block;
    	cursor:pointer;
    	}
		.spndl{
			padding-left:.10rem;
			color:#000;
		}
		.spnpw{
			padding-left:1.30rem;
			color: #5fc2fb;
			cursor:pointer;
		}
		.spnzc{
			color: #5fc2fb;
			cursor:pointer;
		}
    }
    .ThreeLogin{
    	width:100%;
    	text-align:center;
    	margin-top:.3rem;
    	font-family: MicrosoftYaHei;
		font-size: 14px;
		.ThreeLoginiconf{
			.weixin:hover{
				color:#60e460;
				cursor:pointer;
			}
			.xinlang:hover{
        		color:#e25d5d;
        		cursor:pointer;
      		}
      		.qq:hover{
        		color:#5fc2fb;
        		cursor:pointer;
      		}
			i{
				font-size:26px;
			}
		}
  	}
  	.code{
      width:3.4rem;
      height:0.47rem;
      //margin-top:20px;
      .code-btn{
        background:#adadad;
        border:none;
        width:1.24rem;
        height:.47rem;
        border-radius:5px;
        font-family: MicrosoftYaHei;
        letter-spacing: 2px;
        color:#fff; 
        cursor:pointer;
        user-select:none;
      }
      .code-inp{
        width:2rem;
        height:.47rem;
        border:none;
        border:1px solid #aaa;
        outline:medium;
        background:#f8f8f8;
        margin-left:0.09px;
        border-radius:5px;
        text-align:center;
        font-size:16px;
      }
    }
 }   
</style>
