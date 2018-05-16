<template>
  <div class="hello">
  <Header></Header>
  <Nav></Nav>
  <Banner></Banner>
  <Menu></Menu>
  <hr>
   <div class="servList">
    <!-- 下拉菜单 -->
      <select>
          <option v-for="option in options1" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>

      <select>
          <option v-for="option in options2" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>
      <select >
          <option v-for="option in options3" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>
    </div>
    <!-- 医生列表 -->
    <div class="bigDiv">
<router-link to="/DoctorDetails">
    <div class="doctorList">
    	<div class="imgBox">
    		<img src="../assets/img/yisheng.png">
    	</div>
    	<div class="nameAndStart">
    		<span class="name">杨雷</span>
    		<span class="start">星级指数
			 <el-rate
			  v-model="value5"
			  disabled
			  show-score
			  text-color="#ff9900"
			  score-template="">
			</el-rate>
    		</span>
    		<div class="iconf">
    			<span><i class="iconfont frist">&#xe608;</i>美学修复</span>
    			<span><i class="iconfont two">&#xe608;</i>牙齿种植</span>
    			<span><i class="iconfont three">&#xe608;</i>儿童口腔</span>
    		</div>
    		<div class="hospaddres">
    			<h4><i class="iconfont title">&#xe609;</i>思迈尔齿科</h4>
    		</div>
    	</div>
    </div>
</router-link>
     <div class="doctorList">
    	<div class="imgBox">
    		<img src="../assets/img/yisheng.png">
    	</div>
    	<div class="nameAndStart">
    		<span class="name">杨雷</span>
    		<span class="start">星级指数
			 <el-rate
			  v-model="value5"
			  disabled
			  show-score
			  text-color="#ff9900"
			  score-template="">
			</el-rate>
    		</span>
    		<div class="iconf">
    			<span><i class="iconfont frist">&#xe608;</i>美学修复</span>
    			<span><i class="iconfont two">&#xe608;</i>牙齿种植</span>
    			<span><i class="iconfont three">&#xe608;</i>儿童口腔</span>
    		</div>
    		<div class="hospaddres">
    			<h4><i class="iconfont title">&#xe609;</i>思迈尔齿科</h4>
    		</div>
    	</div>
    </div>

     <div class="doctorList">
    	<div class="imgBox">
    		<img src="../assets/img/yisheng.png">
    	</div>
    	<div class="nameAndStart">
    		<span class="name">杨雷</span>
    		<span class="start">星级指数
			 <el-rate
			  v-model="value5"
			  disabled
			  show-score
			  text-color="#ff9900"
			  score-template="">
			</el-rate>
    		</span>
    		<div class="iconf">
    			<span><i class="iconfont frist">&#xe608;</i>美学修复</span>
    			<span><i class="iconfont two">&#xe608;</i>牙齿种植</span>
    			<span><i class="iconfont three">&#xe608;</i>儿童口腔</span>
    		</div>
    		<div class="hospaddres">
    			<h4><i class="iconfont title">&#xe609;</i>思迈尔齿科</h4>
    		</div>
    	</div>
    </div>

     <div class="doctorList">
    	<div class="imgBox">
    		<img src="../assets/img/yisheng.png">
    	</div>
    	<div class="nameAndStart">
    		<span class="name">杨雷</span>
    		<span class="start">星级指数
			 <el-rate
			  v-model="value5"
			  disabled
			  show-score
			  text-color="#ff9900"
			  score-template="">
			</el-rate>
    		</span>
    		<div class="iconf">
    			<span><i class="iconfont frist">&#xe608;</i>美学修复</span>
    			<span><i class="iconfont two">&#xe608;</i>牙齿种植</span>
    			<span><i class="iconfont three">&#xe608;</i>儿童口腔</span>
    		</div>
    		<div class="hospaddres">
    			<h4><i class="iconfont title">&#xe609;</i>思迈尔齿科</h4>
    		</div>
    	</div>
    </div>

     <div class="doctorList">
    	<div class="imgBox">
    		<img src="../assets/img/yisheng.png">
    	</div>
    	<div class="nameAndStart">
    		<span class="name">杨雷</span>
    		<span class="start">星级指数
			 <el-rate
			  v-model="value5"
			  disabled
			  show-score
			  text-color="#ff9900"
			  score-template="">
			</el-rate>
    		</span>
    		<div class="iconf">
    			<span><i class="iconfont frist">&#xe608;</i>美学修复</span>
    			<span><i class="iconfont two">&#xe608;</i>牙齿种植</span>
    			<span><i class="iconfont three">&#xe608;</i>儿童口腔</span>
    		</div>
    		<div class="hospaddres">
    			<h4><i class="iconfont title">&#xe609;</i>思迈尔齿科</h4>
    		</div>
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
import Banner from "../components/Banner"
import Menu from "../components/Menu"
import Footerr from "../components/Footerr"
export default {
  name: 'HelloWorld',
  components:{
  	Header,
  	Nav,
  	Banner,
  	Menu,
  	Footerr,
  },
  data () {
    return {
    	 options1: [
      { text: '智能排序'},
      { text: 'Two'},
      { text: 'Three'}
    ],
    options2: [
      { text: '优惠活动'},
      { text: 'Two'},
      { text: 'Three'}
    ],
    options3: [
      { text: '价格'},
      { text: 'Two'},
      { text: 'Three'}
    ],
    value5:5,
      
    }
  }
}
</script>


<style scoped lang="scss">
    .servList{
    width:12rem;
    margin:.1rem auto;
    select{
      margin-left:.3rem;
      display:inline-block;
      width:1rem;
      height:.3rem;
      background-color: rgba(43, 43, 43, 0.2);
      border-radius: 5px;
      color:#333333;
      outline:none;
      width: auto;
      padding: 0 2%;
      margin: 0;
      option{
        text-align:center;
        background:#fff;
      }

    }
    select:hover{
      background-color: #5e97db;
    }
  }
  .bigDiv{
  	width:12rem;
  	margin:0 auto;
  	// display: flex;
  	// flex-wrap:wrap;
  	// flex-grow:1;
  	// background:red;
  	.doctorList{
  		width:2.89rem;
  		// width:24.9%;
  		height:3.23rem;
  		border:1px solid rgba(43, 43, 43, 0.5);
  		display:inline-block;
  		margin-top:8px;
  		.imgBox{
  			width:2.90rem;
  			height:2.18rem;
  		}
  		.nameAndStart{
  			width:100%;
  			height:.3rem;
  			border-bottom:1px solid #cfedfe;
  			padding-top:10px;
  			.name{
  				font-size: 20px;
  				color: #2b2b2b;
  				padding-left:10px;
  			}
  			.start{
  				float:right;
  				padding-top:2px;
  				font-size: 14px;
  				color: rgba(43, 43, 43, 0.5);
  			  .el-rate{
  				display:inline-block;
  				}
  			}
  			
  		}
  		.iconf{
  			padding-top:10px;
  			span{
  				padding-left:20px;
  				font-size: 12px;
  				color: rgba(43, 43, 43, 0.5);
  				.frist{
  					color:#f49ac1;
  				}
  				.two{
  					color:#7cc576;
  				}
  				.three{
  					color:#fff568;
  				}
  			}

  		}
  		.hospaddres{
  			h4{
  				margin:0;
  				padding-top:10px;
  				padding-left:10px;
  			}
  			
			.title{
				padding-right:10px;
				color:#5fc2fb;

			}
  		}
  	}
  }
.page{
  			width:4.2rem;
  			height:.335rem;
  			margin:30px auto;
  		}
</style>
