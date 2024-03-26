<template>
  <div class="q-pa-md">
    <DataTable 
      title="Person (Exemple Datatable Quasar) "
      :rows="personRows" 
      :columns="personColumns" 
      :rowsNumber="meta.rowsNumber"
      :rowsPerPage="meta.rowsPerPage"
      @onRequest="onRequest"
      @onRowSelect="onRowSelect"
      @onRemove="onRemove"
      >
      <template v-slot:form>
        <PersonForm :personForm="personForm" @onUpdatePerson="updatePersonMutation"/>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import DataTable from "../../../components/dataTable/DataTable.vue"
import usePerson from "../../../composables/person"
import PersonForm from "./PersonForm.vue"

const { personColumns, personRows, personForm, rowsPerPage, meta, onRequest, onRowSelect, onRemove, updatePersonMutation } = usePerson()

onMounted(async () => {
  await onRequest({page: 1, rowsPerPage: rowsPerPage.value})
})

</script>

<style lang="scss">

</style>