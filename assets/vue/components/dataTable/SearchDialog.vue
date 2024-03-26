<template>
   <div class="column q-gutter-md q-pa-md">
        <q-select dense v-model="column" :options="options.map(column => column.label)" label="Column" />
            <q-input label="Target value" dense debounce="300" color="primary" v-model="search" >
            <template v-slot:append>
                <q-icon name="search" />
            </template>
        </q-input>
        <q-btn label="Search" color="primary" @click="onSearch" class="q-mt-lg"/>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useDataTableStore } from "../../pinia/dataTable.store"
import { IPageOption } from '../../interfaces/pagination.model';
import { ISearch } from 'assets/vue/interfaces/dataTable.model';

interface SearchDialogProps {
    columns: any[],
    rowsPerPage: number
}

const emit = defineEmits(['onSearch'])
const props = withDefaults(defineProps<SearchDialogProps>(), {
    columns: () => []
})
const dataTableStore = useDataTableStore()


const search = ref<string>('')
const column = ref<string>('')
const options = ref(props.columns)

onMounted(() => {
    dataTableStore.isSearch = false
})

const onSearch = () => {
    const option = options.value.find(option => option.label == column.value)
    dataTableStore.isSearch = true

    const s: ISearch = search.value ? {
            table: '',
            column: option.name,
            search: search.value
        } : null
    
    const pageOption: IPageOption = {
        page: 1,
        rowsPerPage: props.rowsPerPage,
        search: s
    }
    
    dataTableStore.dialog = false
    dataTableStore.isDialogForm = false
    emit('onSearch', pageOption)
}
</script>
<style lang="scss">
    
</style>