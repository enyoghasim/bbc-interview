<template>
  <div class="landing-container-main">
    <div class="top-container-main">
      <div class="left-column">
        <picture class="lazyloaded">
          <source media="(min-width:650px)" srcset="https://ichef.bbci.co.uk/news/240/cpsprodpb/16C0D/production/_117479139_066071725.jpg" />
          <source media="(min-width:465px)" srcset="https://ichef.bbci.co.uk/news/240/cpsprodpb/16C0D/production/_117479139_066071725.jpg" />
          <img src="https://ichef.bbci.co.uk/news/240/cpsprodpb/16C0D/production/_117479139_066071725.jpg" alt="Demonstrators react as tear gas is fired by police during a protest against the military coup in Yangon, Myanmar, 06 March 2021" class="lazyloaded" />
        </picture>
      </div>
      <div class="right-column">
        <h2>'India mirror Kohli in their dominance'</h2>
        <p
          class="gs-c-promo-summary gel-long-primer gs-u-mt nw-c-promo-summary"
        >
          Virat Kohli's personality is driving India towards World Test
          Championship glory - and their 'final frontier' in England, writes
          Suresh Menon.
        </p>
        <SearchBox
            customName="search"
            placeHolderText="SEARCH YOUR CITY!"
            inputType="search"
            @inputed="handleInput"
          />
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
import SearchBox from "../../components/search/index";

export default {
  name: "Landing-Content",
  components: {
    Card,
    SearchBox
  },
  props: {},
};
</script>
