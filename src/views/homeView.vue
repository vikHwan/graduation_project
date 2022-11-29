<template>
<div id="navPage">
  <nav>
    <a href="" @click.prevent="toBlog"><h1>Blog</h1></a>
    <a href="" @click.prevent="router.push({name:'mapHomeView'})"><h1>Map</h1></a>
    <a href="" @click.prevent="router.push({name:'esriMap'})"><h1>ESRI</h1></a>
    <a href="" @click.prevent="router.push({path:'/userView/:123'})" >userView</a>
    <a href="" @click.prevent="login"><h1>LOGIN</h1></a>
  </nav>

</div>
</template>

<script setup>

import router from "@/router";
import {$login} from "@/net";
function toBlog(){
  router.push({name:'blog'})
}
function login(){
  $login().then(r=>{
    console.log(r)
  })
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
    display: block;
  }
}
</style>