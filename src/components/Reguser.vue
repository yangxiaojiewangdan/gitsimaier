<template>
  <div class="register">
  	<Passcheck></Passcheck>
    <router-link to="/">
      <p class="btn">返回首页</p>
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
      <div class="movebox" >
        <div class="movego"></div>
        <div class="txt" id="txt">{{text}}</div>
        <div class="move moveBefore" v-move></div>
 </div>
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
    <!-- <router-link to="/Personaldata"> -->
    <div class="btnbox" @click="Reguser">
      立即注册
    </div>
  <!-- </router-link> -->
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
import axios from "axios";
import qs from "qs";
import Passcheck from "../components/Passcheck";
import Drag from "../components/Drag";
import $ from "jquery";
const ctr = this
var a = 0
export default {
  name: "Register",
  components: {
    Passcheck,
    Drag
  },
  data: function() {
    return {
      registration_data: {
        pwdType: "password"
      },
      //注册数据
      tepValue: "", //手机号
      codeValue: "", //验证码
      passwordValue: "", //密码
      errortep: "",
      errorcode: "",
      errorpassword:
        "提示：密码应包含数字、大小写字母、两种或两种以上特殊字符、最少6位字符",
      disabled: false,
      btntxt: "发送验证码",
      time: 0,
      isshow: true,
      id: 0,
      succ: 0//用户是否成功验证
    };
  },
  directives: {
    move(el) {
     
      el.onmousedown = function(e) {
        var X = e.clientX - el.offsetLeft; //鼠标移动的距离
        document.onmousemove = function(e) {
          var endx = e.clientX - X; //鼠标放开的位置
          el.className = "move moveBefore";
          el.style.left = endx + "px"; //当前这个元素距离父级左边的距离
          // console.log(el.parentNode.children[0])
          var width = $(".movebox").width() - $(".move").width(); // 鼠标可以拖动的距离
          var widthrem = width / 100;
          el.parentNode.children[0].style.width = endx + "px"; // movebox下第一个元素的width
          el.parentNode.children[1].innerHTML = "拖动滑块验证";
          //临界值小于
          if (endx <= 0) {
            el.style.left = 0 + "px"; //拖动元素距离左边的距离
            el.parentNode.children[0].style.width = 0 + "px";
            //$('.movego').width(0)
          }
          //临界值大于
          // console.log(el.style.left)
          if (parseInt(el.style.left) >= width) {
            el.style.left = width + "px";
            el.parentNode.children[0].style.width = width + "px";
            el.parentNode.children[1].innerHTML = "验证通过";
            el.className = "move moveSuccess";
            el.onmousedown = null;
            ctr.succ = 1
           
          }
        };
      };
      document.onmouseup = function() {
        console.log("http://192.168.1.158/api/register_api/verification",
              `mobile=${ctr.tepValue}`)
        document.onmousemove = null;
         axios
            .post(
              "http://192.168.1.158/api/register_api/verification",`mobile=${ctr.tepValue}`
            )
            .then(res => {
              console.log(res);
              
            });
      };
    }
  },
  watch: {
    tepValue: function(val) {
      console.log(val)
     ctr.tepValue = val
    }
  },
  methods: {
    //密码显示影藏
    changeType() {
      this.registration_data.pwdType =
        this.registration_data.pwdType === "password" ? "text" : "password";
    },
    //验证手机号
    sendtep() {
      //判断手机号正则
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.tepValue == "") {
        this.errortep = "手机号不能为空";
      } else if (!reg.test(this.tepValue)) {
        this.errortep = "请输入正确手机号";
      } else {
        this.errortep = "";
      }
    },
    //获取验证码
    sendcode() {
      this.time = "60";
      this.disabled = true;
      this.timer();
      axios
        .post(
          this.GLOBAL.url + "/api/sms_api/createSms",
          qs.stringify({ mobile: this.tepValue })
        )
        .then(res => {
          console.log(res);
        });
    },
    //时间倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    //判断验证码

    //判断密码
    sendpassword() {
      var regpassword = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S+$/;
      if (this.passwordValue == "") {
        this.errorpassword = "密码不能为空";
      } else if (!regpassword.test(this.passwordValue)) {
        this.errorpassword = "请输入正确密码";
      } else {
        this.errorpassword = "";
      }
    },
    //点击注册
    regbtn() {
      axios
        .post(
          this.GLOBAL.url + "/api/register_api/register",
          qs.stringify({
            mobile: ctr.tepValue,
            postcode: this.codeValue,
            postpassword: this.passwordValue,
            user_style :ctr.id
          })
        )
        .then(res => {
          console.log(res.data.code);
          if (res.data.code == "200") {
            this.$router.push({ path: "/" });
          } else {
            alert("注册失败");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 注册验证
    Reguser: function() {
      axios
        .post(
          this.GLOBAL.url + "/api/register_api/register", qs.stringify({
            mobile: ctr.tepValue,
            postcode: this.codeValue,
            postpassword: this.passwordValue,
            user_style :ctr.id
          })
        )
        .then(res => {
          console.log(res);
          if(ctr.id == 1){
            this.$router.push({path:"/RegHospital"})
          }else if(ctr.id == 0 ){
            this.$router.push({path:"/Reguser"})
          }
          alert(res.data.info)
        });
    }
  },
  mounted() {
    ctr.id = sessionStorage.id
    console.log(ctr.id)
  }
};
</script>


<style scoped lang="scss">
.movebox {
  position: relative;
  background-color: #e8e8e8;
  width: 3.4rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  margin: 0 0 .15rem 0 ;
  .txt {
    position: absolute;
    top: 0rem;
    width: 3rem;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
  }
  .movego {
    background-color: #7ac23c;
    height: .5rem;
    width: 0rem;
  }
  .move {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid #ccc;
    cursor: move;
  }
  .moveBefore {
    background: #fff
      url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==")
      no-repeat center;
  }
  .moveSuccess {
    background: #fff
      url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==")
      no-repeat center;
  }
}
.background {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.btn {
  color: #fff;
  position: absolute;
  z-index: 99;
  margin-left: 2.05rem;
  font-size: 0.2rem;
}
.from {
  width: 4.05rem;
  height: 5rem;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -2.03rem;
  margin-top: -2.5rem;
  z-index: 100;
  border-radius: 5px;
  .from-message {
    width: 3.4rem;
    margin: 0 auto;
  }
  h3 {
    text-align: center;
    font-family: MicrosoftYaHei;
    font-size: 20px;
    font-weight: normal;
  }
  .tep {
    width: 3.4rem;
    height: 0.48rem;
    margin: 0 auto;
    border: 1px solid #aaa;
    background: #f8f8f8;
    line-height: 0.48rem;
    text-align: center;
    border-radius: 5px;
    input {
      border: none;
      outline: medium;
      background: #f8f8f8;
      margin-left: 0.1rem;
      text-align: center;
      font-size: 16px;
    }
  }
  .error-tep,
  .error-code,
  .error-password {
    font-size: 8px;
    color: red;
    text-align: right;
  }
  .code {
    width: 3.4rem;
    height: 0.47rem;
    margin: 0 auto;
    .code-btn {
      background: #adadad;
      border: none;
      width: 1.24rem;
      height: 0.47rem;
      border-radius: 5px;
      font-family: MicrosoftYaHei;
      letter-spacing: 2px;
      color: #fff;
      cursor: pointer;
      user-select: none;
    }
    .code-inp {
      width: 2rem;
      height: 0.47rem;
      border: none;
      border: 1px solid #aaa;
      outline: medium;
      background: #f8f8f8;
      border-radius: 5px;
      text-align: center;
      font-size: 16px;
    }
  }
  .password {
    width: 3.4rem;
    border: 1px solid #aaa;
    background: #f8f8f8;
    border-radius: 5px;
    .password-inp {
      width: 3rem;
      height: 0.47rem;
      border: none;
      outline: medium;
      background: #f8f8f8;
      text-align: center;
      font-size: 16px;
    }
    img {
      cursor: pointer;
    }
  }
  .Agreement {
    width: 3.4rem;
    height: 0.33rem;
    font-size: 12px;
    .state {
      width: 0.15rem;
      height: 0.15rem;
      border: 1px solid #000;
      border-radius: 50%;
      vertical-align: middle;
      text-align: center;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .book {
      color: #7ebddb;
      padding-left: 0.23rem;
      margin-top: -0.01rem;
    }
    .title {
      padding-left: 0.1rem;
    }
  }
  .btnbox {
    width: 2.04rem;
    height: 0.47rem;
    background-color: #adadad;
    border-radius: 5px;
    color: #fff;
    font-size: 0.2rem;
    margin: 0 auto;
    text-align: center;
    line-height: 0.47rem;
    margin-top: 0.18rem;
    cursor: pointer;
    user-select: none;
  }
  .Third-party-login {
    text-align: center;
    font-size: 14px;
    padding-top: 0.25rem;
    span {
      letter-spacing: 1px;
    }
    i {
      padding-left: 0.1rem;
      font-size: 18px;
      color: #adadad;
    }
    .xinlang {
      font-size: 20px;
    }
    .weixin:hover {
      color: #60e460;
    }
    .xinlang:hover {
      color: #e25d5d;
    }
    .qq:hover {
      color: #5fc2fb;
    }
  }
  .isdrag {
    padding-left: 0.2rem;
    padding-bottom: 0.1rem;
  }
}
</style>
