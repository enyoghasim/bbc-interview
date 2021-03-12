<template>
  <div class="landing-container-main">
    <div class="top-container-main">
      <div class="left-column">
        <picture class="lazyloaded">
          <source media="(min-width:650px)" :srcset="data.image" />
          <source media="(min-width:465px)" :srcset="data.image" />
          <img
            :src="data.image"
            alt="Demonstrators react as tear gas is fired by police during a protest against the military coup in Yangon, Myanmar, 06 March 2021"
            class="lazyloaded"
          />
        </picture>
      </div>
      <div class="right-column">
        <h2>'{{ data.title }}'</h2>
        <p
          class="gs-c-promo-summary gel-long-primer gs-u-mt nw-c-promo-summary"
        >
          {{ data.p1 }}
        </p>
      </div>
    </div>
    <div class="content-paragraph">
      <p class="paragraph p2">{{ data.p2 }}</p>
      <p class="paragraph p3">{{ data.p3 }}</p>
      <p class="paragraph p4">{{ data.p4 }}</p>
      <p class="paragraph p5">{{ data.p5 }}</p>
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
    data: {
      type: Object,
    },
  },
};
</script>
