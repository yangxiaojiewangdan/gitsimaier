<template>
  <div class="Cart">
   <Header></Header>
   <div class="content">
   		<h5>
    		<span class="spn1">1、提交订单</span><span class="spn2">2、确认支付</span><span class="spn3">3、购买完成</span>
    	</h5>
    	  	<div class="content"> 
  		<router-link to="/">
      		<p class="back"><<返回</p>
      	</router-link>
      <h4>订单列表</h4>
      <div class="orderList">
      	<table>
      		<tr>
      			<td class="checkbox"></td>
      			<td class="name">商品名称</td>
      			<td class="prise">单价</td>
      			<td class="number">数量</td>
      			<td class="Total">合计</td>
      			<td class="delete">操作</td>
      		</tr>

      		<!-- 数据表格 -->
			<tr class="tr2">
				<td>
					
				</td>
				<td class="imageNameBox">
					<img src="../assets/img/cart.png" class="imageName">
				</td>
				<td>￥<span class="priseNumber">{{priseNumber}}</span> </td>
				<td>
					<el-input-number v-model="num1" @change="handleChange" :min="1" :max="100" size="mini"></el-input-number>
				</td>
				<td>￥<span class="Totalnum">{{Totalnum}}</span></td>
				<td><span @click="deleteId()">删除</span></td>
			</tr>
      	</table>
      </div>
      	<div class="goToPlayNum">
      		<span class="spnZPrise">总价:￥{{Totalnum}}</span>
      	</div>
      	<div class="goToPlay">
      		<h3>需支付：￥{{Totalnum}}元</h3>
      		<div class="goToPlay1">
      			<router-link to="/Buypayment">
      				<button class="btn">去结算</button>
      			</router-link>
      		</div>
      	</div>
    </div>
   </div>
   <Footerr></Footerr>
  </div>
</template>

<script>
import axios from "axios"
import qs from "qs"
import Header from "../components/Header"
import Footerr from "../components/Footerr"
export default {
  name: 'Cart',
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
.Cart{
	background:#EEE;
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
		h4{
			margin-top:.5rem;
		}
		.spn1{
			color:#5fc2fb;
		}
					.back{
				font-size:14px;
				color: #333333;
			}
			.orderList{
				width:12rem;
				height:2.3rem;
				background:#fff;
				table{
					margin:0 auto;
					border-collapse:collapse;
					table-layout: fixed;
					.inpCheck{
						width:20px;
						height:20px;
					}
					.tr2{
						border:none;
						.priseNumber,.Totalnum{
							border:none;
							width:50px;
							text-align:center;
							outline:none;
						}
						span{
							cursor:pointer;
						}

					}
					tr{
						height:.83rem;
						border-bottom:1px solid #000;
						td{
							text-align:center;
							line-height:1rem;
						}
						.checkbox{
							width:1rem;
							text-align:center;
							background:red;
						}
						.name{
							width:2.80rem;
							text-align:center;
						}
						.prise{
							width:1.80rem;
							text-align:center;
						}
						.number{
							width:1.70rem;
							text-align:center;
						}
						.Total{
							width:1.70rem;
							text-align:center;
						.Discount{
							width:4rem;
							text:text-center;
						}
						}
						.delete{
							width:1.60rem;
							text-align:center;
						}
					}
				}
			}
			.goToPlayNum{
					height:.8rem;
					background:#fff;
					margin-top:.2rem;
					line-height:.8rem;
					font-size:18px;
					padding-left:.2rem;
					.spnCoupon{
						color: rgba(43, 43, 43, 0.5);
						.block{
							display:inline-block;
							width:14px;
							height:14px;
							border:1px solid #000;
							margin-left:5.76rem;
							margin-right:5px;
						}
					}
					select{
						width:273px;
						height: 30px;
						opacity: 0.6;
					}
				}
				.goToPlay{
					margin-bottom:.2rem;
					h3{
						text-align:right;
					}
					.goToPlay1{
						.btn{
						width: 2rem;
						height: .67rem;
						background-color: #f43751;
						border-radius: 5px;
						font-size:16px;
						color:#fff;
						outline:none;
					}

					}
			}
		}
}


</style>
