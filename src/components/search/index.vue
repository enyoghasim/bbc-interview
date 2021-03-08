<template>
  <div class="search-bar">
    <input
      :value="value"
      :type="inputType"
      @input="handleSearchInput"
      :name="customName"
      :class="`input-component ${customClass}`"
      :placeholder="placeHolderText"
      @keyup="handleKeyUp"
      autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  props: {
    placeHolderText: {
      type: String,
      default: "Search Your City",
    },
    inputType: {
      type: String,
      default: "search",
    },
    customName: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleSearchInput(event) {
      this.$emit("inputed", {
        newValue: event.target.value,
        nameOfInput: this.customName,
      });
    },
    handleKeyUp(event) {
      var char = event.which || event.keyCode;
      if (char === 38) {
        this.$emit("keyup", { type: "UP", name: this.customName });
      } else if (char === 40) {
        this.$emit("keyup", { type: "DOWN", name: this.customName });
      }
    },
  },
};
</script>

<style scoped>
@import "./index.css";
</style>
