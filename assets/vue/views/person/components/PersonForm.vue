<template>
  <div class="q-pa-md">
    <q-form
    @submit="onUpdatePerson"
    @reset="dataTableStore.dialog = false"
    class="q-gutter-md">
      <q-input
          v-model="personForm.lastName"
          label="Last name *"
          hint="Last name"
      />

      <q-input
          v-model="personForm.firstName"
          label="First name *"
          hint="First name"
      />

      <q-input
          v-model="personForm.contact"
          label="Contact name *"
          hint="Contact name"
      />
    
      <div class="q-mt-lg">
          <q-btn label="Validate" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { IPersonFormProps } from '../../../interfaces/person.model'
import { useDataTableStore } from '../../../pinia/dataTable.store';

const props = withDefaults(defineProps<IPersonFormProps>(), {
  personForm: null
})

const emit = defineEmits(['onUpdatePerson'])
const dataTableStore = useDataTableStore()


const onUpdatePerson = async () => {
    emit('onUpdatePerson', props.personForm)
}

</script>

<style lang="scss">

</style>