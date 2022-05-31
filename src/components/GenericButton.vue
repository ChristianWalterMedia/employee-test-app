<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    backgroundColorClass: {
      type: String,
      default: "bg-[#0c5c51]",
    },
    backgroundHoverColorClass: {
      type: String,
      default: "hover:bg-[#083e36]",
    },
    textColorClass: {
      type: String,
      default: "text-white",
    },
  },
});
</script>

<template>
  <!--  Pass the @click as an event to the parent  -->
  <button
    @click="$emit('click')"
    class="appearance-none px-4 text-white py-3 rounded-sm active:text-opacity-80 transition-all"
    :class="[backgroundColorClass, backgroundHoverColorClass, textColorClass]"
  >
    <slot />
  </button>
</template>
