<template>
  <div>
    <MainPage msg="Шаг 1: Расскажи нам о своих навыках" buttonRouterLink="step2">
      <h4>
        Step 1
      </h4>
    </MainPage>
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
