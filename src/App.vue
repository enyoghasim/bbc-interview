<template>
  <div id="app">
    <div class="section-alert">
      <div class="text">
        YOU ARE CURRENTY BROWSING IN ENGLISH(US) : हिन्दू में अनुवाद
      </div>
      <div class="buttons">
        <button class="yes">हाँ</button>
        <button class="no">नहीं न</button>
      </div>
      <div class="eng-btn">
        <button class="leave">LEAVE IT AS ENGLISH</button>
      </div>
    </div>
    <div class="all">
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
        </div>
      </section>
    </div>
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
    data() {
      var dataFunction =
        this.language === "ENGLISH"
          ? EnglishJsonData
          : this.language === "HINDI"
          ? HindiJsonData
          : EnglishJsonData;

      return dataFunction;
    },
  },
};
</script>

<style>
@import "./styles/app.css";
</style>
