<template>
    <MyNavbar/>
    <div>
        <p>Poke description will be here</p>
    </div>
</template>

<script setup>

    import MyNavbar from '@/components/MyNavbar.vue';

    const props = defineProps({
        
        nome: String,
        tipo: String,
        peso: Number,
        base: Boolean,
        pokedex: Number,
        description: String

    })


</script>