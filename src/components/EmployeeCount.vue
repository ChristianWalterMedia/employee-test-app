<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    employeesCount: {
      type: Number,
    },
  },
});
</script>

<template>
  <div class="w-full lg:w-1/3 flex justify-center">
    <div class="flex flex-col text-center text-xl font-bold">
      <div class="mb-4 text-xl font-bold text-[#0c5c51]">
        Gesamtzahl der Mitarbeiter
      </div>
      <div>{{ employeesCount }}</div>
    </div>
  </div>
</template>
