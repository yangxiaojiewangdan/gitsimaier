<template>
  <div class="passcheck">
  	<div class="header">
  		<div class="line">|</div>
  		<div class="title">通行证</div>
  		<div class="tep">客服电话：400-200-9757</div>
  	</div>
  	
  </div>
</template>

<script>
export default {
  name: 'Passcheck',
  data:function () {
    return {
      
    }
  }
}
</script>


<style scoped>
	.header{
		width: 100%;
		height:.6rem;
		background: #2b2b2b url(../assets/img/log.png) no-repeat .5rem center;
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
</style>
