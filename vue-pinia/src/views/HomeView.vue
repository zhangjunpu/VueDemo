<template>
  <main>
    <h2>Home</h2>
    <div class="list">
      <div v-for="item in store.banners" :key="item.scm" class="item">
        <p>{{ item.typeTitle }}</p>
        <img :src="item.imageUrl" :alt="item.typeTitle" class="img" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRecommendStore } from "@/stores/recommend";

const store = useRecommendStore();
store.requestBannersAction();
</script>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-right: 5px;

    .img {
      width: 270px;
      height: 100px;
    }
  }
}
</style>
