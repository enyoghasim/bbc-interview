<template>
  <div class="landing-container-main">
    <div class="top-container-main">
      <div class="left-column">
        <img
          src="https://ichef.bbci.co.uk/news/240/cpsprodpb/16C0D/production/_117479139_066071725.jpg"
          class="lazyloaded"
          alt="Demonstrators react as tear gas is fired by police during a protest against the military coup in Yangon, Myanmar, 06 March 2021"
          data-src="https://ichef.bbci.co.uk/news/{width}/cpsprodpb/16C0D/production/_117479139_066071725.jpg"
        />
      </div>
      <div class="right-column">
        <h2>'India mirror Kohli in their dominance'</h2>
        <p class="gs-c-promo-summary gel-long-primer gs-u-mt nw-c-promo-summary">
          Virat Kohli's personality is driving India towards World Test
          Championship glory - and their 'final frontier' in England, writes
          Suresh Menon.
        </p>
      </div>
    </div>
    <div class="content-paragraph"></div>

    <div class="section-mother-bottom">
      <div class="inner-col card">
        <Card />
      </div>
      <div class="inner-col card">
        <Card />
      </div>
      <div class="inner-col card">
        <Card />
      </div>
      <div class="inner-col card">
        <Card />
      </div>
      <div class="inner-col card">
        <Card />
      </div>
      <div class="inner-col card">
        <Card />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./index.css";
</style>

<script>
import Card from "../../components/city-details-card/index";

export default {
  name: "Landing-Content",
  components: {
    Card,
  },
  props: {},
};
</script>
