<template>
  <div>
    <skill :progr="progress" v-on:changeProgress="setProgress($event)" :isFinalStep="isFinalStep"/>
  </div>
</template>

<script>
  import Skill from '@/components/Skill.vue'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'SkillsComponent',
    props: {
      isFinalStep: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Skill
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState(["progress"])
    },
    methods: {
      ...mapMutations(["setProgress"])
    }
  }
</script>
