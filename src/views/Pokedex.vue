<template>
  <nav>
    <MyNavbar />
  </nav>
  <main>
    <div class="flex flex-col">
      <div class="flex flex-row mt-20 mb-20">
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
      </div>
      <div class="flex flex-row mt-20 mb-20">
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
      </div>
      <div class="flex flex-row mt-20 mb-20">
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
      </div>
      <div class="flex flex-row mt-20 mb-20">
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
      </div>
      <div class="flex flex-row mt-20 mb-20">
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
        <MyCard class="basis-1/4" />
      </div>
    </div>
  </main>
</template>

<script setup>
import MyCard from '@/components/MyCard.vue'
import MyNavbar from '@/components/MyNavbar.vue'
</script>
