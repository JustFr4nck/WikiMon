<template>
  <div class="card card-side bg-base-100 shadow-sm m-5">
    <figure>
      <img :src="img" alt="Movie" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ poke.name }}</h2>
      <p>description</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">See more</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PokeDescription from '@/views/PokeDescription.vue';

const img = ref("");

const props = defineProps({
  poke: {
    type: Object,
    required: true,
  },
})

async function printSprite() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.poke.name}`)
  const data = await response.json()
  img.value = data.sprites.front_default
}

onMounted(() =>{

  printSprite();
})

</script>
