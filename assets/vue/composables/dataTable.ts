import { reactive, ref } from "vue";
import { IMeta, IPageOption } from "../interfaces/pagination.model";
import { IDataTableProps, ISearch } from "../interfaces/dataTable.model";
import { useDataTableStore } from "../pinia/dataTable.store";
export default function useDataTable() {

    const dataTableStore = useDataTableStore()
    
    const rowsPerPageOptions = ref<number[]>([ 3, 7, 10, 15 ]) 
    let meta = reactive<IMeta>({
        page: 0,
        rowsPerPage: 3,
        rowsNumber: 0,
        pagesNumber: 0,
        hasNextPage: false,
        hasPreviousPage: false,
      })

      const setPageOption = (pageOption: IPageOption, table: string) => {
        let search: ISearch = null 
            if(pageOption?.search && pageOption.search.search){
                search = {...pageOption.search, table }
                dataTableStore.search = search
                //dataTableStore.page = 1
            }else {
                dataTableStore.search = null
                //dataTableStore.page = 1
            }
      }

    return {
        meta,
        rowsPerPageOptions,
        setPageOption
    }
}