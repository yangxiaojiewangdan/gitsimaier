<template>
  <div class="videoDetails">
   <Header></Header>
   <Nav></Nav>
   <div class="content">
		<div class="videoBox">
   			<video src="../../static/video/vvv.mp4" 
   				controls="controls" 
   				poster="../assets/img/图层59.png">
   			</video>
   			<div class="videoTitle">
   				<span class="spnName">金属托槽矫正</span>
   				<span class="spnDoctor">主治医生：杨雷</span>
   			</div>
   		</div>
   		<hr>
   		<div class="Project">
   			<h4>项目推荐</h4>
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
   		<hr>
   		<div class="videoEvaluate">
   			<h4>视频评价</h4>
   			<div class="pingjia">
   				<img src="../assets/img/评价.png" alt="">
   			</div>
   		</div>
   </div>
   <Footerr></Footerr>
  </div>
</template>

<script>
import Header from "../components/Header"
import Nav from "../components/Nav"
import Footerr from "../components/Footerr"
export default {
  name: 'VideoDetails',
  components:{
  	Header,
  	Nav,
  	Footerr
  },
  data () {
    return {
      
    }
  }
}
</script>


<style scoped lang="scss">
.videoDetails{
	background:#eee;
	.content{
		width:12rem;
		margin:0 auto;
		background:#fff;
		.videoBox{
			width:12rem;
			height:7rem;
			video{
				width:12rem;
				height:6.75rem;
			}
			.videoTitle{
				.spnName{
					padding-left:10px;
				}
				.spnDoctor{
					padding-left:.8rem;
					font-size: 14px;
				}
			}
		}
		.Project{
			h4{
				margin:9px;
			}
			.videoList{
				width:2.92rem;
				height:2.34rem;
				//border:1px solid #000;
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
					height:20px;
					line-height:20px;
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
		.videoEvaluate{
				h4{
					margin:9px;
				}
				.pingjia{
					margin:20px 0;
				}
			}
	}
}
video::-internal-media-controls-download-button {
    display:none;
}

video::-webkit-media-controls-enclosure {
    overflow:hidden;
}

video::-webkit-media-controls-panel {
    width: calc(100% + 30px); 
}
</style>
