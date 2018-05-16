<template>
  <div>
    <HositalHeader />
    <div class="wrap">
      <div class="slde">

        <div>
          <ul v-for="item in arr">
            <h2 v-for>12312</h2>
            <li class="active" v-for="items in item">
              <router-link to="/hositalmanagement/inquire">{{items.a}}</router-link>
            </li>
          </ul>
        </div>
        <div class="sldeR">
          <router-view></router-view>
        </div>
      </div>

    </div>
    {{ind}}
    <Footerr/>
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
      ind: this.$route.query.ind, //跳转传的值
      arr: [
        [
          {
            a: 1
          },
          {
            a: 2
          }
        ]
      ],
      arr1: [{ tit: "1231231" }, { tit: "1231231" }]
    };
  },
  mounted() {
    //先获取左边的数据
  }
};
</script>
<style lang="scss">
ul > li {
  list-style: none;
}
.wrap {
  width: 12rem;
  margin: 0 auto;
}
.slde {
  div {
    display: inline-block;
    width: 2.1rem;
    margin: 0.35rem 0 0 0;
    ul {
      li {
        display: inline-block;
        font-size: 0.16rem;
        margin: 0.15rem 0;
        padding: 0.13rem 0.49rem 0.13rem 0.2rem;

        border-radius: 10px;
        text-align: center;
      }
      .active {
        background: rgba(109, 207, 246, 1);
        color: #fff;
      }
    }
  }
  .sldeR {
    width: 9.8rem;
    height: 7.69rem;

    background: rgba(255, 255, 255, 1);
    border: solid 1px #000;
    vertical-align: top;
    .sldeAuto {
      display: inline-block;
      width: 4rem;
      height: 3.85rem;
      margin: 0.7rem 2.75rem 0 2.75rem;
      background: rgba(215, 215, 215, 1);
    }
  }
}
</style>