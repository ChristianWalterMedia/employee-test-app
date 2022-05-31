<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    fillClass: {
      type: String,
      default: "fill-[#0c5c51]",
    },
  },
});
</script>

<template>
  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 583 418"
    width="583"
    height="418"
  >
    <path
      fill-rule="evenodd"
      d="m98 0h315.3c-15.7 37.4-67 135.8-190.4 193-36.6-38.4-83.7-76.5-144.3-110.1zm-55.2 235.2l31.8-135.5c22.9 10.8 79 41.3 130.1 101.3-44.8 18.2-98.2 31-161.9 34.2zm540.2-235.2l-97 418h-140.6c-7.7-36.7-28-103.7-80.7-175.2 73.6-50.8 139.8-127.4 178.3-242.8zm-583 418l19.6-83.7c66.1-9.4 148.2-30.9 224.7-78.1 25.7 43.2 46.5 96.5 55.7 161.8z"
      :fill="fillClass"
    />
  </svg>
</template>
