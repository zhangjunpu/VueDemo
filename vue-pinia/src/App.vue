<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped lang="less">
.logo {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
}
.wrapper {
}
nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;

  a {
    color: #999;
    padding: 10px;

    &:hover,
    &.router-link-exact-active {
      color: #333;
    }
  }
}
</style>
