<template>
  <div id="app">
      <b-card
          align="center"
          class="margin-card"
          header-bg-variant="white">
        <div slot="header">
          <h1 class="font-weight-bold ">Вступительное испытание</h1>
          <b-nav pills>
            <b-nav-item active to="/">Шаг 1</b-nav-item>
            <b-nav-item to="/Step2">Шаг 2</b-nav-item>
            <b-nav-item to="/Step3">Шаг 3</b-nav-item>
          </b-nav>
        </div>
        <router-view></router-view>
      </b-card>
  </div>
</template>

<script>
  import BCard from "bootstrap-vue/es/components/card/card";
  import BNavItem from "bootstrap-vue/es/components/nav/nav-item";
  import BNav from "bootstrap-vue/es/components/nav/nav";

  export default {
    name: "App",
    components: {BCard, BNavItem, BNav},
    data() {
      return {
      };
    }
  };
</script>

<style>
  body {
    background-color: #303142 !important;
  }
  .margin-card {
    margin: 10%;
  }
</style>

