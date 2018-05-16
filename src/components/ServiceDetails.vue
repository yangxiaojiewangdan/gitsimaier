<template>
  <div class="ServiceDetails">
    <Header></Header>
   	<Nav></Nav>
   	<Anchors></Anchors>
   	<div class="content">
   		<div class="details">
   			<!-- 小轮播 -->
   		  <el-carousel class="banner" height="448px">
      		<el-carousel-item v-for="item in bannerList" :key="item">
       			<img :src="item.url">
      		</el-carousel-item>
    	  </el-carousel>
    	  <!-- 产品详情	 -->
    	  <div class="message" v-for="item in messageList">
    	  		<h3 class="title">【{{item.hospital_name}}】{{item.name}}</h3>
    	  		<h5 class="titlePrise">{{item.title}}</h5>
    	  		<div class="priseBox">
    	  			<div class="priseName">
    	  				<p class="p1">￥{{item.pirce}}</p>
    	  				<p class="p2">已售：{{item.number}}份</p>
    	  			</div>
    	  		<!-- 评分 -->
    	  		<el-rate class="pingfen"
				  v-model="value5"
				  disabled
				  show-score
				  text-color="#ff9900"
				  score-template="{value}">
				</el-rate>
				<p class="group"><span class="groupnum">{{item.comments}}</span>条团购评价</p>
				<div class="refundBox" >
					<div class="ref1"> {{refundList.small_label1.name}} </div>
					<div class="ref2"> {{refundList.small_label2.name}}</div>
				</div>
    	  		</div>
    	  		<div class="time">有效期：至 {{item.start_time | formatDate}} </div>
    	  		<div class="num">数量：
    	  			<!-- 数量 -->
					 <el-input-number v-model="num1" @change="handleChange()" :min="1" :max="100"></el-input-number>
					 <!-- 数量 -->
					 <!-- <button>-</button><span>{{n}}</span><button @click ="jia()">+</button> -->
    	  		</div>
    	  		<router-link :to="{name:'Order', params:{fid: item.id}}"> 
    	  			<button class="btnBuy" @click="buyto()">立即购买</button>
    	  		</router-link>
    	  		<router-link to="/Cart">
    	  			<button class="btnCar">加入购物车</button>
    	  		</router-link>
    	  		<!-- 收藏分享 -->
    	  		<div class="fun">
    	  			<span class="Collection"><i class="iconfont iconfshou" >&#xe61c;</i>收藏</span>
    	  			<span class="share"><i class="iconfont iconffen" >&#xe659;</i>分享</span>
    	  		</div>
    	  </div>
   		</div>
<!-- 其他产品 -->
		<div class="other">
			<div class="cebian">
				<div class="cebianfont">该品牌其他产品</div>
			</div>
			<div class="imgBox">
				<i class="iconfont left" @click="left">&#xe601;</i>
				<div class="bannerBox">
					<ul id="otherui">
						<li id="otherli"><img src="../assets/img/cart.png"></li>
						<li><img src="../assets/img/cart.png"></li>
						<li><img src="../assets/img/cart.png"></li>
						<li><img src="../assets/img/cart.png"></li>
						<li><img src="../assets/img/cart.png"></li>
						<li><img src="../assets/img/cart.png"></li>
						<li><img src="../assets/img/cart.png"></li>
						<li><img src="../assets/img/cart.png"></li>
						<li><img src="../assets/img/cart.png"></li>
					</ul>
				</div>
				<i class="iconfont right" @click="right">&#xe61f;</i>
			</div>
		</div>
		<!-- 吸顶条 标签-->
		<div class="searchBar" :class="{isFixed:flag}">
			<div class="tag1">适用门店</div>
			<div class="tag2">产品详情</div>
			<div class="tag3">购买须知</div>
			<div class="tag4">会员评价</div>
		</div>
		<!-- 适用门店 -->
		<div class="store">
			<div class="title">
				<span class="shop1">门店信息</span>
				<span class="shop">查看全部分店</span>
			</div>
			<div class="map">地图部分</div>
			<div class="message2">
				<p class="messa-name">名称：<span class="spn-addres">斯迈尔齿科（华贸门诊部）</span><i class="iconfont xia">&#xe729;</i></p>
				<p class="messa-evaluate">评价等级：
					<el-rate
					  v-model="value2"
					  disabled
					  show-score
					  text-color="#ff9900"
					  score-template="{value}">
					</el-rate>
				</p>
				<p class="messa-addres">地址：华贸商业街Lo8a商铺（SKP购物中心东北门对面底商）</p>
				<p class="messa-tep">电话：40095623512</p>
				<p class="messa-time">营业时间：周一至周日  9：00 —— 20：00</p>
				<div class="iconf">
					<div class="div1">
						<i class="iconfont ka">&#xe6a7;</i>可以刷卡
					</div>
					<div class="div1">
						<i class="iconfont wang">&#xe66c;</i>无线上网
					</div>
					<div class="div1">
						<i class="iconfont che">&#xe6de;</i>免费停车
					</div>
					<div class="div1">
						<i class="iconfont yan">&#xe61e;</i>无烟区
					</div> 
				</div>
			</div>
		</div>
		<!-- 产品详情 -->
		<div class="detail">
			<h4>产品详情</h4>
    		<table v-for="item in tableData" width="100%">
    			<tr>
    				<td class="td1">名称</td>
					<td class="td2">数量</td>
					<td class="td3">价值</td>
  				</tr>
  				<tr>
  					<td class="td1">{{item.info_name}}</td>
					<td class="td2">{{item.info_number}}</td>
					<td class="td3">{{item.info_pirce}}</td>
  				</tr>
    		</table>
		</div>
		<!-- 购买须知 -->
		<div class="PurchaseNotice" v-for="item in PurchaseNoticeList">
			<h4>购买须知</h4>
			<ul>
				<li><span>有效日期：{{item.start_time | formatDate}}至{{item.end_time | formatDate}}</span></li>
				<li><span>除外日期：2018-4-5至2018-4-7</span></li>
				<li><span>预约信息：{{item.information}}</span></li>
				<li><span>适用人数：{{item.number}}</span></li>
				<li><span>规则提醒：{{item.remind}}</span></li>
				<li><span>商家服务：{{item.reminder}}</span></li>
				<li><span>温馨提示：{{item.server}}</span></li>
			</ul>
		</div>
		<!-- 产品介绍 -->
		<div class="detailsTitle">
			<h4>产品介绍</h4>
			<div class="productImgBox" v-for="item in detailsList">
				<img :src="item.url">
			</div>
		</div>
		<!-- 用户评价 -->
		<div class="evaluate">
			<h4>用户评价</h4>
			<img src="../assets/img/评价.png">
		</div>
   	</div>
   	<Footerr></Footerr>
  </div>
</template>

<script>
//设置一个步数
var now = 0;
import axios from 'axios';
import {formatDate} from '../assets/js/date.js';
import qs from 'qs';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footerr from '../components/Footerr'
import Anchors from '../components/Anchors'

export default {
  name: 'ServiceDetails',
  components:{
  	Header,
  	Nav,
  	Anchors,
  	Footerr,
  },
  data () {
    return {
      value5: 5.0,
      value2:5.0,
      num1: 1,
      flag: false,
	  css1: "searchBar",
	  css2: "isFixed",
   	  tableData:[],
      messageList:[],
      PurchaseNoticeList:[],
      refundList:[],
      bannerList:[],
      detailsList:[],
      openid:"",
      orderNum:"",

    }
  },	
  methods:{
  	 handleChange(value) {
        console.log(value)
    },
    //滚动监听事件
    handleScroll () {
  		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  		//console.log(scrollTop)
  		var offsetTop = document.querySelector('.searchBar').offsetTop
  		//console.log(offsetTop)
  		if (scrollTop > offsetTop) {
    		this.flag= true
  		} else{
   			 this.flag = false
  		}
	},
	//移除监听事件
	destroyed () {
  		window.removeEventListener('scroll', this.handleScroll)
	},
	
	//点击图标左右移动
	left(){

	},
	right(){
		var liWidth = document.getElementById("otherli").offsetWidth 
		var n = document.querySelectorAll("#otherui>li")
		console.log(n)
		var ulWidth = document.getElementById("otherui")
		//5.点击now++
		now==n.length?now=n.length:now++
		ulWidth.style.transform = translateX(""+ -liWidth * now +"px")
		console.log(now)
		
	},
	// jia(){
	// 	this.n++
	// },
	//点击立即购买
	buyto(){
		//存openid
		var openid = sessionStorage.getItem("openid");
		this.openid = openid;
		//传数据
		axios.post(this.GLOBAL.url+"/api/order_api/nowBuy",qs.stringify({
			openid:this.openid,	
			gid:this.$route.params.fid,
			number:this.num1,
			hid:3
		}))
		.then((res)=>{
				console.log(res)
				this.orderNum = res.data.data.order_number
				 console.log(this.orderNum)	
			})
		//传订单号
		this.$router.push({
			path:"/Order ",
			query:{
				OrderN:this.orderNum
			}
		})
	}
  },
  mounted(){
  	//吸顶监听滚动条事件
  	window.addEventListener('scroll', this.handleScroll)
  	//动态路由id
  	axios.post(this.GLOBAL.url+"/api/server_api/goodsinfo",qs.stringify({detailsPage:this.$route.params.fid}))
  	.then((res)=>{
  		console.log(res)
  		this.bannerList = res.data.data.showPic;
  		 this.PurchaseNoticeList = res.data.data.show;
  		 //console.log(this.PurchaseNoticeList)
  		 this.detailsList = res.data.data.detailsPic;
  		 this.tableData = res.data.data.info;
  		 this.messageList = res.data.data.select;
  		 this.value5 = res.data.data.select[0].score
  		 this.refundList = res.data.data.showLabel
  		 console.log(this.value5)

  	})

  },
  //时间戳格式化
  filters: {
        formatDate(time) {
            var date = new Date(time*1000);
            return formatDate(date, 'yyyy-MM-dd');
        }
    }	
}
</script>


<style scoped lang="scss">
	.content{
		width:12rem;
		margin:0 auto;
		.details{
			height:4.5rem;
			width:12rem;
			.banner{
				width:6rem;
				display:inline-block;
				height:4.48rem;
				background:red;
			}
			.message{
				display:inline-block;
				float:right;
				width:5.97rem;
				height:4.5rem;
				.title{
					font-size: 28px;
					color:#2b2b2b;
					font-weight: normal;
					margin:.05rem;
				}
				.titlePrise{
					font-size:16px;
					font-weight:normal;
					margin-left:.21rem;
					line-height:.01rem;
					span{
						color:red;
					}
				}
				.priseBox{
					width:5.79rem;
					height:.85rem;
					background:#ff666d;
					border-radius:5px;
					margin:0 auto;
					position:relative;
					.priseName{
						width:1.90rem;
						height:.74rem;
						border-right:1px solid #fff;
						position:absolute;
						top:.05rem;
						.p1{
							font-size: 28px;
							color:#fff;
							text-align:center;
							margin:0;
							line-height:.5rem;
						}
						.p2{
							font-size:10px;
							color: rgba(255, 255, 255, 1);
							//color:#000;
							text-align:center;
							line-height:.02rem;
							margin:0;
							letter-spacing: 1px;
						}

					}
					.pingfen{
						padding-left:2rem;
						line-height:.7rem;
					}
					.group{
						padding-left:2.12rem;
						font-size:12px;
						padding-top:.1rem;
						letter-spacing: 2px;
						.groupnum{
							color:#74edff;
						}
					}
					.refundBox{
						float:right;
						padding-right:.1rem;
						margin-top:-.5rem;
						.ref1,.ref2{
							width:.79rem;
							height:.19rem;
							background:#998df1;
							border-radius:5px;
							font-size:12px;
							color:#fff;
							text-align:center;
							line-height:.19rem;
							margin-top:.1rem;
						}
						.ref1{
							margin-top:-.02rem;
						}
					}
				}
				.time{
					font-size:12px;
					padding-left:.2rem;
					padding-top:.2rem;
					padding-bottom:.2rem;
				}
				.num{
					font-size:14px;
					padding-left:.2rem;
				}
				button{
					width: 2rem;
					height: .6rem;
					border-radius: 5px;
					font-size: 24px;
					color:#fff;
					margin-left:.2rem;
					margin-top:.3rem;
					border:none;
				}
				.btnBuy{
					background-color: #ff666d;
				}
				.btnCar{
					background-color: #f9ad81;
				}
				.fun{
					width:1.5rem;
					height:.2rem;
					margin-left:.2rem;
					margin-top:.3rem;
					.Collection{
						.iconfshou{
							color:red;
						}
					}
					.share{
						.iconffen{
							color:#ac33ea;
							padding-left:.2rem;	
						}
					}
					
				}

			}
		}
//其他产品
	.other{
		width:100%;
		height:1.24rem;
		margin-top:.1rem;
		margin-bottom:.1rem;
		.cebian{
			width:3%;
			height:1.24rem;
			background:#a0e1fa;
			color:#fff;
			border-radius:5px;
			float:left;
			.cebianfont{
				width:.15rem;
				margin-left:.09rem;
				font-size:14px;
				//line-height:.18rem;
			}
		}
		.imgBox{
			width:97%;
			float:right;
			.bannerBox{
				display:inline-block;
				ul{
					margin:0;
					padding:0;
					width:1030px;
					height:1.24rem;
					overflow:hidden;
					background:red;
					li{
						list-style:none;
						width:253.5px;
						height:1.24rem;
						display:inline-block;
						img{
							width:100%;
							height:100%;
						}
					}
				}
			}
			.left,.right{
				font-size:30px;
				line-height:1.24rem;
				cursor:pointer;
			}
			.left{
				float:left;

			}
			.right{
				float:right;
				padding-right:.2rem;
			}
		}
	}
	//正常
	.searchBar{
		width:12rem;
		height:.4rem;
		div{
			width:2rem;
			height:.4rem;
			background:#65b2d6;
			display:inline-block;
			font-size:16px;
			color:#FFF;
			border-radius:5px;
			text-align:center;
			line-height:.4rem;
			cursor:pointer;
		}
	}
	//固定点位
	.isFixed{
		width:12rem;
		height:.4rem;
    	position:fixed;
    	top:0;
    	z-index:999;
  	}
	.store{
		height:3.5rem;
		width:12rem;
		//margin-top:.1rem;
		.title{
			width:100%;
			height:.25rem;
			margin-top:.2rem;
			.shop1{
			font-size:16px;
			font-weight:600;
		}
		.shop{
			color:#b8e0fb;
			font-size:14px;
			padding-left:4.3rem;
			cursor:pointer;
		}
	}
		
		.map{
			width:6rem;
			height:3rem;
			background:#dedede;
			display:inline-block;
		}
		.message2{
			width:5.9rem;
			height:3rem;
			background:#eee;
			display:inline-block;
			float:right;
			p{
				font-size:16px;
				margin:.13rem;
			}
			.messa-name{
				.spn-addres{
					background:#e5e4e4;
					border-radius:5px;
				}
				.xia{
					cursor:pointer;
				}
			}
			.messa-evaluate{
				.el-rate{
					display:inline;
				}
			}
			.iconf{
				div{
					display:inline-block;
					width:1rem;
					font-size:16px;
					text-align:center;
				}
				.ka{
					color:#f09d30;
				}
				.wang{
					color:#5bb5e6;
				}
				.che{
					color:#66dd7a;
				}
				.yan{
					color:#eb6262;
				}
			}
		}
	}
	.detail{
		width:12rem;
		table{
			background-color: #eeeeee;
			border-collapse:collapse;
			table-layout: fixed;    
			tr{
			border:1px solid #fff;
			height:.35rem;
			}
			
			.td1{
				text-align:left;

			}
			.td2{
				text-align:center;
			}
			.td3{
				text-align:right;
			}
		}
	}
	.PurchaseNotice{
		width:12rem;
		background:#eee;
		margin-top:.2rem;
		h4{
			padding-top:.1rem;
		}
		li{
			padding-bottom:.2rem;
			color:red;
			span{
				color:#000;
			}
		}
	}
	.detailsTitle{
		width:12rem;
		background:#eee;
		.productImgBox{
			width:12rem;
		}
	}
	.evaluate{
		width:12rem;
	}

}
</style>
