<template>
    <div class="flex justify-center items-center gap-x-3 md:gap-x-8 mb-6">
        <a href="https://vitejs.dev" target="_blank">
          <img :src="logoVite" class="w-12 md:w-24" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img :src="logoVue" class="w-12 md:w-24" alt="Vue logo" />
        </a>
        <a href="https://nestjs.com/" target="_blank">
          <img :src="logoNest" class="w-12 md:w-24 nest" alt="Nest logo" />
        </a> 
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img :src="logoTs" class="w-12 md:w-24" alt="Typescript logo" />
        </a>
        <a href="https://www.docker.com/" target="_blank">
          <img :src="logoDocker" class="w-12 md:w-24" alt="Docker logo" />
        </a>
    </div>
</template>
<script setup lang="ts">
import logoVite from "../../../../images/vite.svg"
import logoVue from "../../../../images/vue.svg"
import logoNest from "../../../../images/nest.svg"
import logoTs from "../../../../images/ts.png"
import logoDocker from "../../../../images/docker.png"
</script>
<style lang="scss">
    
</style>