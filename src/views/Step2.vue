<template>
  <div>
    <MainPage header="Шаг 2: Расскажи о себе" nextRouterLink="step3" previousRouterLink="/">
      <h4>
        Step 2
      </h4>
    </MainPage>
  </div>
</template>

<script>
  import MainPage from '@/components/MainPage.vue'

  export default {
    name: 'step2',
    components: {
      MainPage
    }
  }
</script>
