<script setup lang="ts">
import { ref, reactive } from "vue";

const fontSize = "18px";

// number
let counter = ref(0);
const increment = () => {
  counter.value++;
};

// obj
const person = reactive({
  name: "junpu",
  age: 19,
});
const changeAge = () => {
  person.age++;
};
</script>

<template>
  <div class="home">
    <h2 class="title" style="background-color: pink" :style="{ 'font-size': fontSize }">Home: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <h3>{{ `${person.name} - ${person.age}` }}</h3>
    <button @click="changeAge">change age</button>
  </div>
</template>

<style lang="less">
.home {
  .title {
    font-weight: 700;
  }
}
</style>
