<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button />
      </ion-buttons>
      <ion-title>ReMarket</ion-title>
      <ion-buttons slot="end">
        <ion-button>
          <ion-icon slot="icon-only" :icon="personCircleOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup>
import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/vue';
import { personCircleOutline } from 'ionicons/icons';
</script>

<style scoped>
ion-title { font-weight: 700; }
</style>
