<template>
  <div class="card card-side bg-base-100 shadow-sm m-5">
    <figure>
      <img src="../../public/icon/pokemon-trainer.png" alt="Movie" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ pokemon }}</h2>
      <p>{{description}}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">See more</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pokemon = ref("Pokemon");
const description = ref("Description of a pokemon")
</script>
