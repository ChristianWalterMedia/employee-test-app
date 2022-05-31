<script lang="ts">
import Vue from "vue";
import GenericButton from "@/components/GenericButton.vue";

declare interface ComponentData {
  startAnimation: boolean;
  leftView: boolean;
}

export default Vue.extend({
  data(): ComponentData {
    return {
      startAnimation: false,
      leftView: false,
    };
  },
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    // When component gets mounted, set the startAnimation flag to true,
    // so the class is being applied to the progressbar inside the button
    this.startAnimation = true;
    // When component gets mounted, start the timer for the redirect
    this.startRedirectTimer(10);
  },
  methods: {
    startRedirectTimer(seconds: number): void {
      let milliseconds = seconds * 1000;
      setTimeout(() => {
        // When leftView flag is false, the redirect is not executed after the timeout
        if (!this.leftView) {
          this.$router.push({ name: "dashboard" });
        }
      }, milliseconds);
    },
  },
  beforeDestroy(): void {
    // When the user has left the page, the leftView flag is set to true,
    // so that the timeout does not trigger redirection
    this.leftView = true;
  },
  components: {
    GenericButton,
  },
});
</script>

<template>
  <div class="relative rounded-sm bg-black overflow-hidden">
    <div class="w-full h-1 absolute top-0 left-0">
      <!--  Progressbar, which starts animating, when the component is mounted  -->
      <!--  Initially, the progress bar is shifted to the left via translate.
      Within the animation, it moves to the right.  -->
      <div
        class="w-full translate-x-[-100%] bg-[#fe5d44] h-full transition-all duration-[10000ms] ease-linear"
        :class="{ progressAnimation: startAnimation }"
      ></div>
    </div>
    <!--  Generic button passes the slot-content of itself  -->
    <GenericButton>
      <slot />
    </GenericButton>
  </div>
</template>

<style scoped>
.progressAnimation {
  animation: progressAnimation 10s linear forwards;
  animation-iteration-count: 1;
}

@keyframes progressAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
