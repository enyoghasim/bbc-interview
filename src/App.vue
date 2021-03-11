<template>
  <div id="app">
    <div class="all">
      <section class="section-left">
        <div class="image-area">
          <img class="placeholder-logo" :src="Logo" alt="logo" />
        </div>
      </section>
      <section class="language">
        <ButtonBase
          @btnClicked="setEvent"
          customTitle="English"
          :customName="lang.eng"
          customClass="btn-lang"
        >
          <span class="flag-contain">
            <img
              src="https://media.flaticon.com/dist/min/img/flags/en.svg"
              width="16"
              height="11"
            />
          </span>
          <span>EN</span>
        </ButtonBase>
        <ButtonBase
          @btnClicked="setEvent"
          :customName="lang.ind"
          customTitle="India"
          customClass="btn-lang"
        >
          <span class="flag-contain">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/197/197419.svg?token=exp=1615156389~hmac=94fcefe5cec294f1b348f5bb78edf753"
              width="16"
              height="11"
            />
          </span>
          <span>IND</span>
        </ButtonBase>
      </section>
    </div>
    <Landing />
    <Footer />
  </div>
</template>

<script>
import convertToArray from "./helpers/index.js";
import Landing from "./views/landing/index";
import Footer from "./components/footer/index";
import ButtonBase from "./components/button/index";
import Logo from "./assets/icons/bbc.logo.svg";
import { EnglishJsonData } from "./language/en-data.js";
import HindiJsonData from "./data/hindi.json";

export default {
  name: "App",
  components: {
    Landing,
    Footer,
    ButtonBase,
  },
  methods: {
    handleInput(event) {
      this.inputText = event.newValue;
    },
    setEvent(lang) {
      this.eventLang = lang;
      console.log(this.eventLang);
      switch (this.eventLang) {
        case lang.eng:
          this.int8n = EnglishJsonData;
          console.log("english here", EnglishJsonData);
          break;
        case lang.ind:
          this.int8n = HindiJsonData;
          console.log(JSON.stringify(this.int8n));
          break;
      }
    },
  },
  data() {
    return {
      inputText: "",
      int8n: "",
      eventLang: "",
      lang: {
        eng: "ENG",
        ind: "IND",
      },
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
