<template>
  <nav>
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1 flex items-center">
        <a class="btn btn-ghost text-xl"
          ><Icon @click="returnHome" class="w-10 h-10" icon="majesticons:home"></Icon
        ></a>
        <h2 class="ml-20 text-2xl rubik-bubbles-regular">POKEDEX</h2>
      </div>
      <div class="flex gap-2">
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="../../public/icon/pokemon-trainer.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
const router = useRouter()

function returnHome() {
  router.push('/')
}
</script>
