<template>
    <q-tr>
        <q-td auto-width>
        <q-checkbox v-model="props.selected"/>
        </q-td>
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
        {{ col.value }}
        </q-td>
        <q-td auto-width>
        <FabActions>
            <q-fab-action flat color="secondary" @click="onClickFab(props.row, 'edit')" icon="edit" />
            <q-fab-action flat color="negative" @click="onClickFab(props.row, 'delete')" icon="delete" />
            <q-fab-action flat color="primary" @click="onClickFab(props.row, 'visibility')" icon="visibility"/>
            <slot name="actions" :row="props.row"></slot>
        </FabActions>
        </q-td>
    </q-tr>
</template>
<script setup lang="ts">
import FabActions from './FabActions.vue'
import { useDataTableStore } from "../../pinia/dataTable.store"
import { IItemDataTableProps } from '../../interfaces/dataTable.model'

const dataTableStore = useDataTableStore()


withDefaults(defineProps<IItemDataTableProps>(), {

})

const emit = defineEmits(['clickFab'])

const onClickFab = (row: any, action: string) => {
    dataTableStore.isDialogForm = true
    emit('clickFab', {row, action})
}
</script>
<style lang="scss">
    
</style>