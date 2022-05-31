<script lang="ts">
import Vue from "vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import HorizontalDivider from "@/components/HorizontalDivider.vue";
import FooterLayout from "@/components/FooterLayout.vue";

declare interface ComponentData {
  windowWidth: number;
}

export default Vue.extend({
  data(): ComponentData {
    return {
      windowWidth: window.innerWidth,
    };
  },
  components: { HorizontalDivider, LogoIcon, FooterLayout },
});
</script>

<template>
  <div class="h-full flex flex-col">
    <header class="relative mb-8">
      <div class="relative z-10">
        <div class="container mx-auto p-5">
          <LogoIcon class="h-[32px]" />
        </div>
      </div>
      <HorizontalDivider class="absolute top-0 left-0 z-0" />
    </header>
    <router-view class="container mx-auto grow p-4" />
    <FooterLayout />
  </div>
</template>
