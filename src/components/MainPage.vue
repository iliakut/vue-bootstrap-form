<template>
    <div>
      <b-media vertical-align="center">
        <h3>{{ header }}</h3>
        <slot>
        </slot>
        <b-container>
          <b-row>
            <b-col md="4">
              <router-link v-if="previousRouterLink !== undefined" :to="previousRouterLink">Назад</router-link>
            </b-col>
            <b-col md="4" offset-md="0">
              <b-button v-if="!finalStep" :to="nextRouterLink" variant="primary" size="lg" @click="toFinalPage">Продолжить</b-button>
              <b-button v-else @click="sendToServer" variant="primary" size="lg">Отправить</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-media>
    </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex'

  export default {
    name: 'MainPage',
    props: {
      header: String,
      text: String,
      isFinalStep: {
        type: Boolean,
        default: false
      },
      nextRouterLink: String,
      previousRouterLink: {
        type: String
      },
    },
    data() {
      return {
        finalStep: false
      }
    },
    computed: {
      numberOfSymbols: function() {
        return this.text.length;
      }
    },
    methods: {
      toFinalPage: function() {
        if(this.isFinalStep) {
          this.finalStep = true
       }
      },
      ...mapActions(["sendToServer"]),
      ...mapMutations(["updateStateAbout"])
    },
    watch: {
      text: function() {
        this.updateStateAbout({text: this.text, len: this.numberOfSymbols})
      }
    }
}
</script>

<style scoped>

</style>
