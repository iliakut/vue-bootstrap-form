<template>
  <div>
    <MainPage msg="Шаг 2: Расскажи о себе" buttonRouterLink="step3">
      <h4>
        Step 2
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
