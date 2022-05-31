<script lang="ts">
import Vue from "vue";
import Employee from "@/interface/Employee";

export default Vue.extend({
  props: {
    employee: {
      type: Object as () => Employee,
    },
  },
});
</script>

<template>
  <div
    class="w-full border-t-4 border-[#0c5c51] shadow-lg hover:shadow transition-shadow duration-200 p-8 bg-white rounded mb-4 grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-2"
  >
    <div class="order-1 md:order-1 font-bold overflow-hidden overflow-ellipsis">
      {{ employee.name }}
    </div>
    <div
      class="order-3 md:order-2 md:text-center overflow-hidden overflow-ellipsis"
    >
      {{ employee.username }}
    </div>
    <div class="order-2 md:order-4 md:col-start-3 md:text-right">
      <span class="hidden md:block overflow-hidden overflow-ellipsis">{{
        employee.website
      }}</span>
    </div>
    <div
      class="order-3 md:order-3 text-right overflow-hidden overflow-ellipsis"
    >
      {{ employee.email }}
    </div>
  </div>
</template>
