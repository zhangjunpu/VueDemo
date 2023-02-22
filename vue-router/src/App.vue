<template>
  <div class="root">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <button @click="handleQuery">路由 query</button>
    <button @click="handleParams">路由 params</button>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const arg = reactive({
  id: 1,
  name: "张三",
  age: 18,
});

const handleQuery = () => {
  router.push({
    path: "/detail",
    query: arg,
  });
};
const handleParams = () => {
  router.push({
    name: "detail",
    params: arg,
  });
};
</script>

<style lang="less" scoped>
.root {
  padding: 10px;

  a, button {
    margin: 5px;
    padding: 5px 10px;
    font-size: 14px;
    background-color: #ccc;
    border-radius: 5px;
  }
}
</style>
