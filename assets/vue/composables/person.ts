import { computed, reactive, ref, onMounted } from "vue"
import { useQuery, useMutation, useApolloClient } from '@vue/apollo-composable'
import { ALL_PERSON_QUERY, UPDATE_PERSON_MUTATION } from '../graphql/person/person.query'
import { IPersonForm } from "../interfaces/person.model";
import { IPageOption } from "../interfaces/pagination.model"
import useDataTable from "./dataTable";
import { useDataTableStore } from "../pinia/dataTable.store";
import useForm from "./form"

export default function usePerson() {

  const { meta, setPageOption } = useDataTable()
  const dataTableStore = useDataTableStore()
  const { client } = useApolloClient()

  const { formData, clearForm } = useForm()

  let personForm = reactive<IPersonForm|any>({
      id: 0,
      lastName: '',
      firstName: '',
      contact: ''
  })
  const personRows = ref<IPersonForm[]>([])
  const personColumns = ref<any[]>([
      {
          name: 'id',
          required: true,
          label: 'Id',
          align: 'left',
          field: (row: any) => row.id,
          format: (val: any) => `${val}`,
          sortable: true,
          type: 'number'
        },
      {
          name: 'lastName',
          required: true,
          label: 'Last name',
          align: 'left',
          field: (row: any) => row.lastName,
          format: (val: any) => `${val}`,
          sortable: true,
          type: 'string'
        },
        {
          name: 'firstName',
          required: true,
          label: 'First name',
          align: 'left',
          field: (row: any) => row.firstName,
          format: (val: any) => `${val}`,
          sortable: true,
          type: 'string'
        },
        {
          name: 'contact',
          required: true,
          label: 'Contact',
          align: 'left',
          field: (row: any) => row.contact,
          format: (val: any) => `${val}`,
          sortable: true,
          
        }
  ])
  const tableDB = ref<string>('person')

  onMounted(() => {
    
  })

  const rowsPerPage = computed(() => dataTableStore.rowsPerPage)
  
  const findAllPersonQuery = async (pageOption: IPageOption, isRefetch: boolean=false) => {
    const { data, loading, error } = await client.query({
      query: ALL_PERSON_QUERY,
      variables: {
        pageOption: {
            ...pageOption
        }
      }
    })

    personRows.value = data.findAllPerson.persons
    Object.assign(meta, data.findAllPerson.meta)
  }

  const updatePersonMutation = async (personForm: IPersonForm) => {
    const { mutate: updatePersonMutate } = useMutation(UPDATE_PERSON_MUTATION, 
      () => ({
        variables: {
            personInput: {
                ...personForm,
            },
            rowsPerPage: rowsPerPage.value
        }
    }))

    const res: any = await updatePersonMutate()
    dataTableStore.page = personForm.id == 0 ? res.data.updatePerson.pagesNumber : dataTableStore.page
    clearForm(personForm)
    await findAllPersonQuery({page: dataTableStore.page, rowsPerPage: rowsPerPage.value}, true)
    dataTableStore.dialog = false
  }

  const onRequest = async (pageOption: IPageOption) => {
    if(pageOption){
      setPageOption(pageOption, tableDB.value)
      await findAllPersonQuery({page: pageOption.page, rowsPerPage: pageOption.rowsPerPage, search: dataTableStore.search }, false)
    }else {
      await findAllPersonQuery({page: 1, rowsPerPage: rowsPerPage.value }, false)
    }
  }

  const onRowSelect = (row: IPersonForm) => {
    Object.assign(personForm, row ? formData(personForm, row) : clearForm(personForm))
  }

  const onRemove = (selected: IPersonForm[]) => {
    console.log(selected)
  }

  return {
      personForm,
      personColumns,
      personRows,
      meta,
      rowsPerPage,
      tableDB,
      onRequest,
      updatePersonMutation,
      onRowSelect,
      onRemove
  }
}