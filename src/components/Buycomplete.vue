<template>
  <div class="complete">
    <Header></Header>
    <div class="content">
    	<h5>
    		<span class="spn1">1、提交订单</span><span class="spn2">2、确认支付</span><span class="spn3">3、购买完成</span>
    	</h5>
    	<div class="completeMessage">
    		<p>您已成功付款358.00元！</p>
    		<div class="Group ">
    			查看已购买团购
    		</div>
    	</div>
    </div>
    <Footerr></Footerr>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footerr from '../components/Footerr'
export default {
  name: 'Buycomplete',
  components:{
  	Header,
  	Footerr
  },
  data () {
    return {
      
    }
  }
}
</script>


<style scoped lang="scss">
	.complete{
		background:#eee;
		.content{
		width:12rem;
		margin:0 auto;
		margin-bottom:.2rem;
		.spn1,.spn2,.spn3{
			padding:0 30px;
			font-size:18px;
			font-weight: normal;
		}
		h5{
			text-align:center;
		}
		.spn3{
			color:#5fc2fb;
		}
		.completeMessage{
			width: 12rem;
			height: 2.98rem;
			background-color: #ffffff;
			border-radius: 5px;
			margin-top:.7rem;
			.Group{
				width: 150px;
				height: 30px;
				background-color:#5fc2fb;
				border-radius: 5px;
				color:#fff;
				text-align:center;
				line-height:30px;
				margin-left:60px;
			}
			p{
				padding:20px 60px;
				font-size: 22px;
			}
		}
	}
}
</style>
