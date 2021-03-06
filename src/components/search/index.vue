<template>
  <div class="search-bar">
    <input
      :type="inputType"
      @input="handleSearchInput"
      :name="customName"
      :class="`input-component ${customClass}`"
      :placeholder="placeHolderText"
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
  },
};
</script>

<style scoped>
@import "./index.css";
</style>
