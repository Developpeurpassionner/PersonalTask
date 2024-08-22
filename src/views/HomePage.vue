<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title class="text-center text-xl md:text-4xl lg:text-xl">Bienvenue sur PersonalTask</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="mx-auto mt-5 mb-5">
        <div><img src="../../public/notes-concept-illustration_114360-689.avif" alt=""  class="w-96 mx-auto md:w-[70%] lg:w-96"></div>
        <p class="text-center text-lg md:text-3xl lg:text-lg">PersonalTask est une application qui vous permet de gérer vos tâches personnellement</p>
        <div class="flex flex-col mt-8 justify-around mx-auto space-y-8 space-x- md:flex-row md:space-x-12 md:space-y-0  lg:flex-row w-[40%] lg:space-y-0 lg:space-x-0">
          <router-link :to="{name:'Begin'}"><button class="rounded pt-1 pb-1 pl-2 pr-2 text-lg bg-[#0054e9] text-white w-32 md:w-52 lg:w-32 md:text-3xl lg:text-lg">Commencer</button></router-link>
           <button class="rounded text-lg pt-1 pb-1 pl-8 pr-8 bg-teal-500 text-white w-32 md:w-52 lg:w-32 md:text-3xl lg:text-lg">Démo</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>

</script>

<style scoped>

</style>
