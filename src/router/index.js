import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'      //首页
import Login from '@/components/Login'                  //登录
import Register from '@/components/Register'            //注册角色
import Reguser from '@/components/Reguser'              //注册用户
import Hospital from '@/components/Hospital'            //医院
import HospitalDetails from '@/components/HospitalDetails'  //医院详情页
import Doctor from '@/components/Doctor'                //医生
import DoctorDetails from '@/components/DoctorDetails'  //医生详情
import Personal from '@/components/Personal'            //个人中心
import Personaldata from '@/components/Personaldata'    //个人资料
import Merchant from '@/components/Merchant'            //商户
import Help from '@/components/Help'                    //帮助
import Service from '@/components/Service'              //服务
import ServiceDetails from '@/components/ServiceDetails'  //服务详情页  
import Video from '@/components/Video'                    //视频
import VideoDetails from '@/components/VideoDetails'    //视频详情
import Cart from '@/components/Cart'                    //购物车
import Order  from '@/components/Order '                //订单页
import Buy from '@/components/Buy'                      //立即购买
import Buypayment from '@/components/Buypayment'        //支付
import BuyComplete from '@/components/BuyComplete'      //购买完成
import ByStages from '@/components/ByStages'            //分期
import ByStagesDetails from '@/components/ByStagesDetails'    //分期详情   
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld', //首页
      component: HelloWorld
    },
    {
      path: '/Login', //登录
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',//注册
      name: 'Register',
      component: Register,
    },
    {
      path: '/Reguser',//注册个人用户
      name: 'Reguser',
      component: Reguser,
    },
    {
      path: '/Hospital',//医院入口
      name: 'Hospital',
      component: Hospital
    },
    {
      path: '/HospitalDetails',//医院入口
      name: 'HospitalDetails',
      component: HospitalDetails
    },
    {
      path: '/Personal',//个人中心
      name: 'Personal',
      component: Personal
    },
    {
      path: '/Personaldata',//个人资料
      name: 'Personaldata',
      component: Personaldata
    },
    {
      path: '/Doctor',//医生入口
      name: 'Doctor',
      component: Doctor
    },
    {
      path: '/DoctorDetails',//医生详情入口
      name: 'DoctorDetails',
      component: DoctorDetails
    },
    {
      path: '/Merchant',//商户服务
      name: 'Merchant',
      component: Merchant
    },
    {
      path: '/Help',//帮助中心
      name: 'Help',
      component: Help
    },
    {
      path: '/Service',//服务页
      name: 'Service',
      component: Service
    },
    {
      path: '/Order',//提交订单
      name: 'Order',
      component: Order
    },
    {
      path: '/ServiceDetails/:fid',//服务详情页
      name: 'ServiceDetails',
      component: ServiceDetails
    },
    {
      path: '/Video',//视频
      name: 'Video',
      component: Video
    },
    {
      path: '/VideoDetails',//视频详情页
      name: 'VideoDetails',
      component: VideoDetails
    },
    {
      path: '/ByStages',//分期
      name: 'ByStages',
      component: ByStages
    },
    {
      path: '/ByStagesDetails',//分期详情页
      name: 'ByStagesDetails',
      component: ByStagesDetails
    },
    {
      path: '/Buy',//立即购买
      name: 'Buy',
      component: Buy
    },
    {
      path: '/Buypayment',//支付页面
      name: 'Buypayment',
      component: Buypayment
    },
    {
      path: '/BuyComplete',//购买完成页面
      name: 'BuyComplete',
      component: BuyComplete
    },
    {
      path: '/Cart',//购物车
      name: 'Cart',
      component: Cart
    },
  ]
})
