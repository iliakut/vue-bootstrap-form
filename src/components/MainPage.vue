<template>
    <div>
      <b-media vertical-align="center">
        <span>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </span>
          <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-media>
    </div>
</template>

<script>
import BMedia from "bootstrap-vue/src/components/media/media";
export default {
  name: 'MainPage',
  components: {BMedia},
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
