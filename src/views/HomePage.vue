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
          <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white lg:text-xl md:text-4xl">Télécharger l'application mobile ici</h5>
          <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <RouterLink to=""
              class="sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                </path>
              </svg>
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xl lg:text-base md:text-3xl">Télécharger sur</div>
                <div class="-mt-1 font-sans text-xl  md:text-3xl lg:text-base font-semibold">App Store</div>
              </div>
            </RouterLink>
            <RouterLink to=""
              class="sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                </path>
              </svg>
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xl lg:text-base md:text-3xl">Télécharger sur</div>
                <div class="-mt-1 font-sans text-xl  md:text-3xl lg:text-base font-semibold">Google Play</div>
              </div>
            </RouterLink>
          </div>
        </div>
        <div><img src="../../public/notes-concept-illustration_114360-689.avif" alt=""
            class="w-96 mx-auto md:w-[70%] lg:w-96"></div>
        <p class="text-center text-xl font-bold md:text-4xl lg:text-lg">Éviter de déchirer les papiers pour noter ce que
          vous avez dans la tête.</p>
        <p class="text-center text-xl mt-0 md:text-4xl md:mt-4 lg:text-lg lg:mt-0">PersonalTask vous aide à gérer une liste de choses à faire
          personnellement.</p>
        <div
          class="flex flex-col mt-8 justify-around mx-auto space-y-8 space-x- md:flex-row md:space-x-12 md:space-y-0  lg:flex-row w-[40%] lg:space-y-0 lg:space-x-0">
          <router-link :to="{ name: 'Begin' }"><button
              class="rounded pt-1 pb-1 pl-2 pr-2 text-xl bg-[#0054e9] text-white w-32 md:w-52 lg:w-32 md:text-3xl lg:text-lg">Commencer</button></router-link>
          <button
            class="rounded text-xl pt-1 pb-1 pl-8 pr-8 bg-teal-500 text-white w-32 md:w-52 lg:w-32 md:text-3xl lg:text-lg">Démo</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>

</script>

<style scoped></style>
