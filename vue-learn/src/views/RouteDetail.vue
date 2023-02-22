<template>
  <div>
    <h2>RouteDetail</h2>
    <div>query: {{ route.query }}</div>
    <div>params:id {{ route.params }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="less" scoped></style>
