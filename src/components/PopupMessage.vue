<template>
    <div class="rounded-lg bg-[#1e293b] p-2 shadow-2xl max-w-lg mx-auto mt-2" v-motion :initial="{ opacity: 0,y: 0,}"
    :visible="{opacity: 1,y: 15,}" :leave="{opacity: 0,y: -100,}">
        <h2 class="text-2xl font-bold text-center text-white lg:text-lg md:text-4xl">{{ message }}</h2>

        <div class="mt-4 flex justify-center">
            <button type="button" class="rounded bg-green-50 px-4 py-2 text-xl font-medium text-green-600 lg:text-sm md:text-3xl" @click="$emit('close')">
                Fermer
            </button>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            message:''
        }
    }
</script>