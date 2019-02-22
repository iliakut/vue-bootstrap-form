<template>
  <div>
    <MainPage header="Шаг 3: Подтверди данные" :isFinalStep="true" previousRouterLink="step2">
      <h4>
        Step 3
      </h4>
    </MainPage>
  </div>
</template>

<script>
  import MainPage from '@/components/MainPage.vue'

  export default {
    name: 'step3',
    components: {
      MainPage
    }
  }
</script>
