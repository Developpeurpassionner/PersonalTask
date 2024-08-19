<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title class="ion-text-center">Bienvenue sur PersonalTask</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="mx-auto mt-5 mb-5">
        <div><img src="../../public/notes-concept-illustration_114360-689.avif" alt=""  class="w-96 mx-auto"></div>
        <p class="text-center text-lg">PersonalTask est une application qui vous permet de gérer vos taches personnellement</p>
        <div class="flex justify-center mt-8 mx-auto">
            <button class="rounded ml-4 pt-1 pb-1 pl-2 pr-2 text-lg bg-[#0054e9] text-white w-32">Commencer</button>
            <button class="rounded ml-16 text-lg mr-8 pt-1 pb-1 pl-8 pr-8 bg-teal-500 text-white w-32">Démo</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
</script>

<style scoped>

</style>
