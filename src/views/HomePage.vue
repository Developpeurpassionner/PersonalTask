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
        <div
          class="w-full text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <p class="text-center text-blue-500 text-xl font-bold md:text-4xl lg:text-xl">L'application qui vous permet de gérer vos tâches personnelles.</p>
          </div>
        </div>
        <div><img src="../../public/notes-concept-illustration_114360-689.avif" alt=""
            class="w-96 mx-auto md:w-[70%] lg:w-96"></div>
        <p class="text-center text-xl font-bold md:text-4xl lg:text-lg">Éviter de déchirer les papiers pour noter ce que
          vous avez dans la tête.</p>
        <p class="text-center text-xl mt-0 md:text-4xl md:mt-4 lg:text-lg lg:mt-0">PersonalTask vous aide à gérer une
          liste de choses à faire
          personnellement.</p>
        <div
          class="flex flex-col mt-8 justify-around mx-auto space-y-8 space-x- md:flex-row md:space-x-12 md:space-y-0  lg:flex-row w-[40%] lg:space-y-0 lg:space-x-0">
          <router-link :to="{ name: 'Begin' }"><button
              class="rounded pt-1 pb-1 pl-2 pr-2 text-xl bg-[#0054e9] text-white w-32 md:w-52 lg:w-32 md:text-3xl lg:text-lg">Commencer</button></router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>

</script>

<style scoped>
  ion-content {
    --background:white;
  }
</style>
