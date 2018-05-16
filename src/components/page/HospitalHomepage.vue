<template>
    <div>
        <HositalHeader :tit="tit"></HositalHeader>
            <section>   
                <div class="map" v-for = "(item,index) in arr">
                   <router-link :to="{name:'hositalmanagement',query:{ind:index}}">{{item.tit}}</router-link> 
                </div>
            </section>
        <Footerr></Footerr>
    </div>
</template>
<script>
import HositalHeader from "./HositalHeader.vue";
import Footerr from "../Footerr.vue";
export default {
  components: {
    HositalHeader,
    Footerr
  },
  data: function() {
    return {
      tit: this.$route.query.tit,
      arr: [
        { tit: "预定管理"},
        { tit: "团队登录" },
        { tit: "口碑管理" },
        { tit: "门店管理" },
        { tit: "财务管理" },
        { tit: "账号管理" },
        { tit: "相册管理" },
        { tit: "营销推广" },
        { tit: "证件执照" },
        { tit: "广告方案" },
        { tit: "经营参谋" }
      ]
    };
  }
};
</script>
<style lang="scss">
section {
  width: 12rem;
  margin: 0 auto;
  .map {
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
    background: rgba(122, 215, 192, 1);
    border-radius: 0.1rem;
    margin: 0.2rem 0.75rem 0.33rem 0;
    text-align: center;
    line-height: 1.5rem;
  }
}
</style>