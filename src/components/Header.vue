<template>
  <div class="header">
  		<div class="recion">
  			<!-- 三级联动选择地址 -->
  			<div class="block">
  			<span class="demonstration"></span>
  			<el-cascader class="el-border"
  				placeholder="北京"
    			expand-trigger="hover"
    			:show-all-levels="false"
    			:options="options"
    			v-model="selectedOptions2"
    			@change="handleChange">
  				</el-cascader>
			</div>
			<!-- 搜索框 -->
			<el-autocomplete
				v-model="state4"
				:fetch-suggestions="querySearchAsync"
				placeholder="请输入内容"
				@select="handleSelect"
			></el-autocomplete>
			<i class="iconfont fangdajing">&#xe69d;</i>
  		</div>
  		<ul class="menu">
  			<router-link to="/Login">
				<li>登录</li>
			</router-link>
			<router-link to="/Register">
				<li>注册</li>
			</router-link>
			<router-link to="/Hospital">
				<li>医院入口</li>
			</router-link>
			<router-link to="/Doctor">
				<li>医生入口</li>
			</router-link>
			<router-link to="/Personal">
				<li>个人中心</li>
			</router-link>
			<router-link to="/Merchant">
				<li>商户服务</li>
			</router-link>
			<router-link to="/Help">
				<li>帮助中心</li>
			</router-link>
  		</ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data:function () {
    return {
       options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, ]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: [],
        //搜索框
        restaurants: [],
        state4: '',
        timeout:  null
      };
    },
    methods:{
      handleChange(){},
    	 loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
        ];
      }, 
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },

       createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
     mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
<style  lang="scss">
a{
  text-decoration: none;
  color:#fff;
}
	.header{
		width:100%;
		height:0.6rem;
		background: #2b2b2b url(../assets/img/log.png) no-repeat 0.5rem center;
		.recion{
			color:#fff;
			display:inline-block;
			.block{
				display:inline-block;
				.el-cascader{
				line-height:.6rem;
				margin-left:3.5rem;
				width:.9rem;
			}
			.el-cascader .el-input .el-input__inner{
				background:#2b2b2b;
				border:none;
			}
		}
		.el-autocomplete .el-input .el-input__inner{
				height:0.28rem;
				width:2.76rem;
		}
		.fangdajing{
			font-size:18px;
			line-height:.6rem;
			padding-left:.1rem;
			cursor:pointer ;
		}
	}
	.menu{
		float:right;
		display:inline-block;
		margin-right:.5rem;
		li{
			float:left;
			list-style:none;
			width:.65rem;
			text-align:center;
			font-family: MicrosoftYaHei;
			font-size: 14px;
      padding-top:0.08rem;
		}
	}
}
</style>
