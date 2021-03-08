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
          @changeLang="changeLanguage"
          customName="english"
          customTitle="English"
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
          @changeLang="changeLanguage"
          customName="hindi"
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
      <section class="section-right">
        <div class="search-box-container">
          <SearchBox
          @keyup="moveCursor"
            :value="inputText"
            customName="search"
            placeHolderText="SEARCH YOUR CITY!"
            inputType="search"
            @inputed="handleInput"
          />
          <div v-show="isOpen" class="suggestion">
            <li
              class="list-item"
              :class="currentActive === index ? 'active' : ''"
              v-for="(item, index) in search"
              :key="index"
              :word="item.name"
              @click="addAndClose(item.name)"
            >
              {{ item.name }}
            </li>
          </div>
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
    ButtonBase,
  },
  methods: {
    moveCursor(event){
      switch (event.type) {
        case "UP":
          if(this.currentActive === 0){
            this.currentActive === this.list.length - 1;
          }else{
            this.currentActive ++;
          }
         break;
         case "DOWN":
          if(this.currentActive === this.list.length - 1){
            this.currentActive === 0;
          }else{
            this.currentActive --;
          }
          break;
      
        default:
          break;
      }

    },
    handleInput(event) {
      this.isOpen = true;
      this.inputText = event.newValue;
    },
    addAndClose(event) {
      this.inputText = event;
      this.isOpen = false;
    },
    changeLanguage(event) {
      switch (event.Name) {
        case "english":
          this.language = "ENGLISH";
          break;
        case "hindi":
          this.language = "HINDI";
          break;
        default:
          break;
      }
    },
  },
  data() {
    return {
      isOpen: true,
      currentActive: 0,
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
    search() {
      var maped =
        this.inputText.length > 0
          ? this.list.filter((e) => {
              return e.name
                .toLowerCase()
                .includes(this.inputText.toLowerCase());
            })
          : [];
      return maped;
    },
  },
};
</script>

<style>
@import "./styles/app.css";
</style>
