<template>
  <div>
    <h1>Step1</h1>
    <MainPage msg="Welcome to Your Vue.js App"/>
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
