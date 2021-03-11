<template>
<<<<<<< HEAD
  <button :name="customName" @click="changeLang" :title="customTitle" :class="customClass">
=======
  <button
    :title="customTitle"
    :type="buttonType"
    :name="customName"
    @click="handleAction"
    :class="customClass"
  >
>>>>>>> d787270fe855e8cc4a24637dfc84de2db7224d1e
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
    customClass: {
      type: [String, Array],
      default: "",
    },
<<<<<<< HEAD
=======
    customName: {
      type: [String, Array],
      default: "btn",
    },
>>>>>>> d787270fe855e8cc4a24637dfc84de2db7224d1e
    customTitle: {
      type: [String, Array],
      default: "click btn",
    },
<<<<<<< HEAD
    customName: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    changeLang() {
      this.$emit("changeLang", { Name: this.customName });
=======
    buttonType: {
      type: String,
      default: "button",
    },
  },
  methods: {
    handleAction() {
      this.$emit("btnClicked",this.customName);
>>>>>>> d787270fe855e8cc4a24637dfc84de2db7224d1e
    },
  },
};
</script>
