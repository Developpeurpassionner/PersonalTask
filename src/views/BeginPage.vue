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
            <button v-if="ButtonSuccess" type="button" class=" fixed mx-auto text-black bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-400
                         hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                         focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl 
                         lg:text-base md:text-3xl px-5 py-2.5 text-center me-2" @click="saveTasks()">Enregistrer</button>
            <PopupMessage message="Enregitrement avec succes." class="fixed" v-if="registerSuccess" @close="ShowModal()" />

            <form class="max-w-lg mx-auto mt-[15vh] lg:max-w-lg md:max-w-xl">
                <label for="default-search"
                    class="mb-2 text-lg font-medium text-gray-900 sr-only dark:text-white"></label>
                <div class="flex">
                    <input v-model="tache" type="text" id=""
                        class="block w-full p-4 ps-10 text-xl rounded-sm lg:text-xl md:text-3xl text-white 
                        border border-gray-300 bg-black focus:ring-blue-500 focus:border-blue-500 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Que voulez-vous faire?" required />
                    <button type="button" class="text-white text-base lg:text-base md:text-4xl  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-sm  px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                        dark:focus:ring-blue-800" @click="ShowTache()">Ajouter</button>
                </div>
            </form>
            <PopupMessage message="Vous n'avez rien saisi." v-if="closeModal1" @close="ShowModal()" />
            <PopupMessage message="La saisie n'est pas correcte." v-if="closeModal2" @close="ShowModal()" />
            <ul class="mx-auto mt-[10%] max-w-lg lg:max-w-lg lg:mt-[2%] md:max-w-xl md:mt-[5%]">
                <li v-for="(tab, index) in tabs" :key="index"
                    class="text-white rounded-md border bg-[#1e293b] px-5 py-5 text-xl lg:text-xl md:text-3xl"> {{
                    index
                    + 1 }} - {{ tab }}
                    <div class="flex space-x-10">
                        <button type="button"
                            class="text-white bg-gradient-to-r from-teal-400 via-teal-500 
                        to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300
                         dark:focus:ring-teal-800 font-medium rounded-lg text-xl lg:text-base md:text-3xl px-5 py-2.5 text-center me-2 mt-3"
                           @click=" UpdateModal(index)">Modifier</button>
                        <button type="button"
                            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 
                         hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                         focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl lg:text-base md:text-3xl px-5 py-2.5 text-center me-2 mt-3"
                            @click="deleteTab(index)">Supprimer</button>
                    </div>
                    <form class="max-w-lg mx-auto mt-5" v-if="InputUpdate && currentIndex === index">
                        <label for="" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
                        <div class="relative">
                            <input type="text" id=""
                                class="block w-full p-4 ps-10 text-xl lg:text-lg md:text-3xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                                 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                v-model="ModifTache" required />
                        </div>
                        <div class="flex space-x-10 mt-3">
                            <button type="button" class="text-white bg-gradient-to-r from-[#0ea5e9] via-[#0ea5e9] to-[#0ea5e9]
                         hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                         focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl 
                         lg:text-base md:text-3xl px-5 py-2.5 text-center me-2" @click="leaveModal()">Annuler</button>
                            <button type="button" class="text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600
                         hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                         focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl 
                         lg:text-base md:text-3xl px-5 py-2.5 text-center me-2" @click="NewValuInput(index)">Valider</button>
                        </div>
                    </form>
                </li>
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
import PopupMessage from '@/components/PopupMessage.vue';
import moment from '../../node_modules/moment';
export default {
    name: "BeginPage",
    components:{PopupMessage},
    data() {
        return {
            HeureActuelle: null,
            tache:'',
            tabs:[],
            closeModal1:false,
            closeModal2:false,
            ModifTache:null,
            InputUpdate:false,
            currentIndex: null,
            registerSuccess:false,
            ButtonSuccess:false
        }
    },
    mounted() {
        this.loadTasks();
        window.addEventListener('beforeunload', this.handleBeforeUnload);
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
        },

    methods: {
        Heure() {
            this.HeureActuelle = moment().format("DD/MM/YYYY, h:mm:ss");
        },
        ShowTache(){
            const regex = /[a-zA-Z]+/;
            if (this.tache === '') {
                this.closeModal1=true;
            } else if (!regex.test(this.tache)) {
                this.closeModal2=true;
            } else {
                this.tabs.push(this.tache);
                this.tache = '';
                this.ButtonSuccess=true;
            }
        },
        ShowModal(){
            this.closeModal1=false;
            this.closeModal2=false;
            this.registerSuccess=false;
        },
        deleteTab(index){
            this.tabs.splice(index,1);
            this.InputUpdate=false;
        },
        UpdateModal(index){
            if (this.currentIndex === index) {
                this.InputUpdate = true;
                this.ModifTache=this.tabs[index];
            } else {
                this.InputUpdate = true;
                this.currentIndex = index;
                this.ModifTache=this.tabs[index];
            }
        },
        leaveModal(){
            this.InputUpdate=false;
        },
        NewValuInput(index){
            this.tabs[index]=this.ModifTache;
            this.InputUpdate=false;
        },
        handleBeforeUnload(event) {
            const confirmationMessage = 'Voulez-vous enregistrer vos tâches avant de quitter ?';
            event.returnValue = confirmationMessage; // Standard pour certains navigateurs
            return confirmationMessage; // Standard pour d'autres navigateurs
        },
        saveTasks() {
            // Code pour enregistrer les tâches
            localStorage.setItem('tabs', JSON.stringify(this.tabs));
            this.registerSuccess=true;
        },
        confirmSaveTasks() {
            if (confirm('Voulez-vous enregistrer vos tâches avant de quitter ?')) {
                this.saveTasks();
            }
        },
        loadTasks(){
            const savedTasks = localStorage.getItem('tabs');
            if (savedTasks) {
                this.tabs = JSON.parse(savedTasks);
        }

    }
},
    created() {
        this.HeureActuelle = moment().format("DD/MM/YYYY, h:mm:ss");
        setInterval(() => this.Heure(), 1000);
    }
}
</script>