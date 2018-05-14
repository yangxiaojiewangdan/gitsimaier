<template>
  <div class="buypayment">
  	<div class="mack">
  	<Header></Header>
  	<div class="content">
  		<h5><span class="spn1">1、提交订单</span><span class="spn2">2、确认支付</span><span class="spn3">3、购买完成</span></h5>
  		<p class="orderName">项目：斯迈尔齿科<span class="back">返回修改订单</span><span class="payment">应付款：￥358.00</span></p>
  		<div class="table">
  			<div class="tr1">
  				<span class="trspan">支付宝/财付通/微信</span>
  			</div>
  			<div class="tr2">
  				<input type="radio"  name="gender" value="微信支付" v-model="gender"><i class="iconfont wei">&#xe74a;</i>微信支付
  				<input type="radio"  name="gender" value="支付宝" v-model="gender"><i class="iconfont zfb">&#xe607;</i>支付宝
  				<input type="radio"  name="gender" value="银联" v-model="gender"><i class="iconfont">&#xe6cc;</i>银联
  			</div>
  		</div>
  		<h4 class="prise">支付：￥358.00</h4>
  		<button class="btn" @click="showFlag">去付款</button>
  		 <transition name="fade">
  			<div class="divBox" v-if="show">
  				<p class="title">正在支付<span class="clone" @click="clone()">X</span></p>
  				<div class="divImg">
  					<img src="../assets/img/椭圆4.png" class="imgBorder">
  					<img src="../assets/img/center.png"class="imgcenter">
  				</div>
  				<!-- 支付信息 -->
  				<ul class="rightMessage">
  					<li class="res">
  						<p>支付成功</p>
  						<router-link to="/BuyComplete">
  							<span class="spnres">立即查看订单状态 >></span>
  						</router-link>
  					</li>
  					<li class="error">
  						<p>支付失败</p>
  						<router-link to="/">
  							<span class="spnerror">常见支付问题 >></span>
  						</router-link>
  					</li>
  				</ul>
  			</div>
  		</transition>
  	</div>
	<Footerr></Footerr>
	</div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footerr from '../components/Footerr'
export default {
  name: 'Buypayment',
  components:{
  	Header,
  	Footerr
  },
  data () {
    return {
      gender:"微信支付",
      show:false
    }
  },
  methods:{
  	 showFlag(){
  	 	this.show = true
  	 },
  	 clone(){
  	 	this.show = false
  	 }
  }
}
</script>


<style scoped lang="scss">
.buypayment{
	background:#eee;
	.content{
		width:12rem;
		margin:0 auto;
		margin-bottom:.2rem;
		overflow:hidden;
		.spn1,.spn2,.spn3{
			padding:0 30px;
			font-size:18px;
			font-weight: normal;
		}
		h5{
			text-align:center;
		}
		.spn2{
			color:#5fc2fb;
		}
		.orderName{
			font-size: 18px;
			color:#000;
			.back{
				font-size: 16px;
				color: #5fc2fb;
				padding-left:30px;
			}
			.payment{
				float:right;
			}
		}
		.table{
			width:12rem;
			height:3rem;
			background:#fff;
			.tr1{
				width:11rem;
				margin:0 auto;
				height:1rem;
				border-bottom:1px solid #000;
				.trspan{
					display:inline-block;
					width: 1.6rem;
					height: 30px;
					background-color: #5fc2fb;
					border-radius: 5px;
					color:#fff;
					margin-top:.4rem;
					text-align:center;
					line-height:.3rem;
				}
			}
			.tr2{
				width:11rem;
				margin:0 auto;
				height:2rem;
				input{
					margin-top:.3rem;
					margin:.3rem;
					margin-right:.15rem;
					width:16px;
					height:16px;
				}
				i{
					font-size:20px;
					padding-right:.05rem;

					
				}
				.wei{
					color: #6ce86c;
				}
				.zfb{
					color:#65b2dc;
				}
			}
		}
		.prise{
			text-align:right;
			font-size: 24px;
		}
		.btn{
			width: 200px;
			height: 67px;
			background-color: #f43751;
			border-radius: 5px;
			color:#fff;
			text-align:center;
			font-size:20px;
			float:right;
			border:none;
			outline:none;
			cursor:pointer;
		}
		.divBox{
			width:4.38rem;
			height:2.28rem;
			background:#eee;
			position:absolute;
			top:50%;
			left:50%;
			margin-left:-2.2rem;
			margin-top:-1.6rem;
			border-radius:5px;
			.title{
				font-size:14px;
				margin:0 ;
				margin-top:.1rem;
				margin-left:.15rem;
				.clone{
					float:right;
					cursor:pointer;
					padding-right:20px;
				}
			}
			.divImg{
				float:left;
				width:1.51rem;
				height:1.51rem;
				margin-left:.4rem;
				margin-top:.2rem;
				position:relative;
				.imgcenter{
					position:absolute;
					top:6px;
					left:6px;
				}
			}
			ul{
				float:right;
				width:2rem;
				height:1.51rem;
				li{
					list-style:none;
					p{
						font-size: 14px;
						color: #3c3c3c;
					}
					.spnres,.spnerror{
						font-size: 12px;
						color: #69b9de;
						text-align:left;
						cursor:pointer;
					}
				}
			}
		}

	}
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
