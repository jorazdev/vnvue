<script setup lang="ts">
import { ref } from 'vue'
import Detail from './Detail.vue'
import { IDetail, IItem } from '../../../interfaces/detail.model';
import nestLogo from "../../../../images/nest.svg"
import vueLogo from "../../../../images/vue.svg"

defineProps<{ msg: string }>()

const back: IDetail = {
    logo: nestLogo,
    title: "NestJs (back)",
    items: [
      { title: "Database", value: "Postgresql" },
      { title: "ORM", value: "TypeORM" },
      { title: "API", value: "Graphql" },
    ] as IItem[],
  }

  const front: IDetail = {
    logo: vueLogo,
    title: "Vuejs3 (front)",
    items: [
      { title: "Store", value: "Pinia" },
      { title: "API", value: "Graphql" },
      { title: "Hook", value: "Composable" },
    ] as IItem[],
  }
const count = ref(0)
</script>

<template>
  <h2 class="text-lg font-bold md:text-4xl">{{ msg }}</h2>
  <h2 class="text-md mt-6 font-bold">Avec le framework</h2>
  <div class="flex justify-center items-center gap-x-7 py-3 md:w-2/4">
    <Detail :detail="back"/>
    <div class="flex justify-center items-center">
      <div>
        <div class="text-center text-md"><strong>Quasar</strong></div>
        <a href="https://quasar.dev/" target="_blank">
          <img src="../../../../images/quasar1.png" class="w-32 h-32 rounded-full" alt="Quasar logo" />
        </a>
      </div>
      <div>
        <div class="text-center text-md"><strong>Tailwind</strong></div>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src="../../../../images/tailwind.svg" class="w-32 h-32 rounded-full" alt="Tailwind logo" />
        </a>
      </div>
    </div>
    <Detail :detail="front"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
