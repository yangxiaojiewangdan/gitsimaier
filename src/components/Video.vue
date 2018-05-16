<template>
  <div class="video">
    <Header></Header>
    <Nav></Nav>
    <Banner></Banner>
    <Menu></Menu>
    <hr>
    <div class="content">
    	<div class="inpBox">
    		<input type="text" placeholder="请输入关键词">
    		<i class="iconfont sousuo">&#xe69d;</i>
    	</div>
<router-link to="/VideoDetails">
    	<div class="videoList">
    		<div class="imgBox">
    			<img src="../assets/img/图层59.png" alt="">
    		</div>
    		<div class="titleTop">
    			<span class="name">金属托槽矫正</span>
    			<span class="doctor">主治医师：杨雷</span>
    		</div>
    		<div class="titleBottom">
    			<i class="iconfont img">&#xe609;</i>
    			<span class="hosp">斯迈尔齿科</span>
    			<span class="playNum">2356播放量 </span>
    			<span class="comment">2356评论</span>
    		</div>
    	</div>
</router-link>
    	<div class="videoList">
    		<div class="imgBox">
    			<img src="../assets/img/图层59.png" alt="">
    		</div>
    		<div class="titleTop">
    			<span class="name">金属托槽矫正</span>
    			<span class="doctor">主治医师：杨雷</span>
    		</div>
    		<div class="titleBottom">
    			<i class="iconfont img">&#xe609;</i>
    			<span class="hosp">斯迈尔齿科</span>
    			<span class="playNum">2356播放量 </span>
    			<span class="comment">2356评论</span>
    		</div>
    	</div>

    	<div class="videoList">
    		<div class="imgBox">
    			<img src="../assets/img/图层59.png" alt="">
    		</div>
    		<div class="titleTop">
    			<span class="name">金属托槽矫正</span>
    			<span class="doctor">主治医师：杨雷</span>
    		</div>
    		<div class="titleBottom">
    			<i class="iconfont img">&#xe609;</i>
    			<span class="hosp">斯迈尔齿科</span>
    			<span class="playNum">2356播放量 </span>
    			<span class="comment">2356评论</span>
    		</div>
    	</div>

    	<div class="videoList">
    		<div class="imgBox">
    			<img src="../assets/img/图层59.png" alt="">
    		</div>
    		<div class="titleTop">
    			<span class="name">金属托槽矫正</span>
    			<span class="doctor">主治医师：杨雷</span>
    		</div>
    		<div class="titleBottom">
    			<i class="iconfont img">&#xe609;</i>
    			<span class="hosp">斯迈尔齿科</span>
    			<span class="playNum">2356播放量 </span>
    			<span class="comment">2356评论</span>
    		</div>
    	</div>

    	<div class="videoList">
    		<div class="imgBox">
    			<img src="../assets/img/图层59.png" alt="">
    		</div>
    		<div class="titleTop">
    			<span class="name">金属托槽矫正</span>
    			<span class="doctor">主治医师：杨雷</span>
    		</div>
    		<div class="titleBottom">
    			<i class="iconfont img">&#xe609;</i>
    			<span class="hosp">斯迈尔齿科</span>
    			<span class="playNum">2356播放量 </span>
    			<span class="comment">2356评论</span>
    		</div>
    	</div>

    </div>
    <div class="page">
		<el-pagination
		  background
		  layout="prev, pager, next"
		  :total="100">
		</el-pagination>
	</div>
    <Footerr></Footerr>
  </div>
</template>

<script>
import Header from "../components/Header"
import Nav from "../components/Nav"
import Footerr from "../components/Footerr"
import Banner from "../components/Banner"
import Menu from "../components/Menu"
export default {
  name: 'Video',
  components:{
  	Header,
  	Nav,
  	Banner,
  	Footerr,
  	Menu
  },
  data () {
    return {
      
    }
  }
}
</script>


<style scoped lang="scss">
	.video{
		a{
			color:#000;
		}
		background:#eee;
		.content{
			width:12rem;
			margin: 0 auto;
			.inpBox{
				width: 2.5rem;
				height: 30px;
				border-radius: 5px;
				border: solid 1px #acacac;
				margin-bottom:8px;
				margin-left:9rem;
				input{
					width:2rem;
					height:27px;
					margin-left:5px;
					border:none;
					outline:none;
					background:#eee;

				}
				.sousuo{
					font-size:20px;
					vertical-align: middle;
					cursor:pointer;
				}
			}
			.videoList{
				width:2.92rem;
				height:2.34rem;
				border:1px solid #000;
				cursor:pointer;
				display:inline-block;
				margin-top:7px;
				.imgBox{
					width: 292px;
					height: 165px;
					img{
						width:100%;
						height:100%;
					}
				}
				.titleTop{
					height:30px;
					.name{
						font-size:14px;
						padding-left:5px;
					}
					.doctor{
						font-size:12px;
						float:right;
						padding-right:10px;
						padding-top:5px;
					}

				}
				.titleBottom{
					height:40px;
					line-height:40px;
					.img{
						color:#5fc2fb;
						padding-left:5px;

					}
					.hosp{
						font-size:14px;

					}
					.playNum{
						font-size:12px;
						padding-left:52px;

					}
					.comment{
						font-size:12px;
						padding-left:10px;

					}
				}

			}	 	
		}
		.page{
  			width:4.2rem;
  			height:.335rem;
  			margin:30px auto;
  		}
	}

</style>
