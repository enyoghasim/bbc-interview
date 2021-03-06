<template>
  <div id="app">
    <div class="section-left">
      <div class="image-area">
        <img class="placeholder-logo" :src="Logo" alt="logo" />
      </div>
    </div>
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

import Logo from "./assets/icons/bbc.logo.svg";

import JsonData from "./data/english.json";

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
      Logo,
      JsonData,
    };
  },
};
</script>

<style>
@import "./styles/app.css";
</style>
