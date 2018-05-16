<template>
    <div>
        <div class="sldeAuto">
            <p>查询卡券状态</p>
            <input type="text">
            <button @click="query1()">查询</button>
        </div>
        <div v-for="(item,index) in arr" key="index">
            {{item.a}},{{item.b}}
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      arr: []
    };
  },
  methods: {
    query1: function() {
      console.log(1);
      this.arr = [{ a: "1", b: "2" }];
    }
  }
};
</script>