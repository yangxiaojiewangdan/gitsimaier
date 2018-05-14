<template>
  <div class="anchors">
    <div class="box">
    	<div class="tepService">
    		<i class="iconfont" @click="chengTep()">&#xe731;</i>
    		<transition name="fade">
    		<div class="serviceFrame" v-if="showFlag" >
  				你好！有什么需要帮助的吗？
  			</div>
  		</transition>
    	</div>
    	<div class="backTop"@click="chengTop()">
    		<i class="iconfont" >&#xe747;</i>
    	</div>
    	<router-link to="/Cart">
    	<div class="cart">
    		<i class="iconfont">&#xe603;</i>
    	</div>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Anchors',
  data () {
    return {
      showFlag:false,
    }
  },
  methods:{
  	chengTep(){
  		this.showFlag = !this.showFlag;
  	},
  	chengTop(){
  		scrollTo(0,0);
  	}
  }

}
</script>


<style scoped lang="scss">
.anchors{
	position:relative;
	.box{
		width:45px;
		height:150px;
		position:fixed;
		top:30%;
		right:0;
		z-index:9999;
		.tepService,.backTop,.cart{
			width:45px;
			height:45px;
			background:#65b2d6;
			margin-bottom:10px;
			border-radius:5px;
			color:#fff;
			text-align:center;
			line-height:45px;
			cursor:pointer;
			i{
				font-size:36px;

			}
			.serviceFrame{
		width:4rem;
		height:2rem;
		border:1px solid #000;
		z-index:999999;
		background:red;
		border-radius:10px;
		position:absolute;
		right:.5rem;

	}
		}
	}
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  margin-right:0;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  margin-right:4rem;
}
</style>
