<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar color="secondary" class="h-16 lg:h-16 md:h-28">
                <div class="mt-3 lg:mt-3 md:mt-6">
                    <span class="relative flex h-4 w-4 mx-auto lg:h-4 lg:w-4 md:h-8 md:w-8">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-4 w-4 lg:h-4 lg:w-4 md:h-8 md:w-8 bg-sky-500"></span>
                    </span>
                    <ion-title class="text-center text-2xl md:text-4xl lg:text-xl cursor-pointer" @click="ShowModal()">Créer une tâche</ion-title>
                </div>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="h-[100vh] bg-[url('../../public/bgtask.jpg')] bg-cover bg-no-repeat bg-center lg:bg-top md:bg-center lg:h-[125vh]">
                <ModalTask v-show="montre"/>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import ModalTask from '@/components/ModalTask.vue';
    export default{
        name:'BeginPage',
        components:{ModalTask},
        data(){
            return{
                montre:false
            }
        },
        methods:{
            ShowModal(){
                this.montre=true;
            }
        }
    }
</script>