<template>
  <div class="about">
    <h1>About</h1>

    <div class="list">
      <div class="item" v-for="item in topFour" :key="item.id">
        <img :src="item.picUrl" alt="" />
        <div class="item-info">
          <span>{{ item.name }}</span>
          <span>播放：{{ item.playCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHotStore } from "@/stores/hot";
import { storeToRefs } from "pinia";

const store = useHotStore();
const { hotList, topFour } = storeToRefs(store);
store.getHotList();
</script>

<style lang="less">
.about {
  padding: 20px;

  .list {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      height: 80px;
      margin-top: 10px;

      img {
        height: 80px;
      }

      .item-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        span {
          line-height: 20px;
        }
      }
    }
  }
}
</style>
