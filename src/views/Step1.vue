<template>
  <div>
    <MainPage header="Шаг 1: Расскажи нам о своих навыках" nextRouterLink="step2">
      <div>
        <b-img src="skillLevel.PNG" fluid alt="Responsive image" />
      </div>
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
