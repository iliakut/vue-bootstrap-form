<template>
  <div id="app">
    <b-card align="center"
              class="margin-card"
              header-bg-variant="white">
          <div slot="header">
            <h2 class="font-weight-bold p-4">Вступительное испытание</h2>
            <b-nav pills class="p-2">
              <b-container>
                <b-row class="justify-content-center">
                  <b-col v-for="step in stepsContent"
                         :key="step.stepNumber"
                         sm="auto">
                    <b-col>
                      <b-nav-item :active="currentRoute === step.link"
                                  :to="step.link">
                        шаг {{ step.stepNumber }}
                      </b-nav-item>
                    </b-col>
                  </b-col>
                </b-row>
              </b-container>
            </b-nav>
          </div>
        <b-card-body class="pl-0 pr-0 ml-0">
          <router-view></router-view>
        </b-card-body>

      </b-card>
    <div v-if="pending !== 0" class="text-center m-5">
      <h2 v-if="pending === 1"><b-badge class="success-color">Отправлено</b-badge></h2>
      <h2 v-if="pending === 2"><b-badge variant="primary">Отправляем</b-badge></h2>
      <h2 v-if="pending === 3"><b-badge variant="danger">Ошибка отправки</b-badge></h2>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "App",
    data() {
      return {
        stepsContent: [
          {stepNumber: 1,
          link: "/"},
          {stepNumber: 2,
            link: "/step2"},
          {stepNumber: 3,
            link: "/step3"}
        ],
        activeStep: 0
      };
    },
    methods: {},
    computed: {
      currentRoute: function() {
        return this.$route.path
      },
      ...mapState(["pending"])
    }
  };
</script>

<style>
  body {
    background-color: #303142 !important;
  }
  .margin-card {
    margin:10% 15% 1% 15%;
  }
  @media screen and (max-width: 1200px) {
    .margin-card {
      margin:10% 10% 1% 10%;
    }
  }
  @media screen and (max-width: 800px) {
    .margin-card {
      margin:10% 5% 1% 5%;
    }
  }
  @media screen and (max-width: 600px) {
    .margin-card {
      margin:10% 1% 1% 1%;
    }
  }
  .success-color {
    background: #18b396 !important;
  }
</style>

