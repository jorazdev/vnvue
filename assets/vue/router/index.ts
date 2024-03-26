import { createRouter, createWebHistory } from 'vue-router'

const routes: any[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeView.vue'),
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/person/PersonView.vue')
  },
  {
    path: '/quasar',
    name: 'quasar',
    component: () => import('../layout/LayoutQuasar.vue'),
    redirect: '/quasar/button',
    children: [
      {
        path: '/quasar/button',
        name: 'quasarButton',
        component: () => import('../views/quasar/button/ButtonView.vue')
      }
    ]
  },
  {
    path: '/tailwind',
    name: 'tailwind',
    component: () => import('../layout/LayoutTailwind.vue'),
    redirect: '/tailwind/button',
    children: [
      {
        path: '/tailwind/button',
        name: 'tailwindButton',
        component: () => import('../views/tailwind/button/ButtonView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
