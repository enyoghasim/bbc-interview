<template>
  <div class="landing-container-main">
    <div class="top-container-main">
      <div class="left-column">
        <img
          src="https://news.files.bbci.co.uk/vj/live/idt-images/image-slider-hello/SMOG_vdyw4.jpg"
          class="lazyloaded"
          alt="Demonstrators react as tear gas is fired by police during a protest against the military coup in Yangon, Myanmar, 06 March 2021"
          data-src="https://ichef.bbci.co.uk/news/{width}/cpsprodpb/16C0D/production/_117479139_066071725.jpg"
        />
      </div>
      <div class="right-column">
        <h2>'{{ title }}'</h2>
        <p
          class="gs-c-promo-summary gel-long-primer gs-u-mt nw-c-promo-summary"
        >
          {{ p1 }}
        </p>
      </div>
    </div>
    <div class="content-paragraph">
      <p class="paragraph p2">{{ p2 }}</p>
      <p class="paragraph p3">{{ p3 }}</p>
      <p class="paragraph p4">{{ p4 }}</p>
      <p class="paragraph p5">{{ p5 }}</p>
    </div>

    <!-- <div class="section-mother-bottom">
      <div class="inner-col card">
        <Card :p7="p7" />
      </div>
    </div> -->
  </div>
</template>

<style scoped>
@import "./index.css";
</style>

<script>
// import Card from "../../components/city-details-card/index";

export default {
  name: "Landing-Content",
  components: {
    // Card,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    p1: {
      type: String,
      default: "",
    },
    p2: {
      type: String,
      default: "",
    },
    p3: {
      type: String,
      default: "",
    },
    p4: {
      type: String,
      default: "",
    },
    p5: {
      type: String,
      default: "",
    },
    p7: {
      type: String,
      default: "",
    },
  },
};
</script>
