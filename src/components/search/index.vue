<template>
  <div class="search-bar">
    <input
      :type="inputType"
      @input="handleSearchInput"
      :name="customName"
      :class="`input-component ${customClass}`"
      :placeholder="placeHolderText"
      @keyup="handleKeyup"
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
        this.$emit("KEYUPP", { type: "UP", name: this.customName });
      } else if (char === 40) {
        this.$emit("KEYUPP", { type: "DOWN", name: this.customName });
      }
    },
  },
};
</script>

<style scoped>
@import "./index.css";
</style>
