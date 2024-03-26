import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { IColumnSearch, ISearch } from '../interfaces/dataTable.model'
import { IMeta } from '../interfaces/pagination.model'

export const useDataTableStore = defineStore('dataTableStore', () => {

    const dialog = ref<boolean>(false)
    const isDialogForm = ref<boolean>(true)
    const isSearch = ref<boolean>(false)
    const rowsPerPage = ref<number>(3)
    const columnSearch = ref<IColumnSearch[]>([])
    const page = ref<number>(1)
    const search = reactive<ISearch>({
        table: '',
        column: '',
        search: ''
    })
    let meta = reactive<IMeta>({
        page: 0,
        rowsPerPage: 3,
        rowsNumber: 0,
        pagesNumber: 0,
        hasNextPage: false,
        hasPreviousPage: false,
      })

    return {
        dialog,
        rowsPerPage,
        isDialogForm,
        isSearch,
        columnSearch,
        page,
        search,
        meta
    }
})