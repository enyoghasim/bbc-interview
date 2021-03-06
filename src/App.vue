<template>
  <div id="app">
    <div class="search-box-container">
      <SearchBox
        customName="search"
        placeHolderText="SEARCH YOUR CITY!"
        inputType="search"
        @inputed="handleInput"
      />
    </div>
  </div>
</template>

<script>
import SearchBox from "./components/search/index";

export default {
  name: "App",
  components: {
    SearchBox,
  },
  methods: {
    handleInput(event) {
      this.inputText = event.newValue;
    },
  },
  data() {
    return {
      inputText: "",
    };
  },
};
</script>

<style>
@import "./app.css";
</style>
