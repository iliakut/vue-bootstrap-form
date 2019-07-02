<template>
  <div>
    <skill v-for="(skill, index) in skills"
           :key="skill.name"
           :progr="skill.level"
           v-on:changeProgress="setLevel($event, index)"
           :skillName="skill.name"
           :isFinalStep="isFinalStep"/>
  </div>
</template>

<script>
  import Skill from '@/components/Skill.vue'
  import {skillsName} from "../skills.json";
  import { mapMutations } from 'vuex'

  // create localStorage skill data
  let skillsTemp = [];
  for (let i = 0; i < skillsName.length; i++) {
    skillsTemp.push({
      name: skillsName[i],
      level: 0});
  }
  localStorage["skills"] = JSON.stringify(skillsTemp);

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
        skills: []
      }
    },
    methods: {
      setLevel: function(data, index) {
        let currentSkill = this.skills[index];
        currentSkill.level = data;
        this.skills.splice(index, 1, currentSkill);
      },
      ...mapMutations(["updateSkills"])
    },
    watch: {
      skills(newSkills) {
        localStorage["skills"] = JSON.stringify(newSkills);
        this.updateSkills(newSkills);
      }
    },
    mounted() {
      if (localStorage["skills"]) {
        this.skills = JSON.parse(localStorage["skills"]);
      }
    }
  }
</script>
