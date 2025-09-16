<template>
  <nav>
    <MyNavbar />
  </nav>
  <main>
    <div class="">
      <div class="flex flex-row flex-wrap mt-20 mb-20 justify-center">
        <MyCard class="basis-1/5" v-for="p in pokemon" :poke="p" />
      </div>
    </div>
  </main>
</template>

<script setup>
import MyCard from '@/components/MyCard.vue'
import MyNavbar from '@/components/MyNavbar.vue'
import { onMounted, ref } from 'vue'

const pokemon = ref([])
const description = ref('Description of a pokemon')

async function getPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const data = await response.json()
  pokemon.value = data.results

}

onMounted(() => {
  getPokemon()
})
</script>
