<template>
    <main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
    <div class="mt-7 bg-black  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
      <div class="p-4 sm:p-7">
        <i class="fa-solid fa-rectangle-xmark" style="color: black; background: yellow; z-index: 10;"></i>
        <img src="../../public/6845147.png" alt="" class="w-full">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-white dark:text-white">Comment voulez-vous appeler cette tâche?</h1>
        </div>
        <div class="mt-5">
          <form>
            <div class="grid gap-y-4">
              <div>
                <div class="relative">
                  <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error">
                </div>
              </div>
              <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Valider</button>
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