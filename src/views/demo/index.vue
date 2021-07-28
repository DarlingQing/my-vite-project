<template>
  <h1>Hello Home</h1>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped></style>
