<script setup lang="ts"></script>

<template>
  <div class="root">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.root {
  padding: 10px;

  a {
    margin: 5px;
  }
}
</style>
