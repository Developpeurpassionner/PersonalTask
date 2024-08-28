<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar color="secondary" class="h-16 lg:h-16 md:h-28">
                <div class="mt-3 lg:mt-3 md:mt-6">
                    <span class="relative flex h-4 w-4 mx-auto lg:h-4 lg:w-4 md:h-8 md:w-8">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span
                            class="relative inline-flex rounded-full h-4 w-4 lg:h-4 lg:w-4 md:h-8 md:w-8 bg-sky-500"></span>
                    </span>
                    <ion-title class="text-center text-2xl md:text-4xl lg:text-xl cursor-pointer">{{ HeureActuelle }}
                    </ion-title>
                </div>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <form class="max-w-lg mx-auto mt-[20vh] lg:max-w-lg md:max-w-xl">
                <label for="default-search"
                    class="mb-2 text-lg font-medium text-gray-900 sr-only dark:text-white"></label>
                <div class="relative">
                    <input v-model="tache" type="text" id=""
                        class="block w-full p-4 ps-10 text-xl lg:text-xl md:text-3xl text-white border border-gray-300 rounded-lg bg-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Que voulez-vous faire?" required />
                    <button type="button"
                        class="text-white text-base lg:text-base md:text-3xl  absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg  px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                        dark:focus:ring-blue-800" @click="ShowTache()">Ajouter</button>
                </div>
            </form>
            <ul>
                <li v-for="tab in tabs" :key="tab" class="text-white">{{ tab, index }}</li>
            </ul>
        </ion-content>
    </ion-page>
</template>

<style scoped>
    ion-content{
        --background: url('../../public/bgtask.jpg') no-repeat center center / cover;
        --min-height: 100%;
        --min-width: 100%;
    }
</style>
<script>
import moment from '../../node_modules/moment';
export default {
    name: "BeginPage",
    data() {
        return {
            HeureActuelle: null,
            tache:'',
            tabs:[]
        }
    },
    methods: {
        Heure() {
            this.HeureActuelle = moment().format("DD/MM/YYYY, h:mm:ss");
        },
        ShowTache(){
            const regex = /^[a-zA-ZÀ-ÿ]+$/;
            if (this.tache === '') {
                alert("Vous n'avez rien saisi.");
            } else if (!regex.test(this.tache)) {
                alert("La saisie n'est pas correcte.");
            } else {
                this.tabs.push(this.tache);
                this.tache = '';
            }
        },
    },
    created() {
        this.HeureActuelle = moment().format("DD/MM/YYYY, h:mm:ss");
        setInterval(() => this.Heure(), 1000);
    }
}
</script>