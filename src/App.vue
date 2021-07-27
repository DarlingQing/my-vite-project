<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <img alt="Vue logo" :src="logo" />
  <!-- <div class="logo"></div> -->
  <!-- 明文命名 -->
  <div :class="$style.logo2"></div>
  <div :class="appClasses.logo"></div>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <input type="text" placeholder="请输入" />
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
// 解析为地址
import logo from "./assets/logo.png";

// 加载模块化的样式，中间命名必须加上module
import "./App.module.css";
import appClasses from "./App.module.css";

fetch("/api/users")
  .then((res) => res.json())
  .then((users) => console.log(users));

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style scoped>
.logo {
  background-image: url(./assets/logo.png);
  width: 200px;
  height: 200px;
}
</style>

<style module>
/*  模块化命名方式 */
.logo2 {
  background-image: url(./assets/logo.png);
  background-size: cover;
  width: 300px;
  height: 300px;
}
</style>
