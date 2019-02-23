<template>
  <div>
    <MainPage header="Шаг 3: Подтверди данные" :isFinalStep="true" previousRouterLink="step2">
      <SkillsComponent :isFinalStep="true"/>
    </MainPage>
  </div>
</template>

<script>
  import MainPage from '@/components/MainPage.vue'
  import SkillsComponent from '@/components/SkillsComponent.vue'

  export default {
    name: 'step3',
    components: {
      MainPage,
      SkillsComponent
    }
  }
</script>
