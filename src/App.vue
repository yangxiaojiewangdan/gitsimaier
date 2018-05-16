<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  margin:0;
  padding:0;
  font-size:16px;
}
/*删掉a标签全局颜色*/
#app {
  height: 100%;
}
</style>
