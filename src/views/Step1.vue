<template>
  <div>
    <MainPage header="Шаг 1: Расскажи нам о своих навыках" nextRouterLink="step2">
      <div>
        <img src="../assets/level.png" height="115" width="90%"/>
      </div>
      <b-container class="pb-4 pl-0">
        <b-row class="justify-content-center">
          <b-col md="3" class="p-0">
            <h6>Не слышал об этом</h6>
          </b-col>
          <b-col md="3" class="p-0">
            <h6>Имею представление</h6>
          </b-col>
          <b-col md="3" class="p-0">
            <h6>Умею применять</h6>
          </b-col>
          <b-col md="3" class="p-0">
            <h6>Отлично разбираюсь</h6>
          </b-col>
        </b-row>
      </b-container>
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
