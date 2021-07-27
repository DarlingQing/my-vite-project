<template>
  <h1>{{ msg }}</h1>
  <p>Hello Vite2!!!</p>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  msg: String,
});

const state = reactive({ count: 0 });

type Course = {
  id: number;
  name: string;
};

const course = reactive<Course[]>([
  {
    id: 1,
    name: "开课吧",
  },
]);
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
<style scoped lang="scss">
a {
  color: #f00;
}
</style>
