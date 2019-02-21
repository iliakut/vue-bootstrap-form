<template>
  <div>
    <h1>Step2</h1>
    <MainPage msg="Welcome to Your Vue.js App"></MainPage>
  </div>
</template>

<script>
  import MainPage from '@/components/MainPage.vue'

  export default {
    name: 'home',
    components: {
      MainPage
    }
  }
</script>
