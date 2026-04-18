<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Negocio - Simulación realtime</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2 style="text-align:center; margin: 16px 0;">Gráfico en tiempo real (simulado)</h2>

      <div class="controls" style="display:flex; gap:12px; justify-content:center; margin-bottom:12px;">
        <ion-button @click="start" color="primary">Iniciar</ion-button>
        <ion-button @click="stop" color="medium">Detener</ion-button>
        <ion-button @click="pushOne" color="tertiary">Añadir punto</ion-button>
      </div>

      <div style="max-width:1000px; margin: 0 auto;">
        <RealtimeBarChart />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import RealtimeBarChart from '../components/RealtimeBarChart.vue';
import { useRealtimeStore } from '../store/useRealtimeStore';

const store = useRealtimeStore();
function start() { store.startSimulation(1500); }
function stop() { store.stopSimulation(); }
function pushOne() { store.pushPoint(); }

onMounted(() => { start(); });
onBeforeUnmount(() => { stop(); });
</script>