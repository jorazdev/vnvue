<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn color="white" text-color="black" label="Standard" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="black" label="Black" />

        <div class="q-gutter-md">
      <q-select v-model="model" :options="options" label="Standard" />

      <q-select filled v-model="model" :options="options" label="Filled" />

      <q-select outlined v-model="model" :options="options" label="Outlined" />

      <q-select standout v-model="model" :options="options" label="Standout" />

      <q-select standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />

      <q-select borderless v-model="model" :options="options" label="Borderless" />

      <q-select rounded filled v-model="model" :options="options" label="Rounded filled" />

      <q-select rounded outlined v-model="model" :options="options" label="Rounded outlined" />

      <q-select rounded standout v-model="model" :options="options" label="Rounded standout" />

      <q-select square filled v-model="model" :options="options" label="Square filled" />

      <q-select square outlined v-model="model" :options="options" label="Square outlined" />

      <q-select square standout v-model="model" :options="options" label="Square standout" />
    </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';


const model = ref<string>('')
const options = ref<string[]>([
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ])
</script>
<style lang="scss">
    
</style>