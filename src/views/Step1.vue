<template>
  <div>
    <MainPage header="Шаг 1: Расскажи нам о своих навыках" nextRouterLink="step2">
      <skill/>
    </MainPage>
  </div>
</template>

<script>
  import MainPage from '@/components/MainPage.vue'
  import Skill from '@/components/Skill.vue'

  export default {
    name: 'step1',
    components: {
      MainPage,
      Skill
    }
  }
</script>
