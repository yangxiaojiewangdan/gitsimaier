<template>
    <div>
        <div class = "wrap">
            <HositalHeaderr > </HositalHeaderr>
                <br class="clear" />
                <div class="information">
                    <div>
<div class="informationLeft">
                        <h2>基本信息(*未必填项)</h2>
                        <div class = "designation">
                            <span>*齿科名称</span>
                            <input type="text" v-model = "name">
                            
                        </div>
                        <div class = "designation">
                            <span>*前台电话</span>
                            <input type="text" v-model = "tel">
                        </div>
                        <div class = "designation">
                            <span>*所在省份</span>
                            <select name="" id="">
                                <option value="">1</option>
                            </select>
                            <select name="" id="">
                                <option value="">1</option>
                            </select>
                            <select name="" id="">
                                <option value="">1</option>
                            </select>
                        </div>
                        <div class = "designation">
                            <span>*齿科地址</span>
                            <input type="text">
                        </div>
                        <div class = "designation">
                            <span>*齿科类型</span>
                            <input type="text">
                        </div>
                        <div class = "designation">
                            <span>*齿科店名</span>
                            <input type="text">
                        </div>
                        <div class = "designation">
                            <span>*经营者姓名</span>
                            <input type="text">
                        </div>
                        <div class = "designation">
                            <span>*经营者身份证号</span>
                            <input type="text">
                        </div>
                    </div>
                    <div class="informationRight">
                        <div class="identity">
                            <div>
                                <i class ="iconfont"></i>
                                <span>身份证正面（经营者)</span>
                            </div>
                            <div>
                                <i class ="iconfont"></i>
                                <span>身份证正面（经营者)</span>
                            </div>
                            <div>
                                <i class ="iconfont"></i>
                                <span>身份证正面（经营者)</span>
                            </div>
                        </div>
                        <div class="identity1">
                            <figure>
                                <img src="./images/reghosipatial.png" alt="">
                                <figcaption>注意:为了保护商家隐私，示例对敏感信息做了模糊处理，请在您上传的图片里保证内容清晰可见，不做任何处理</figcaption>
                            </figure>
                        </div>
                    </div>
                    </div>
                    

                    <div class="LicenseInformation">
                        <h2>执照信息</h2>
                        <div class="licence">
                            <div class="licence1">*医疗机构执业许可证
                            </div>
                            <div class="uploading">
                                <div>
                                    <span>点击上传</span>
                                </div>
                            </div>
                        </div>
                        <div class="licence">
                            <div class="licence1">*医疗机构执业许可证
                            </div>
                            <div class="uploading">
                                <div>
                                    <span>点击上传</span>
                                </div>
                            </div>
                        </div>
                        <div class="licence">
                            <div class="licence1">*医疗机构执业许可证
                            </div>
                            <div class="uploading">
                                <div>
                                    <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>
                                    <span>点击上传</span>
                                </div>
                            </div>
                        </div>
                        <div class="commercial">
                            <span>
                                作为入驻商户承诺维护口腔点评内容的客观、真实性，不得进行违反诚信的任务行为（包括但不限于商家及利益相关方给自己在线商户提交好评、通过收买或者诱导（如送菜、送礼、折扣等）用户提交好评，使用虚假账号提交好评、利用违规手段进行虚假点击等影响点评真实性、客观性的行为及其他违反诚信公约的行为），否则平台有权依据《商户诚信公约及管理办法》对入驻商户采取星级清空、排序降权、公开警告等处罚措施
                            </span>
                            <div>
                                <input type="radio">我已阅读并同意<a href = "javascript:;">《商户诚信公约及管理办法》</a>
                            </div>
                            <div class="audit">
                                <button @click = "audit1">提交审核</button>
                            </div>
                        </div>
                    </div> 
                </div>
                 
            <Footerr1></Footerr1>
        </div>
        
    </div>
</template>
<script>
import Footerr1 from "../Footerr"
import HositalHeaderr from './HositalHeader.vue'
import axios from "axios"
    export default {
       components:{
        Footerr1,
        HositalHeaderr
    },
        data:function () {
            return {
                consent:false,
                tel:"", //电话号匹配
                name:"", // 公司名称


            }
        },
        methods:{
            update:function(e){
          let file = e.target.files[0];           
          let param = new FormData(); //创建form对象
          param.append('file',file,file.name);//通过append向form对象添加数据
          param.append('chunk','0');//添加form表单中其他数据
          console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
          let config = {
            headers:{'Content-Type':'multipart/form-data'}
          };  //添加请求头
        axios.post('http://upload.qiniu.com/',param,config)
          .then(response=>{
            console.log(response.data);
          })        
},
audit1:function(){
    console.log(this.tel)
    this.$router.push({path:"/HospitalHomepage", query: { tit: this.name }})
}
        },

    }
</script>
<style scoped lang="scss">
    .clear{
        clear:both;
    }
    button{
        outline:none;
        border:none;
    }
    .wrap{
        width: 100%;
        height: 100%;
        display:inline-block;
        .information {
            width: 12rem;
            margin:0 auto;
            .informationLeft{
                width:calc(100% / 2);
                display:inline-block;
            
            h2{
                display:inline-block;
                margin:.47rem 0 .34rem .72rem;
                font-size:.32rem;
                font-family:MicrosoftYaHei-Bold;
                color:rgba(51,51,51,1);
            }
            .designation {
                margin:0 0 .23rem 0;
                select{
                    width: 1.12rem;
                    height: .4rem;
                }
                span{
                    display:inline-block;
                    width: 1.46rem;
                    text-align:right;
                    font-size:.14rem;
                    font-family:MicrosoftYaHei;
                    color:rgba(51,51,51,1);
                    margin:0 .28rem 0 0 ;
                }
                input{
                    width:3rem;
                    height:.4rem;
                    padding:0 .2rem;
                    border:solid 1px #000000;
                }  
            }
            
            }
            .informationRight{
               width:calc(100% / 2);
               float:right;
               .identity{
                   display:inline-block;
                   width: 2.28rem;
                   margin:0 0 0 .3rem;
                    vertical-align: top;
                   
                   div{
                        position:relative;
                        margin:0rem 0 .1rem 0;
                        width:2.28rem;
                        height:1.45rem;; 
                        display:inline-block;
                        background:rgba(235,235,235,1);
                        border:solid 1px #000000;
                        span{
                            position: absolute;
                            bottom:.1rem;;
                            left:.39rem;
                            font-size:.12rem;
                            color:rgba(51,51,51,1);
                        }
                   }
                   div:nth-child(1){
                       margin:.67rem 0 .1rem 0 ;
                   }
               }
               .identity1{
                    display:inline-block;
                    width:3.25rem;
                    height:3.25rem; 
                    margin:1.5rem 0 0 0 ;
                    figure{
                        img{
                            width: 100%;
                        }
                        figacption{
                            color:#5d5d5d;
                        }
                    }
               }
            }
        }
    }
    .LicenseInformation{
                h2{
                    font-size:.32rem;
                    font-family:MicrosoftYaHei-Bold;
                    color:rgba(51,51,51,1);
                    line-height:0px;
                }
                .licence{
                    margin: .32rem 0 0 0 ;
                    .licence1{
                        display:inline-block;
                        width: 1.46rem;
                        text-align:right;
                        font-size:.14rem;
                        font-family:MicrosoftYaHei;
                        color:rgba(51,51,51,1);
                    }
                    .uploading{
                        display:inline-block;
                        width:3.42rem;
                        height:4.21rem; 
                        background:rgba(235,235,235,1);
                        vertical-align: top;
                        position: relative;
                        div{
                            position: absolute;
                            top:calc(50% - .08rem);
                            left:calc(50% - .32rem);
                        }
                    }
                }
                .commercial{
                    width: 9.52rem;
                    margin: 0 auto;
                    span{
                        display:inline-block;
                        margin:.65rem  0 .61rem 0; 
                        text-indent: 34px;
                        font-size:.14rem;
                    }
                    div{
                        text-align:center;
                        margin:0 0 .85rem 0;
                        a{
                            color:#61C7F2;
                        }
                    }
                   .audit{
                       margin:0 0 1.14rem 0;
                       text-align:center;
                       button{
                           width:2.5rem;
                            height:.4rem;; 
                            background:rgba(97,199,242,1);
                            border-radius: 10px ;
                            color:#fff;
                       }
                   }
                }
            }
</style>
