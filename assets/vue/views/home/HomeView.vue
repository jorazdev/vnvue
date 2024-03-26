<template>
  <div>
    <NavRouter/>
    <div class="flex flex-col justify-center items-center h-screen overflow-hidden">
      <LogoApp/>
      <HelloWorld msg="Vite + Vue + Nestjs + Typescript + Docker" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import LogoApp from './components/LogoApp.vue'
import NavRouter from '../../components/NavRouter.vue'
</script>

<style lang="scss" scoped>
</style>