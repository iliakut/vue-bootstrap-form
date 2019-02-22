<template>
    <div>
      <b-media vertical-align="center">
        <h3>{{ header }}</h3>
        <slot>
          <h4>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </h4>
        </slot>
        <router-link :to="previousRouterLink">Back</router-link>
        <b-button v-if="!finalStep" :to="nextRouterLink" variant="primary" size="lg" @click="toFinalPage">Продолжить</b-button>
        <b-button v-else href="#" variant="primary" size="lg">Отправить</b-button>
      </b-media>
    </div>
</template>

<script>
import BButton from "bootstrap-vue/src/components/button/button";
export default {
  name: 'MainPage',
  components: {BButton},
  props: {
    header: String,
    isFinalStep: {
      type: Boolean,
      default: false
    },
    nextRouterLink: String,
    previousRouterLink: String,
  },
  data() {
    return {
      finalStep: false
    }
  },
  methods: {
    toFinalPage: function() {
      if(this.isFinalStep) {
        this.finalStep = true
      }
    }
  }
}
</script>

<style scoped>

</style>
