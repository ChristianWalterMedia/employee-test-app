<script lang="ts">
import Vue from "vue";
import LogoSquareIcon from "@/components/icons/LogoSquareIcon.vue";

export default Vue.extend({
  name: "LoadingIndicator",
  components: { LogoSquareIcon },
});
</script>

<template>
  <div class="h-full flex justify-center items-center">
    <LogoSquareIcon
      class="mx-auto h-[45px] animate-[spin_5s_linear_infinite] duration-1000 ease-linear"
      fill-class="fill-[#0c5c51]"
    />
  </div>
</template>
