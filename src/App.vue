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

      <Landing
        :p1="hive.p1"
        :p2="hive.p2"
        :p3="hive.p3"
        :p4="hive.p4"
        :p5="hive.p5"
        :p7="hive.p7"
        :title="data.hero_1_title"
      />
      <section class="section-right">
        <div class="search-box-container">
          <SearchBox
            @keyup="moveCursor"
            :value="inputText"
            customName="search"
            :placeHolderText="hive.placeholder"
            inputType="search"
            @inputed="handleInput"
          />
          <div v-show="isOpen" class="suggestion">
            <li
              :ref="currentActive === index ? 'active' : ''"
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
        <div class="cigg">
          <div v-show="!detailsOn">
            YOU HAVE NO YET SELECTED ANY CITY
          </div>
          <div class="city-dit" v-show="detailsOn">
            <div class="lome">
              <span class="close" @click="closeAll">x</span>
            </div>
            <table class="tab">
              <tr>
                <th>CITY NAME</th>
                <th>AIR QUALITY</th>
                <th>NO OF CIGGERATES</th>
              </tr>
              <tr>
                <td>{{ cityDetails[0].name }}</td>
                <td>{{ cityDetails[0].aqi }}</td>
                <td>{{ cityDetails[0].cigg }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="fotter-text">
<p class="paragraph p6">{{hive.p6 }}</p>
<p class="paragraph p7">{{ hive.p7 }}</p>
<p class="paragraph p8">{{ hive.p8 }}</p>
<p class="paragraph p9">{{ hive.p9 }}</p>
<p class="paragraph p10">{{ hive.p10 }}</p>
        </div>
      </section>
      <Footer />
    </div>
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
    hive() {
      return {
        placeholder: this.data["compare-tabs_1_title"],
        p1: this.data["p_1_value"],
        p2: this.data["p_2_value"],
        p3: this.data["p_3_value"],
        p4: this.data["p_4_value"],
        p5: this.data["p_5_value"],
        p6: this.data["p_6_value"],
        p7: this.data["p_7_value"],
        p8: this.data["p_8_value"],
        p9: this.data["p_9_value"],
        p10: this.data["p_10_value"],
      };
    },
  },
};
</script>

<style>
@import "./styles/app.css";
</style>
