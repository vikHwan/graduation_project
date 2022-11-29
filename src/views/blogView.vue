<template>
  <div>
    <blog-post @titleClick = 'handle' v-for="blog in blogs" :key="blog.id" :blog="blog">
      <button>push to</button>
    </blog-post>
    <h3 v-show="showCount">all:{{postCount}}</h3>
    <button @click="showPostsCount">{{!showCount? 'show': 'hidden'}} count</button>
    <form @submit.prevent="submitForm">
      <label>title</label>
      <input type="text" v-model="blogForm.title">
      <label>content</label>
      <textarea v-model="blogForm.content" rows="5" cols="50"></textarea>
      <label>link</label>
      <input type="text" v-model="blogForm.link">
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import BlogPost from "@/components/blogPost.vue";

const blogs = ref([
  {
    id:1,
    title:'tits a title',
    content:'this is a content about vue&vite',
    link:'/map'
  },{
    id:2,
    title:'tits a title2',
    content:'this is a content about vue&vite',
    link:'/'
  },{
    id:3,
    title:'tits a title3',
    content:'vue&vite',
    link:'/'
  }
])
const initBlogForm = ref({
  title:'',
  content:'',
  link:''
})
const blogForm = ref({...initBlogForm.value})
/*function showMore(){

}*/
const postCount = computed(()=>{
  return blogs.value.length
})
const showCount = ref(true)

function showPostsCount (){
  showCount.value=!showCount.value
}
function submitForm(){
  blogs.value.push({
    id:blogs.value.length+1,
    ...blogForm.value
  })
  blogForm.value = initBlogForm.value
}
function handle(e){
  console.log(e)
}
</script>

<style scoped>
form{
  display: grid;
}
</style>