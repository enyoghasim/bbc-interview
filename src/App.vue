<template>
  <div id="app">
    <section class="section-left">
      <div class="image-area">
        <img class="placeholder-logo" :src="Logo" alt="logo" />
      </div>
    </section>
    <section class="section-right">
      <div class="search-box-container">
        <SearchBox
          customName="search"
          placeHolderText="SEARCH YOUR CITY!"
          inputType="search"
          @inputed="handleInput"
        />
        {{ list }}
      </div>
    </section>
  </div>
</template>

<script>
import convertToArray from "./helpers/index.js";

import SearchBox from "./components/search/index";

import Logo from "./assets/icons/bbc.logo.svg";

import EnglishJsonData from "./data/english.json";

import HindiJsonData from "./data/hindi.json";

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
      language: "ENGLISH",
      Logo,
      EnglishJsonData,
      HindiJsonData,
    };
  },
  computed: {
    list() {
      var listFunction =
        this.language === "ENGLISH"
          ? convertToArray(EnglishJsonData)
          : this.language === "HINDI"
          ? convertToArray(HindiJsonData)
          : convertToArray(EnglishJsonData);
      return listFunction;
    },
  },
};
</script>

<style>
@import "./styles/app.css";
</style>
