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
        <b-card-body>
          <router-view></router-view>
        </b-card-body>

      </b-card>
  </div>
</template>

<script>
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
      }
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

