<template>
  <button
    :title="customTitle"
    :type="buttonType"
    :name="customName"
    @click="handleAction"
    :class="customClass"
  >
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
    customName: {
      type: [String, Array],
      default: "btn",
    },
    customTitle: {
      type: [String, Array],
      default: "click btn",
    },
    buttonType: {
      type: String,
      default: "button",
    },
  },
  methods: {
    handleAction() {
      this.$emit("btnClicked",this.customName);
    },
  },
};
</script>