<template>
  <div>
    <MainPage header="Шаг 2: Расскажи о себе"
              nextRouterLink="step3"
              previousRouterLink="/"
              :text="text">
      <b-form-textarea
        id="textarea1"
        v-model="text"
        placeholder="Немного обо мне"
        rows="15"
        max-rows="15"
        class="mt-4 mb-4"
      />
    </MainPage>
  </div>
</template>

<script>
  import MainPage from '@/components/MainPage.vue'
  // create localStorage text data
  if (!localStorage["text"]) {
    localStorage["text"] = "";
  }

  export default {
    name: 'step2',
    components: {
      MainPage
    },
    data() {
      return {
        text: ""
      }
    },
    watch: {
      text(newText) {
        localStorage["text"] = newText;
      }
    },
    mounted() {
      if (localStorage["text"]) {
        this.text = localStorage["text"];
      }
    }
  }
</script>
