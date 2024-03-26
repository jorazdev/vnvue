<template>
    <q-fab
        v-model="fab1"
        flat
        color="purple"
        icon="more_vert"
        direction="left">
        <slot></slot>
    </q-fab>
</template>
<script setup lang="ts">
import {ref } from 'vue'

const  fab1 = ref(false)

</script>
<style lang="scss">
    
</style>