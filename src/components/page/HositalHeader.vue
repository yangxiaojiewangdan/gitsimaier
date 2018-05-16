<template>
  <div class="passcheck">
  	<div class="header">
  		<div class="line"></div>
			
  		<div class="tep"><ul>
				<li>商户服务</li>
				<li>帮助中心</li>
			</ul></div>
			<div class="title">{{tit}}</div>
  	</div>
  	
  </div>
</template>

<script>
export default {
	name: 'Passcheck',
	
  data:function () {
    return {
      
    }
	},
	props:["tit"]
}
</script>


<style scoped>
	.header{
		width: 100%;
		height:.6rem;
		background: #2b2b2b url(../../assets/img/log.png) no-repeat .5rem center;
	}
	.line{
		width:2px;
		height:.3rem;
		color:#fff;
		font-size: 22px;
		display: inline;
		line-height: .6rem;
		margin-left: 2.3rem;

	}
	.title{
		display: inline;
		font-size: 22px;
		float:right;
		font-family: AdobeHeitiStd-Reg;
		font-weight: normal;
		color: #fff;
		line-height: .6rem;
		padding-left:.2rem;
	}
	.tep{
		display: inline;
		font-size: 14px;
		font-family: MicrosoftYaHeiLig;
		color:#fff;
		float:right;
		line-height: .6rem;
		padding-right: .6rem;
	}
	.tep ul{
		margin:0;
	}
	.tep ul li{
		list-style:none;
		font-size:.14rem;
		float:left;
	}
	.tep ul  li:nth-child(1){
		margin:0 .52rem 0 0;
	}
</style>
