<template>
    <div>
      <b-media vertical-align="center">
        <h3>{{ msg }}</h3>
        <slot>
          <h4>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </h4>
        </slot>
        <b-button :to="buttonRouterLink" variant="primary" size="lg">Продолжить</b-button>
        <b-button href="#" variant="primary" size="lg">Отправить</b-button>
      </b-media>
    </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String,
    isFinalStep: {
      type: Boolean,
      default: false
    },
    buttonRouterLink: String
  }
}
</script>

<style scoped>

</style>
