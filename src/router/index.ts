import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Pokedex from '../views/Pokedex.vue';
import PokeDescription from '@/views/PokeDescription.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dex',
      name: 'dex',
      component: Pokedex
    },
    {
      path: '/description',
      name: 'description',
      component: PokeDescription
    },
  
  ],
})

export default router
