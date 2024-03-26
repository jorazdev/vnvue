import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { IPersonForm } from '../interfaces/person.model'

export const usePersonStore = defineStore('personStore', () => {

    let persons = ref<IPersonForm[]>([])

    const onUpdatePerson = (id: number, personInput: IPersonForm) => {

        if(id == 0){
            persons.value = [...persons.value, personInput]
        }else {
            let personsClone: IPersonForm[] = [...persons.value]

            const index = personsClone.findIndex(item => item.id == id)
            personsClone[index] = {...personInput}
            persons.value = personsClone
        }
    }

    return {
        persons,
        onUpdatePerson
    }
})