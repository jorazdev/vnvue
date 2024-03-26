<template>
    <div class="full-width row justify-between items-center">
        <div class="row">
        {{ selected.length }} ligne(s) sélectionnées sur {{ rowsPerPage }}
        </div>
        <div class="row justify-end items-center">
        <div class="q-mr-md">Lignes par page</div>
        <q-select borderless v-model="rowsPerPage" 
            :options="rowsPerPageOptions" 
            @update:model-value="onRequest('select')"/>
        <q-pagination
            v-model="page"
            color="purple"
            :max="max"
            :max-pages="6"
            boundary-numbers
            direction-links
            @click="onRequest('pagination')"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { useDataTableStore } from "../../pinia/dataTable.store"
import { IPageOption } from "../../interfaces/pagination.model";
import useDataTable from "../../composables/dataTable";
import { BottomDataTableProps } from "../../interfaces/dataTable.model";


const props = withDefaults(defineProps<BottomDataTableProps>(), {
  selected: () => [],
  rowsNumber: 0,
  rowsPerPage: 0
})

const emit = defineEmits(['onRequest'])

const dataTableStore = useDataTableStore()
const { rowsPerPageOptions } = useDataTable()


const rowsPerPage = ref<number>(props.rowsPerPage)
const page = ref<number>(dataTableStore.page)


const max = computed(() => {
  return  Math.ceil(props.rowsNumber / props.rowsPerPage)
})
const currentPage = computed(() => dataTableStore.page)
const isSearch = computed(() => dataTableStore.isSearch)

const onRequest = (type: string) => {

  page.value = type == 'pagination' ? page.value : 1

  const pageOption: IPageOption = {
    page: page.value,
    rowsPerPage: rowsPerPage.value,
    search: dataTableStore.search
  }
  emit('onRequest', pageOption)
}

watch(currentPage, value => {
  page.value = value
})

watch(isSearch, value => {
  if(value){
    page.value = 1
  } 
})
</script>
<style lang="scss">
    
</style>