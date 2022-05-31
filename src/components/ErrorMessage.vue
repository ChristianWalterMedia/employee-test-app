<script lang="ts">
import Vue from "vue";
import GenericButton from "@/components/GenericButton.vue";

export default Vue.extend({
  props: {
    errorMessage: {
      type: String,
      default: "Ein Fehler ist aufgetreten.",
    },
  },
  methods: {
    reloadPage(): void {
      window.location.reload();
    },
  },
  components: {
    GenericButton,
  },
});
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div
      class="bg-red-100 rounded-lg p-6 m-4 text-base text-red-700 w-full md:w-4/5 lg:w-3/5 flex flex-col md:flex-row md:justify-between"
      role="alert"
    >
      <div class="mb-4">
        <h1 class="text-xl font-DINNextBold mb-3">
          Ein Fehler ist aufgetreten!
        </h1>
        <h3><strong>Error Message:</strong> {{ errorMessage }}</h3>
      </div>
      <GenericButton @click="reloadPage" class="self-center">
        Seite aktualisieren
      </GenericButton>
    </div>
  </div>
</template>
