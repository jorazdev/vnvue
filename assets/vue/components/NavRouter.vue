<template>
<nav class="bg-slate-300">
    <ul class="flex justify-center items-center">
        <li v-for="navRouter in navRouters"
            @click="onselect(navRouter)" 
            :key="navRouter.id"
            class="p-5  hover:bg-slate-100" 
            :class="selectedNav == navRouter.id ? 'bg-slate-400' : ''">
            <RouterLink :to="{ name: navRouter.name }" class="p-5">{{ navRouter.label }}</RouterLink>
        </li>
    </ul>
</nav>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { INavRouter } from '../interfaces/navRouter.model'
import { useRoute } from 'vue-router';

const route = useRoute()

const navRouters = ref<INavRouter[]>([
    {id: 1, name: "home", label: "Home"},
    {id: 2, name: "person", label: "Person"},
    {id: 3, name: "tailwind", label: "Tailwind"},
    {id: 4, name: "quasar", label: "Quasar"}
])


const pathName: string = route.path.split('/')[1] ? route.path.split('/')[1] : '';
const routeName: any = pathName ? pathName : route.name
const navRouter: INavRouter = navRouters.value.find(item => item.name == routeName)

const selectedNav = ref<number>(navRouter.id)

const onselect = (navRouter: INavRouter) => {
selectedNav.value = navRouter.id
}

</script>
<style lang="scss">
    
</style>