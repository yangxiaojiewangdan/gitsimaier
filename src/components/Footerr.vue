<template>
  <div class="footerr">
  	<div class="footerBox">
	  	<ul class="footerUl">
	  		<li>关于我们</li>
	  		<li>口腔点评网</li>
	  		<li>版权申明</li>
	  		<li>帮助中心</li>
	  		<li>加入我们</li>
	  	</ul>
	  	<ul class="footerUl">
	  		<li>联系我们</li>
	  		<li>电话联系</li>
	  		<li>邮件联系</li>
	  		<li>在线客服</li>
	  	</ul>
	  	<ul class="footerUl">
	  		<li>商户服务</li>
	  		<li>商户中心</li>
	  		<li>商户合作</li>
	  		<li>招募齿科代理</li>
	  		<li>招募爱牙代理</li>
	  	</ul>
	  	<ul class="footerUlLast">
	  		<li>客服电话：400-200-9757</li>
	  		<li>客服邮箱：12111111@qq.com</li>
	  	</ul>
	  	<div class="code">
	  			<img clas="imgwei" src="../assets/img/图层48.png">
	  			<img clas="imgxin" src="../assets/img/图层48.png">
	  		<div class="icongimg">
	  			<i class="iconfont weixiniconf">&#xe619;</i>
	  			<i class="iconfont xinlangiconf">&#xe600;</i>
	  		</div>
	  	</div>
	  	<div class="copyright">
	  		<span>Copyright © 北京斯麦尔齿科有限公司</span><span>京ICP备案号：11111111</span>
	  	</div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'footer',
  data() {
    return {
    	
    }
  }
  // mounted(){
  // 	 axios.get("http://192.168.1.111/api/ad_api/CodePic")
  //     .then((res)=>{
  //        //console.log(res.data.data.image);
  //       this.list = res.data.data;
  //       //console.log(this.list)
  //     })   
  // }
}
</script>


<style scoped lang="scss">
	.footerr{
		width:100%;
		height:3.31rem;
		background:#2b2b2b;
		.footerBox{
			position:relative;
			width:10.30rem;
			height:3.31rem;
			margin:0 auto;
			.footerUl{
				float:left;
				width:0.9rem;
				font-family: MicrosoftYaHeiLig;
				color: #ffffff;
				line-height:0.3rem;
				li{
					list-style:none;
					font-size:14px;
				}
			}
			.footerUlLast{
				width:2.49rem;
				float:left;
				line-height:0.3rem;
				li{
					list-style:none;
					font-family: MicrosoftYaHeiLig;
					color: #ffffff;
				}
			}
			.code{
				position:absolute;
				top:0.36rem;
				left:7.73rem;
				width:2.57rem;
				height:1.55rem;
				img{
					float:left;
					padding-left:0.2rem;
				}
				.weixiniconf{
					color:#6bff6b;
					font-size:24px;
					padding-left:0.63rem;
				}
				.xinlangiconf{
					color:#ff5959;
					font-size:24px;
					padding-left:1rem;
				}
				.icongimg{
					margin-top:1.2rem;
				}
			}
			.copyright{
				width:6.30rem;
				font-size:16px;
				color:#fff;
				padding-top:2.80rem;
				margin:0 auto;
			}
		}
	}
</style>
