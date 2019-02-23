<template>
  <div>
    <MainPage header="Шаг 1: Расскажи нам о своих навыках" nextRouterLink="step2">
      <SkillsComponent/>
    </MainPage>
  </div>
</template>

<script>
  import MainPage from '@/components/MainPage.vue'
  import SkillsComponent from '@/components/SkillsComponent.vue'

  export default {
    name: 'step1',
    components: {
      MainPage,
      SkillsComponent
    },
    data() {
      return {
      }
    }
  }
</script>
