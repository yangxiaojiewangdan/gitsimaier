<template>
  <div class="hospitalDetails">
  <Header></Header>
	<Nav></Nav>
	<div class="content">
		<Banner></Banner>
		<Anchors></Anchors>
		<h3>品牌介绍●斯迈尔齿科（华茂店）</h3>
		<div class="hospBox">
			<div class="jieshaoLeft">
				<p>时间角度考虑啥的理解是肯德基撒来得及啊了多久了撒几点上课啦决定离开啥的离开觉得拉萨机动力科
的撒旦撒旦变得简单介绍啊还得看啊好的啊的撒大苏打撒旦阿德撒的撒的撒的撒的撒打的撒阿德撒旦撒旦 的
的撒的撒的撒阿迪斯阿德撒旦是的撒的撒的撒的撒的撒大大撒的撒大的撒的撒大阿斯顿撒旦阿斯顿啊打的撒
的撒大撒旦撒旦仨的撒的撒的撒大仨的撒的撒阿德撒旦仨的撒的撒大撒旦撒旦仨的撒的撒的撒的撒的撒大神
的撒旦撒旦仨的撒大撒大声地撒旦仨的撒大苏打撒旦撒旦仨的撒的撒的撒大撒旦仨的撒的撒倒萨倒萨的撒的
的撒阿德撒旦阿斯顿撒旦撒的撒大苏打撒旦仨的撒的撒的撒大苏打撒旦撒旦仨打仨阿三的撒的撒 "</p>
			</div>
			<div class="jieshaoright">
				<p>认证医师：50位</p>
				<p>科室分类：儿童齿科、牙齿正畸、牙齿美白、美白修复、种植牙体</p>
				<p>&emsp;&emsp;地址：北京市朝阳区华贸商业街L801A</p>
				<p>联系电话：010-56562356</p>
				<p>营业时间：9：00-18：00*24H</p>
				<div class="followBox">
					<div class="follow">已关注</div>
					<div class="followNo">关注</div>
				</div>
			</div>
		</div>
		<div class="evaluate">
			<p>总体评价：	<el-rate
				  v-model="value1"
				  disabled
				  show-score
				  text-color="#ff9900"
				  score-template="">
				</el-rate>
			</p>
			<p class="huanjing">环境评价：
				<el-rate
				  v-model="value1"
				  disabled
				  show-score
				  text-color="#ff9900"
				  score-template="">
				</el-rate>
			</p>
			<p>效果评价：
				<el-rate
				  v-model="value1"
				  disabled
				  show-score
				  text-color="#ff9900"
				  score-template="">
				</el-rate>
			</p>
			<p class="tiyan">体验评价：
				<el-rate
				  v-model="value1"
				  disabled
				  show-score
				  text-color="#ff9900"
				  score-template="">
				</el-rate>
			</p>
			</div>
			<div class="Prompt">
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
			<div class="group">
				<h5>该店团购</h5>
				<i class="iconfont left">&#xe601;</i>
				<div class="box">
					图片位置
				</div>
				<i class="iconfont right">&#xe61f;</i>
			</div>
			<div class="doctor">
				<h5>认证医师</h5>
				<div class="iconLeft"><i class="iconfont">&#xe601;</i></div>
				<div class="iconCenter">
					<ul>
						<li>111</li>
						<li>222</li>
						<li>333</li>
					</ul>
				</div>
				<div class="iconRight"><i class="iconfont">&#xe61f;</i></div>
			</div>
			<h5>其他分店</h5>
			<p class="Other">思迈尔口腔（双井店）</p>

	</div>
	<Footerr></Footerr>
  </div>
</template>

<script>
import Header from '../components/Header'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Anchors from '../components/Anchors'
import Footerr from '../components/Footerr'
export default {
  name: 'HospitalDetails',
  components:{
  	Header,
  	Nav,
  	Banner,
  	Anchors,
  	Footerr
  },
  data () {
    return {
      value1:5,
    }
  },mounted(){
  	 console.log(this)
  }
}
</script>


<style scoped lang="scss">
.content{
	width:12rem;
	margin:0 auto;
	h3{
		font-size: 16px;
	}

	.hospBox{
		width:12rem;
		height:2rem;
		border-radius: 5px;
	.jieshaoLeft{
		width:6rem;
		height:2rem;
		float:left;
		background-color: rgba(51, 51, 51, 0.1);
		border-radius: 5px;
		font-size:14px;
		p{
			padding:14px;
			text-indent: 2em;
		}
	}
	.jieshaoright{
		width:5.9rem;
		height:2rem;
		float:right;
		position:relative;
		p{
			font-size:16px;
			margin:0;
			padding-top:10px;
			
		}
		.followBox{
			width:1.24rem;
			height:.9rem;
			text-align:center;
			line-height:.44rem;
			position:absolute;
			top:95px;
			right:30px;
			cursor:pointer;
			.follow{
				width:1.24rem;
				height:.44rem;
				background:#f9ca70;
				border-radius: 5px;
				margin-bottom:.1rem;
				color:#fff;
			}
			.followNo{
				width:1.22rem;
				height:.42rem;
				border:1px solid #f9ca70;
				border-radius: 5px;
			}
		}
	}

  }
  .evaluate{
			width:4.6rem;
			height:1.27rem;
			p{
				display:inline-block;
				.el-rate{
				display:inline-block;

				}
			}
			.huanjing,.tiyan{
				padding-left:30px;
			}
			
		}
		.Prompt{
			margin-top:.2rem;
			margin-bottom:.6rem;
			width:4.8rem;
			height: .22rem;
			.div1{
				float:left;
				margin-right:.4rem;

				.ka{
					color:#f09d30;
					font-size:20px;
				}
				.wang{
					color:#5fc2fb;
					font-size:20px;
				}
				.che{
					color:#66dd7a;
					font-size:20px;
				}
				.yan{
					color:#eb6262;
					font-size:20px;
				}
			}
		}
		.group{
			width:12rem;
			height:1.6rem;
			background:#eee;
			margin-bottom:.2rem;
			h5{
				margin:0;
				margin-bottom:.1rem;
			}
			i{
					font-size:24px;
					font-weight:600;
					display:inline-block;
					width:20px;
					height:20px;
					vertical-align:middle;
					line-height:1rem;
				}
			.box{
				width:11.35rem;
				height:1.24rem;
				display:inline-block;

				
			}
		}
		.doctor{
			width:12rem;
			height:1.47rem;
			background:red;
			margin-bottom:.6rem;
			h5{
				margin:0 
			}
			.iconLeft,.iconRight{
				width: 24px;
				height:69px;
				background:#5fc2fb;
				display:inline-block;
				i{
					display:inline-block;
					font-size:26px;
					font-weight:600;
					vertical-align:middle;
					line-height:69px;
					color:#FFF;
				}

			}
			.iconCenter{
				display:inline-block;
				width:11.425rem;
				ul{
					height:1.09rem;
					li{
						margin:0 auto;
						float:left;
						list-style:none;
						width:1.7rem;
						height:1.09rem;
						background:blue;
						margin:0 10px;
					}
				}
				

			}
		}
		.Other{
			color:#5fc2fb;
		}	

}
</style>
