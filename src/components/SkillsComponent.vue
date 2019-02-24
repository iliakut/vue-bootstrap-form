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
  import { mapState, mapMutations } from 'vuex'
  import {skillsName} from "../skills.json";

  // create localStorage skill data
  if (!localStorage["skills"]) {
    let skillsTemp = [];
    for (let i = 0; i < skillsName.length; i++) {
      skillsTemp.push({
        name: skillsName[i],
        level: 0});
    }
    localStorage["skills"] = JSON.stringify(skillsTemp);
  }

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
      }
    },
    watch: {
      skills(newSkills) {
        localStorage["skills"] = JSON.stringify(newSkills);
      }
    },
    mounted() {
      if (localStorage["skills"]) {
        this.skills = JSON.parse(localStorage["skills"]);
      }
    }
  }
</script>
