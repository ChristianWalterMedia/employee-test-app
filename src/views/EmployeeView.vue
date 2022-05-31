<script lang="ts">
import Vue from "vue";
import Employee from "@/interface/Employee";
import { EmployeesApi } from "@/api";
import GenericButton from "@/components/GenericButton.vue";
import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";
import ProgressButton from "@/components/ProgressButton.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";

declare interface ComponentData {
  employee: Employee;
  deleted: boolean;
  loading: boolean;
  error: Error;
}

export default Vue.extend({
  name: "EmployeeView",
  data(): ComponentData {
    return {
      employee: {} as Employee,
      deleted: false,
      loading: true,
      error: {} as Error,
    };
  },
  async created() {
    // get employee by passed id
    await EmployeesApi.getById(this.$route.params.id)
      .then((employee) => {
        this.employee = employee;
      })
      .catch((error) => {
        this.error = error;
      })
      .then(() => {
        this.loading = false;
      });
  },
  methods: {
    // "delete" the current employee
    deleteEmployee(): void {
      this.loading = true;
      EmployeesApi.deleteById(this.employee.id)
        .then((response) => {
          if (response.status === 200) {
            this.deleted = true;
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .then(() => {
          this.loading = false;
        });
    },
  },
  components: {
    ProgressButton,
    LeftArrowIcon,
    GenericButton,
    LoadingIndicator,
  },
});
</script>

<template>
  <div>
    <!--  Loading animation  -->
    <LoadingIndicator v-if="loading" />
    <!--  End Loading animation  -->

    <!--  Back to dashboard link  -->
    <router-link v-if="!loading" :to="{ name: 'dashboard' }">
      <h1
        class="mb-8 text-xl font-bold text-[#0c5c51] inline flex flex-row items-center"
      >
        <LeftArrowIcon class="h-3.5 inline mr-2" fillClass="fill-[#0c5c51]" />
        <span>Zurück</span>
      </h1>
    </router-link>
    <!--  End Back to dashboard link  -->

    <!--  Employee profile  -->
    <div v-if="!loading" class="flex flex-col items-center">
      <h1 v-if="!deleted" class="text-xl mb-10">
        Profil von {{ employee.name }}
      </h1>
      <h1 v-if="deleted" class="text-xl mb-10">
        {{ employee.name }} ist jetzt nicht mehr Teil des Teams!
      </h1>

      <!--  Delete Button  -->
      <GenericButton
        v-if="!deleted"
        @click="deleteEmployee"
        background-color-class="bg-[#fe5d44]"
        background-hover-color-class="hover:bg-[#f02101]"
      >
        Mitarbeiter löschen
      </GenericButton>
      <!--  End Delete Button  -->

      <!--  Back to dashboard button  -->
      <router-link v-if="deleted" :to="{ name: 'dashboard' }">
        <ProgressButton @click="deleteEmployee"
          >Zurück zum Dashboard
        </ProgressButton>
      </router-link>
      <!--  End Back to dashboard button  -->
    </div>
    <!--  End Employee profile  -->
  </div>
</template>
