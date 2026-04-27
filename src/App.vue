<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  background: #0b1020;
  color: #e6e8f2;
  color-scheme: dark;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

ion-app {
  width: 100%;
  height: 100%;
  background: #0b1020;
}

#app,
ion-app,
ion-router-outlet,
.ion-page,
ion-content,
ion-split-pane {
  background: #0b1020 !important;
}

ion-content::part(background),
ion-content::part(scroll) {
  background: #0b1020;
}
</style>



