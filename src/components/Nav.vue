<template>
  <div class="nav">
  	<ul class="navUl">
  		<router-link to="/Service">
  			<li>服务</li>
  		</router-link>
  		<router-link to="/Hospital">
			<li>医院</li>
		</router-link>
		<router-link to="/Doctor">
			<li>医生</li>
		</router-link>
		<router-link to="/Video">
			<li>视频</li>
		</router-link>
		<router-link to="/ByStages">
			<li>分期</li>
		</router-link>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      
    }
  },
  methods:{
  	page(){
  		this.$router.push({ 
  			path: '/Service',
  			query:{ 
  				name:this.name,
  				age:this.age
  			}}
  			)

  	},
  }
}
</script>


<style scoped lang="scss">
.nav{
	width:100%;
	height:.5rem;
	background:#fcfcfc;
	.navUl{
		width:4rem;
		margin:0 auto;
		li{
			list-style:none;
			float:left;
			width:.6rem;
			text-align:center;
			font-size:16px;
			line-height:.5rem;
			font-family:MicrosoftYaHei;
			color: #2b2b2b;
		}
	}
}

</style>
