<template>
  <div>
    <h2>About</h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
// console.log(route);
// console.log(router);

const requestBanner = async () => {
  const res = await axios.get("http://cloud-music.pl-fe.cn/banner");
  console.log("banner", res.data);
};
requestBanner();

// 跨域请求
const requestHot = async () => {
  const res = await axios.get("/proxy/api/mmdb/movie/v3/list/hot.json");
  console.log("hot", res.data);
};
requestHot();
</script>

<style scoped></style>
