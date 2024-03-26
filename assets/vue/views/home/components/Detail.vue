<template>
    <div class="border-2 border-gray-300 w-full md:w-1/4">
        <div class="flex justify-center items-center bg-gray-100 ">
            <a href="https://nestjs.com/" target="_blank">
                <img :src="detail.logo" class="w-5" alt="Nest logo" />
            </a> 
            <h1 class="text-xl px-2 py-1 rounded-sm text-center mb-1">{{ detail.title }}</h1>
        </div>
        
        <div class="flex flex-col justify-start">
            <div v-for="(item, index) in detail.items" 
                class="flex justify-start items-center p-1" 
                :key="index">
                <div class="text-center text-sm p-1 font-bold">{{ item.title }} : </div>
                <div class="text-center text-sm">{{ item.value }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { IDetail } from '../../../interfaces/detail.model'


defineProps({
    detail: Object as () => IDetail
})

</script>
<style lang="scss">
    
</style>