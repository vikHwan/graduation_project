<template>
  <div>
    <h1>
      <a :href="blog.link" @click.prevent="$emit('titleClick',blog.title)">{{blog.title}}</a>
    </h1>
    <article>

      <div>{{content}}</div>
      <footer v-if="blog.content.length>10">
        <a href="" @click.prevent="showAllContent=!showAllContent">{{!showAllContent? 'hidden content':'read more'}}</a>

      </footer>
    </article>
    <p>{{view}}</p>

    <slot></slot>

  </div>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
// import router from "@/router";

const props = defineProps(['blog'])
defineEmits(['titleClick'])

const view = ref(0)
const showAllContent = ref(true)
let content = ref(props.blog.content)

watch(showAllContent,()=>{
  if (showAllContent.value){
    content.value = props.blog.content.slice(1,10)
  }else {
    content.value = props.blog.content
  }

})


onMounted(()=>{
  content.value = props.blog.content.slice(1,10)
  setInterval(()=>{
    view.value+= Math.floor(Math.random()*10)+1
  },1000)
})

/*function toPage(){
  console.log(111)
  router.push({path:'map'})
  router.replace({path:'/map'})
}*/

</script>

<style scoped lang="less">
a{
 display: block;
}
</style>