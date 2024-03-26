<template>
<div class="q-pa-md">
    <q-table
      :rows="rows"
      :columns="columns"
      :row-key="rowKey"
      selection='multiple'
      :rows-per-page-options="[0]"
      v-model:selected="selected">
      <template v-slot:top>
        <TopDataTable 
          :title="title"
          :selected="selected" 
          @onRowSelect="onRowSelect" 
          @onRemove="onRemove" 
          @onSearch="onRequest"/>
      </template>
      <template v-slot:body="props">
        <ItemDataTable :props="props" @clickFab="onClickFab"/>
      </template>
      <template v-slot:bottom>
        <BottomDataTable 
          :selected="selected" 
          :rowsNumber="rowsNumber" 
          :rowsPerPage="rowsPerPage"
          @onRequest="onRequest"/>
      </template>
    </q-table>
    
    <q-dialog v-model="dataTableStore.dialog" 
      position="right">
      <q-card style="width: 400px; height: 100vh;">
        <div class="full-width"  v-if="dataTableStore.isDialogForm">
          <div class="q-pa-xs q-pl-md row justify-start items-center" 
            style="height: 60px; color: white; font-size: 16px; font-weight: 700;"
            :class="[backgroundColor]">
            <span v-if="rowSelected == undefined">Add {{ title }}</span>
            <span v-else>Edit {{ title }}</span>
          </div>
          <slot name="form"></slot>
        </div>
        
        <div class="full-width" v-else>
          <div class="q-pa-xs q-pl-md row justify-start items-center" 
            style="height: 60px; color: white; font-size: 16px; font-weight: 700" 
            :class="[backgroundColor]">
            <span>Search {{ title }}</span>
          </div>
          <SearchDialog 
            :columns="columns" 
            :rowsPerPage="rowsPerPage"
            @onSearch="onRequest" />
        </div>
        
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from "vue"
import BottomDataTable from './BottomDataTable.vue'
import TopDataTable from './TopDataTable.vue'
import ItemDataTable from './ItemDataTable.vue'
import SearchDialog from './SearchDialog.vue'
import { useDataTableStore } from "../../pinia/dataTable.store"
import { IDataTableProps } from "../../interfaces/dataTable.model";
import { IPageOption } from "../../interfaces/pagination.model";

const props = withDefaults(defineProps<IDataTableProps>(), {
  title: 'Tables',
  rows: () => [],
  columns: () => [],
  rowKey: 'id',
  rowsNumber: 0,
  rowsPerPage: 0,
  
})

const emit = defineEmits(['onRequest', 'onRowSelect', 'onRemove'])

const dataTableStore = useDataTableStore()


const selected = ref<any[]>([])
const rowSelected = ref<any>()


const backgroundColor = computed(() => {
  if(dataTableStore.isDialogForm){
    if(rowSelected.value == undefined){
      return "bg-blue-4"
    }else{
      return "bg-green-4"
    }
  }else {
    return "bg-orange-4"
  }
})

onMounted(() => {
  dataTableStore.page = 1
})

const onRequest = (pageOption: IPageOption) => {
  if(pageOption){
    dataTableStore.page = pageOption.page
  }
  emit('onRequest', pageOption)
}

const onRowSelect = (evt: Event, row: any, index: Number) => {
  rowSelected.value = row
  dataTableStore.dialog = true
  dataTableStore.isDialogForm = true
  emit('onRowSelect', row)
}

const onClickFab = (fab: any) => {
  switch(fab.action){
    case 'visibility':
    break

    case 'edit':
      dataTableStore.dialog = true
      dataTableStore.isDialogForm = true
      rowSelected.value = fab.row
      console.log(`onClickFab ${dataTableStore.page}`)
      emit('onRowSelect', fab.row)
      break

    case 'delete':
      break
  }
}

const onRemove = () => {
  emit('onRemove', selected.value)
}

</script>
<style lang="scss">
    
</style>