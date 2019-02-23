<template>
  <div class="m-4">
    <b-container class="border-bottom">
      <b-row align-h="between" class="pb-2">
        <b-col md="5">
          <div class="text-left">
            <h5 class="mb-0">HTML верстка</h5>
            <h6 v-if="!isFinalStep" class="text-secondary">{{ skillsText[progress] }}</h6>
          </div>
        </b-col>
        <b-col md="5">
          <b-row v-if="!isFinalStep">
            <b-col md="1" class="pr-0 pl-0 mr-3">
              <svg @click="removePoint" :style="{fill: removeColor}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </b-col>
            <b-col md="8" class="pr-0 pl-0">
              <b-progress class="mt-2" :max="100">
              <b-progress-bar v-if="progress > 0" :value="counter*(1/3)" class="progress-color"/>
              <b-progress-bar :value="1" variant="light"/>
              <b-progress-bar v-if="progress > 1" :value="counter*(1/3)" class="progress-color"/>
              <b-progress-bar :value="1" variant="light"/>
              <b-progress-bar v-if="progress > 2" :value="counter*(1/3)" class="progress-color"/>
            </b-progress>
            </b-col>
            <b-col md="1" class="pr-0 pl-0 ml-2">
              <svg @click="addPoint" :style="{fill: addColor}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </b-col>
          </b-row>
          <h5 v-else class="text-secondary">{{ skillsText[progress] }}</h5>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "Skill",
    props: {
      skillName: String,
      isFinalStep: {
        type: Boolean,
        default: false
      },
      progr: Number
    },
    data() {
      return {
        counter: 98,
        addColor: "grey",
        removeColor: "grey",
        progress: this.progr,
        skillsText: [
          "Не слышал об этом",
          "Имею представление",
          "Умею применять",
          "Отлично разбираюсь"]
      };
    },
    methods: {
      addPoint: function() {
        if(this.progress < 3) {
          this.progress++;
          this.$emit('changeProgress', this.progress);
        }
      },
      removePoint: function() {
        if (this.progress > 0) {
          this.progress--;
          this.$emit('changeProgress', this.progress);
        }
      },
      toggleSvgClass: function() {
        if (this.progress > 0 && this.progress < 3) {
          this.addColor = "grey";
          this.removeColor = "grey"
        } else if (this.progress === 0) {
          this.removeColor = "lightGray";
        } else if (this.progress === 3) {
          this.addColor = "lightGray"
        }
      }
    },
    watch: {
      progress: function() {
        this.toggleSvgClass();
      }
    },
    created: function() {
      this.toggleSvgClass();
    }
  }
</script>

<style scoped>
  .progress-color {
    background-color: #18b396;
  }
  svg {
    cursor: pointer;
  }
</style>