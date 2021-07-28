<template>
  <h2>Vite-Style</h2>
  <div :class="$style.inlineTitle">我是内联样式</div>
  <div :class="styleClasses.moduleitle">我是css-module样式</div>
  <div class="sass-scope-title">我是sass样式</div>
  <div class="sass-title">我是sass样式2</div>
  <hr />
  <h2>静态资源</h2>
  <div><img alt="Vue logo" :src="logo" /></div>
</template>

<script setup>
import logo from "@/assets/logo.png";
import nameListUrl from "../../constants/data.js?url";
import "./style.sass";
import styleClasses from "./style.module.css";

console.log(111, nameListUrl);
</script>

<style scoped lang="sass">
.sass-scope-title
  color: #333
  font-size: 16px
  font-weight: bold
</style>

<style module>
.inlineTitle {
  color: #f00;
  font-size: 16px;
  font-weight: bold;
}
</style>
