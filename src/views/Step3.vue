<template>
  <div>
    <MainPage header="Шаг 3: Подтверди данные" :isFinalStep="true">
      <h4>
        Step 3
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
