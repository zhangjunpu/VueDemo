<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ProxyView :msg="msg" />
  </div>
</template>

<script>
import ProxyView from "./ProxyView.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    ProxyView,
  },
};
</script>

<style scoped></style>
