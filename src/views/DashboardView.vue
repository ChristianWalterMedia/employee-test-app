<script lang="ts">
import Vue from "vue";
import Employee from "@/interface/Employee";
import { EmployeesApi } from "@/api";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import EmployeeCard from "@/components/EmployeeCard.vue";
import EmployeeCount from "@/components/EmployeeCount.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

declare interface ComponentData {
  loading: boolean;
  employees: Employee[];
  error: Error;
}

export default Vue.extend({
  name: "HomeView",
  data(): ComponentData {
    return {
      loading: true,
      employees: [] as Employee[],
      error: {} as Error,
    };
  },
  methods: {
    // Get all employees
    async retrieveEmployees(): Promise<void> {
      EmployeesApi.getAll()
        .then((employees) => {
          this.employees = employees;
        })
        .catch((error: Error) => {
          this.error = error;
        })
        .then(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    // Is everything ready to display
    showElements(): boolean {
      return !!this.employees.length && !this.isError;
    },
    // Are Errors available
    isError(): boolean {
      return !!Object.keys(this.error).length;
    },
  },
  mounted() {
    this.retrieveEmployees();
  },
  components: { ErrorMessage, EmployeeCount, EmployeeCard, LoadingIndicator },
});
</script>

<template>
  <div>
    <!--  Loading animation  -->
    <LoadingIndicator v-if="loading" />
    <!--  End Loading animation  -->
    <template v-if="showElements">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-2/3 mr-10">
          <h1 class="mb-8 text-xl font-bold text-[#0c5c51]">
            Alle Mitarbeiter
          </h1>
          <!--  For each employee render a Employee Card wrapped in a link  -->
          <router-link
            :key="employee.id"
            v-for="employee in employees"
            :to="{
              name: 'employee',
              params: { id: employee.id },
            }"
          >
            <EmployeeCard :employee="employee" />
          </router-link>
          <!--  End For each employee render a Employee Card wrapped in a link  -->
        </div>
        <!--  Employee amount  -->
        <EmployeeCount :employees-count="employees.length" />
        <!--  End Employee amount  -->
      </div>
    </template>
    <!--  Show error message if an error occurs  -->
    <ErrorMessage v-if="isError" :error-message="error.message" />
    <!--  End Show error message if an error occurs  -->
  </div>
</template>
