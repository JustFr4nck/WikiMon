<template>
  <div class="flex justify-center items-center bgHome h-screen">
    <div class="bg-white flex w-100 h-100 justify-center items-center crazyBox flex-col">
      <h1 class="bungee-spice-regular text-center">Let's discover the world of Pokemon</h1>
      <button @click="toDex" class=" mt-5 dexBtn">Pokedex</button>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { useRouter } from 'vue-router';

  const router = useRouter();

  function toDex(){

    router.push("/dex");

  }

</script>
