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

      <LandingContent :data="hive">
        <section class="section-right">
          <div class="search-box-container">
            <SearchBox
              @keyup="moveCursor"
              :value="inputText"
              customName="search"
              :placeHolderText="hive.placeholder"
              inputType="search"
              @inputed="handleInput"
              :search="search"
              :isOpen="isOpen"
              :currentActive="currentActive"
              @addAndClose="addClose"
            />
          </div>
          <div class="cigg">
            <div v-show="!detailsOn" class="warning">
              <div>{{ warning }}</div>
              <div class="help-cont">
                <Help :titleText="`JUST TYPE YOUR CITY INTO THE SEARCH BOX`" />
              </div>
            </div>
            <div class="city-dit" v-show="detailsOn">
              <CityDetails :cityDetails="cityDetails" @closeAll="closeAll" />
            </div>
          </div>
          <div class="fotter-text">
            <p class="paragraph p6">{{ hive.p6 }}</p>
            <p class="paragraph p7">{{ hive.p7 }}</p>
            <p class="paragraph p8">{{ hive.p8 }}</p>
            <p class="paragraph p9">{{ hive.p9 }}</p>
            <p class="paragraph p10">{{ hive.p10 }}</p>
          </div>
        </section>
      </LandingContent>
      <Footer
        :fotterTitle="
          isEnglish()
            ? customJson.fotterTitle.english
            : customJson.fotterTitle.hindi
        "
        :fotter1="
          isEnglish()
            ? customJson.fotterTextOne.english
            : customJson.fotterTextOne.hindi
        "
        :fotter2="
          isEnglish()
            ? customJson.fotterTextTwo.english
            : customJson.fotterTextTwo.hindi
        "
        :fotter3="
          isEnglish()
            ? customJson.fotterTextThree.english
            : customJson.fotterTextThree.hindi
        "
      />
    </div>
  </div>
</template>

<script>
import { convertToArray, getParagraphs } from "./helpers/index.js";
import LandingContent from "./views/landing/index";
import Footer from "./components/footer/index";
import ButtonBase from "./components/button/index";
import Logo from "./assets/icons/bbc.logo.svg";
import EnglishJsonData from "./data/english.json";
import HindiJsonData from "./data/hindi.json";
import customJson from "./data/customlang.json";
import SearchBox from "./components/search/index";
import CityDetails from "./components/city-details-card/index";
import Help from "./components/help/index";

export default {
  name: "App",
  components: {
    LandingContent,
    Footer,
    ButtonBase,
    SearchBox,
    CityDetails,
    Help,
  },
  methods: {
    isEnglish() {
      if (this.language === "ENGLISH") {
        return true;
      } else {
        return false;
      }
    },
    addClose(e) {
      this.addAndClose(e);
    },
    closeAll() {
      this.detailsOn = false;
      this.cityDetails = [{ name: "", aqi: "", cigg: "" }];
    },
    getCityDetails(text) {
      this.cityDetails = this.list.filter((city) => {
        return city.name.toLowerCase().includes(text.toLowerCase());
      });
      this.detailsOn = true;
    },
    moveCursor(event) {
      switch (event.type) {
        case "UP":
          if (this.currentActive === 0) {
            this.currentActive = this.search.length - 1;
          } else {
            this.currentActive--;
          }
          break;
        case "DOWN":
          if (this.currentActive === this.search.length - 1) {
            this.resetCurrentActive();
          } else {
            this.currentActive++;
          }
          break;
        case "ENTER":
          this.addAndClose(this.search[this.currentActive].name);
          break;

        default:
          break;
      }
    },
    resetCurrentActive() {
      this.currentActive = 0;
    },
    handleInput(event) {
      this.isOpen = true;
      this.inputText = event.newValue;
      this.resetCurrentActive();
    },
    addAndClose(event) {
      this.inputText = event;
      this.isOpen = false;
      this.resetCurrentActive();
      this.getCityDetails(event);
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
      cityDetails: [{ name: "", aqi: "", cigg: "" }],
      detailsOn: false,
      isOpen: false,
      currentActive: 0,
      inputText: "",
      language: "ENGLISH",
      Logo,
      EnglishJsonData,
      HindiJsonData,
      customJson,
    };
  },
  computed: {
    list() {
      var listFunction = this.isEnglish()
        ? convertToArray(EnglishJsonData)
        : !this.isEnglish()
        ? convertToArray(HindiJsonData)
        : convertToArray(EnglishJsonData);
      return listFunction;
    },
    data() {
      var dataFunction = this.isEnglish()
        ? EnglishJsonData
        : !this.isEnglish()
        ? HindiJsonData
        : EnglishJsonData;

      return dataFunction;
    },
    warning() {
      return this.isEnglish()
        ? customJson.placeholder.english
        : customJson.placeholder.hindi;
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

    hive() {
      var paragraphs = getParagraphs(this.data);
      return {
        ...paragraphs,
        compareTabs: this.data["compare-tabs_1_method"],
        image: this.data["hero_1_image"],
        placeholder: this.data["compare-tabs_1_title"],
        title: this.data["hero_1_title"],
        author: this.data["article-info_1_byline"],
        createdOn: this.data["article-info_1_date"],
        country: this.data["article-info_1_category"],
        articleUrl: this.data["article-info_1_category_url"],
      };
    },
  },
};
</script>

<style>
@import "./styles/app.css";
</style>
