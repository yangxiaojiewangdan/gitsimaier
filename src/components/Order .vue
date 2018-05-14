<template>
  <div class="order">
  	<Header></Header>
  	<div class="content">
		<h5><span class="spn1">1、提交订单</span><span class="spn2">2、确认支付</span><span class="spn3">3、购买完成</span></h5>
		<div class="orderMssage">
			<span class="spn4">确认订单信息</span>
			<router-link to="/ServiceDetails">
				<span class="spn5">返回重新下单</span>
			</router-link>
			<table>
				<tr>
					<td class="name">商品名称</td>
					<td class="orderNum">订单号</td>
					<td class="prise">单价</td>
					<td class="youhui">优惠券</td>
					<td class="number">数量</td>
				</tr>
				<tr class="tr2">
					<td class="imageNameBox">
						<div class="tdimgbox">
							<div class="zzDiv"></div>
							<img src="../assets/img/cart.png"class="imageName">
							<div class="titleD">
								<h5></h5>
								<p></p>
							</div>
						</div>
						
					</td>
					<td>
						<P>123456</p>
					</td>
					<td>
						<P>358</P>
					</td>
					<td>
						<select>
          				<option v-for="option in options1" :value="option.value">
            				{{ option.text }}
          				</option>
     				</select>
					</td>
					<td>
						<el-input-number v-model="num1" @change="handleChange" :min="1" :max="100" size="mini"></el-input-number>
					</td>
				</tr>
			</table>
			<!-- <div class="priseNum">
				<p class="zongjia">总价：￥{{zongjianum}}</p>
			</div> -->
			<div class="messagePriseNum">
				<p class="messageTep">绑定手机：13661050032<span class="spnTep">修改</span></p>
				<p class="zhifu" v-model="zhifunum">需支付：￥{{zhifunum}}</p>
			</div>
			<router-link to="/Buypayment">
				<div class="btnToBuy">
					提交订单
				</div>
		</router-link>
		</div>
  	</div>
	<Footerr></Footerr>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Header from '../components/Header'
import Footerr from '../components/Footerr'
export default {
	components:{
		Header,
		Footerr,
	},
  name: 'Order',
  data () {
    return {
      orderNumber:"",	 //
      zongjianum:"200",
      zhifunum:"200",
      num1:null,
      aaa:[],
      options1: [
      { text: '不使用'},
      { text: '满减券，满200减100'},
      { text: '满减券，满200减100'}
    ],
    openid:"",
    }
  },
  methods:{
   handleChange(value){
  	 	console.log(value)
  	 }
  },
  mounted(){
  	//取openid
  	var openid = sessionStorage.getItem("openid");
  	console.log(openid)
  	this.openid = openid
  	console.log(this.openid)
  	//接收订单号
  	console.log(this.$route.query.OrderN)
  	this.orderNumber = this.$route.query.OrderN
  	console.log(this.orderNumber)
  	//传数据
  	axios.post(this.GLOBAL.url+'/api/order_api/orderList',qs.stringify({
  		openid:this.openid,
  		orderNumber:this.orderNumber
  	}))
  	.then((res)=>{
  		//console.log(res)
  		//this.aaa = res.data.data
  		//this.num1 = res.data.data[0].count 
  		//console.log(this.num1)
  	})
  	
  }
}
</script>
<style scoped lang="scss">
.order{
	background:#eee;
	.content{
		width:12rem;
		margin:0 auto;
		margin-bottom:.2rem;
		overflow:hidden;
		span{
			padding:0 30px;
			font-size:18px;
			font-weight: normal;
		}
		h5{
			text-align:center;
		}
		.spn1{
			color:#65b2d6;
		}
		.orderMssage{
			.spn5{
				font-size:14px;
				color: #65b2d6;
				float:right;
			}
			table{
				width:12rem;
				margin:0 auto;
				border-collapse:collapse;
				table-layout: fixed;
				background:#fff;
				margin-top:.3rem;
				tr{
					height:.83rem;
					border-bottom:1px solid #000;
					.name{
						width:2rem;
						text-align:center;
					}
					.orderNum{
						width:2rem;
						text-align:center;
					}
					.prise{
						width:1.5rem;
						text-align:center;
					}
					.discount{
						text-align:center;

					}
					.number{
						width:2rem;
						text-align:center;
					}
					.youhui{
						width:2.5rem;
						text-align:center;
					}		
				}
				.tr2{
					height:2rem;
					text-align:center;
					border:none;
					td{
						select{
						height:26px;
						font-size:12px;
						width:200px;
					}
					}
					.tdimgbox{
						width:1.74rem;
						//height:.7rem;
						margin:0 auto;
						.zzDiv{
							width:100%;
							height:100%;
							background:red;
							opacity:.5;
							z-index:99999;
						}
						img{
							width:100%;
							//height:100%;
							position:relative;
						}
						.titleD{
							position:absolute;
							top:300px;
							h5{
								color:#fff;
								text-align:center;
							}
							p{
								font-size:10px;
								color:#fff;
								width:1.74rem;
							}
						}
					}
				}
		}
		.priseNum{
			width:100%;
			height:.8rem;
			background:#fff;
			margin-top:.2rem;
			line-height:.8rem;
			p{
				padding-left:.2rem;
			}
		}
		.messagePriseNum{
			width:100%;
			height:.8rem;
			.zhifu{
				display:inline-block;
				float:right;
				font-size: 23px;
				font-weight:600;
			}
			.messageTep{
				display:inline-block;
				.spnTep{
					font-size:16px;
					color: #65b2d6;
				}
			}
		}
		.btnToBuy{
			width:2rem;
			height:.67rem;
			float:right;
			background-color: #f43751;
			border-radius: 5px;
			color:#fff;
			text-align:center;
			line-height:.67rem;
			cursor:pointer;
		}
	}
}
}
</style>
