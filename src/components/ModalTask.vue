<template>
    <main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
    <div class="mt-7 bg-black  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
      <div class="p-4 sm:p-7">
        <i class="fa-solid fa-rectangle-xmark" style="color: black; background: yellow; z-index: 10;"></i>
        <img src="../../public/6845147.png" alt="" class="w-full">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-white dark:text-white lg:text-2xl md:text-3xl">Comment voulez-vous nommer cette tâche?</h1>
        </div>
        <div class="mt-5">
          <form>
            <div class="grid gap-y-4">
              <div>
                <div class="relative">
                  <input type="text" id="text" name="text" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required>
                </div>
              </div>
              <div class="flex flex-col mx-auto justify-between space-y-8 mt-6 lg:mt-0 md:space-y-10 lg:flex-row lg:mx-0 lg:space-y-0 md:flex-col">
                <button class="py-1 lg:py-0 px-8 text-2xl lg:text-lg md:text-4xl inline-flex justify-center items-center w-34 lg:w-32 gap-2 rounded-md border border-transparent  bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">Valider</button>
                <button class="hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800 rounded-md text-2xl py-1 px-8 bg-teal-500 text-white w-34  md:w-52 lg:w-32 lg:py-0 md:text-4xl lg:text-lg">Annuler</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
    export default{
        name:'ModalTask'
    }
</script>