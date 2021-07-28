<template>
  <h1>Hello Home</h1>
  <ul>
    <!-- <li><router-link to="/basic-demo1">Basic-Demo1</router-link></li> -->
    <li><router-link to="/basic-style">Basic-Style: 样式变化</router-link></li>
    <!-- <li><router-link to="/jsx-demo">Basic-Jsx: Jsx支持</router-link></li> -->
  </ul>
  <div @click="handleClickSetUp">click me => setup</div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  msg: String,
});

const state = reactive({ count: 0 });

const handleClickSetUp = () => {
  // router.push({ path: "/basic-demo1" });
  // eslint-disable-next-line no-undef
  console.log(111, router);
};
</script>

<style scoped></style>
