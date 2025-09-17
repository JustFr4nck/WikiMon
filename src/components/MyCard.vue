<template>
  <div class="card card-side bg-base-100 shadow-sm m-5">
    <figure>
      <img :src="img" alt="Movie" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ poke.name }}</h2>
      <p>{{ poke.id }}</p>
      <div class="card-actions justify-end">
        <button @click="openDescription" class="btn btn-primary">See more</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import PokeDescription from '@/views/PokeDescription.vue';

const img = ref("");
const router = useRouter();

const props = defineProps({
  poke: {
    type: Object,
    required: true,
  },
})

console.log(props.poke.name)


async function printSprite() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.poke.name}`)
  const data = await response.json()
 // console.log(data)
  img.value = data.sprites.front_default
}

onMounted(() =>{

  printSprite();
})

function openDescription(){

  router.push('/description')

}

</script>
