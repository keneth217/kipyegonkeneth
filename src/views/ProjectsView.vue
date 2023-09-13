<template>
   <div>
     <p v-for="post in posts" :key="post.id"> </p>
       <h1>{{ post.id }}</h1>
    
   </div>
 </template>
 
 <script>
 import axios from "axios";
 import { ref, onMounted } from "vue";
 
 export default {
   setup() {
     const posts = ref([]);
 
     const getPost = () => {
       return axios
         .get("https://api.github.com/users/keneth217")
         .then((res) => (posts.value = res.data))
         .catch((error) => console.log(error));
     };
 
     onMounted(() => {
       getPost();
     });
 
     return {
       posts,
     };
   },
 };
 </script>
 