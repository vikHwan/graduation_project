<template>
<div id="navPage">
  <nav>
    <a href="" @click.prevent="toBlog"><h1>Blog</h1></a>
    <a href="" @click.prevent="router.push({name:'mapHomeView'})"><h1>Map</h1></a>
    <a href="" @click.prevent="router.push({name:'esriMap'})"><h1>ESRI</h1></a>
    <a href="" @click.prevent="router.push({path:'/userView/:123'})" style="display: block">userView</a>
  </nav>

</div>
</template>

<script setup>

import router from "@/router";

function toBlog(){
  router.push({name:'blog'})
}
</script>

<style scoped lang="less">
#navPage{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  a{
    text-align: center;
  }
}
</style>