<template>
  <h3>Proxy: {{ msg }}</h3>
  <ul>
    <li v-for="item in state.list" :key="item.snum">{{ item.nm }}</li>
  </ul>
</template>

<script setup>
import axios from "axios";
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({
  list: [],
});
const updateList = (list) => {
  state.list = list;
};

// 跨域请求
const requestHot = async () => {
  const res = await axios.get("/proxy/api/mmdb/movie/v3/list/hot.json");
  updateList(res.data.data.hot);
  console.log(state.list);
};
requestHot();
</script>

<style scoped>
ul {
  width: 300px;
  margin: 0 auto;
  background-color: #f2f2f2;
}
</style>
