<script setup>
import Home from "./views/Home.vue";

onMounted(() => {
  // 设置默认主题色
  document.getElementById("app").setAttribute("class", "theme-light");
  console.log(document.getElementById("app"))
});
</script>

<template>
  <Home></Home>
</template>

<style lang="css"></style>
