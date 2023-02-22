<template>
  <div class="root">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="{ name: 'detail', params: { id }, query: { name: 'Junpu', age: 18 } }">详情</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const id = ref(1);
</script>

<style scoped lang="less">
.root {
  padding: 20px;

  a {
    margin: 10px;
    font-size: 16px;
  }
}
</style>
