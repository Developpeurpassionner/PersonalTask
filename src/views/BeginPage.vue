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
            <div class="min-h-full min-w-full bg-[url('../../public/bgtask.jpg')] bg-cover bg-no-repeat bg-center">
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import moment from '../../node_modules/moment';
export default {
    name:"BeginPage",
    data() {
        return {
            HeureActuelle: null
        }
    },
    methods: {
        Heure() {
            this.HeureActuelle = moment().format("DD/MM/YYYY, h:mm:ss");
        }
    },
    created() {
    this.HeureActuelle = moment().format("DD/MM/YYYY, h:mm:ss");
    setInterval(() => this.Heure(), 1000);
  },
}
</script>