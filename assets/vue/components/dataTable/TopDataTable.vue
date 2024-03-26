<template>
    <div class="full-width">
        <div class="text-h4 text-black">{{ title }}</div>
        <div class="row justify-between items-center q-ma-md">
            <div class="q-gutter-md">
                <q-btn size="sm" color="primary" round icon="add" @click="onAdd">
                    <q-tooltip class="bg-accent">Add</q-tooltip>
                </q-btn>
                <q-btn v-if="selected.length > 0" size="sm" color="negative" round icon="delete" @click="onRemove">
                    <q-tooltip class="bg-accent">Remove</q-tooltip>
                </q-btn>
            </div>
            <div class="q-gutter-md">
                <q-btn v-if="dataTableStore.search?.search" 
                    size="sm" 
                    color="primary" 
                    icon="description"
                    round 
                    @click="onSearch('all')">
                    <q-tooltip class="bg-accent">Show all</q-tooltip>
                </q-btn>
                <q-btn size="sm" color="primary" round icon="search" @click="onSearch('filter')">
                    <q-tooltip class="bg-accent">Search</q-tooltip>
                </q-btn>
            </div>
        </div>
        
    </div>

</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useDataTableStore } from "../../pinia/dataTable.store"
import { TopDataTableProps } from "../../interfaces/dataTable.model";


withDefaults(defineProps<TopDataTableProps>(), {
    selected: () => [],
    title: ''
})

const dataTableStore = useDataTableStore()

const emit = defineEmits(['onRowSelect', 'onRemove', 'onSearch'])

onMounted(() => {
    dataTableStore.isSearch = false
})

const onAdd = () => {
  dataTableStore.dialog = true
  emit('onRowSelect', null)
}

const onRemove = () => {
    emit('onRemove')
}

const onSearch = (type: string) => {
    if(type == 'all'){
        dataTableStore.search.search = ''
        dataTableStore.page = 1
        emit('onSearch', null)
    }else {
        dataTableStore.dialog = true
        dataTableStore.isDialogForm = false
    }
}
</script>
<style lang="scss">
    
</style>