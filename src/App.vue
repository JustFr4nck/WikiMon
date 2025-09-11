<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MyFooter from './components/MyFooter.vue';
</script>

<template>
  <RouterLink to="/"></RouterLink>
  
  
  <RouterView />
  <MyFooter/>
</template>

