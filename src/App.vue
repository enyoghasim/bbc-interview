<template>
  <div id="app">
    <div class="all">
      <section class="section-left">
        <div class="image-area">
          <img class="placeholder-logo" :src="Logo" alt="logo" />
        </div>
      </section>
      <section class="language">

        <ButtonBase customTitle="English" customClass="btn-lang">
          <span class="flag-contain">
            <img src="https://media.flaticon.com/dist/min/img/flags/en.svg" width="16" height="11">
          </span>
          <span>EN</span>
        </ButtonBase>
        <ButtonBase customTitle="India" customClass="btn-lang">
          <span class="flag-contain">
            <img src="https://www.flaticon.com/svg/vstatic/svg/197/197419.svg?token=exp=1615156389~hmac=94fcefe5cec294f1b348f5bb78edf753" width="16" height="11">
          </span>
          <span>IND</span>
        </ButtonBase>

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
    <Landing />
    <Footer />
  </div>
</template>

<script>
import convertToArray from "./helpers/index.js";
import SearchBox from "./components/search/index";
import Landing from "./views/landing/index";
import Footer from "./components/footer/index";
import ButtonBase from "./components/button/index";
import Logo from "./assets/icons/bbc.logo.svg";
import EnglishJsonData from "./data/english.json";
import HindiJsonData from "./data/hindi.json";

export default {
  name: "App",
  components: {
    SearchBox,
    Landing,
    Footer,
    ButtonBase
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
