<template>
  <button :title="customTitle" :class="customClass">
    <slot></slot>
  </button>
</template>

<style scoped>
@import "./index.css";
</style>


<script>
export default {
  name: "btnComponent",
  components: {},
  props: {
    customClass:{
      type:[String, Array],
      default:""
    },
    customTitle:{
      type:[String, Array],
      default:"click btn"
    }
  },
};
</script>