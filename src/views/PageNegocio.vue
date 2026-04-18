<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Negocio - Simulación realtime</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <section class="panel">
        <h3>Gráfico en tiempo real (simulado)</h3>

        <div class="controls">
          <ion-button @click="start" color="primary">Iniciar simulación</ion-button>
          <ion-button @click="stop" color="medium">Detener</ion-button>
          <ion-button @click="pushOne" color="tertiary">Añadir punto</ion-button>
        </div>

        <RealtimeBarChart />
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import RealtimeBarChart from '../components/RealtimeBarChart.vue';
import { useRealtimeStore } from '../store/useRealtimeStore';

const store = useRealtimeStore();

function start() {
  store.startSimulation(1500); // cada 1.5s
}
function stop() {
  store.stopSimulation();
}
function pushOne() {
  // función utilitaria para añadir manualmente un punto
  // reutiliza la lógica interna: accedemos directamente a labels/values
  const now = new Date();
  store.labels.push(now.toLocaleTimeString());
  store.values.push(Math.round(10 + Math.random() * 90));
  // limitamos a 12 puntos (igual que en store)
  if (store.labels.length > 12) {
    store.labels.shift();
    store.values.shift();
  }
}

onMounted(() => {
  // si quieres que empiece automáticamente al abrir la vista:
  start();
});

onBeforeUnmount(() => {
  stop();
});
</script>

<style scoped>
.panel { max-width: 1000px; margin: 0 auto; }
.controls { display:flex; gap:12px; margin-bottom:12px; align-items:center }
</style>