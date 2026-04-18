<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Técnico</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>Panel técnico</h2>

      <section class="panel">
        <p>Aquí irá la información técnica: estado de servicios, trazas, métricas de rendimiento y gráficos.</p>

        <div class="controls">
          <ion-button @click="loadMock" color="primary">Cargar mock</ion-button>
        </div>

        <ion-list>
          <ion-item v-for="(item, idx) in items" :key="idx">
            <ion-label>
              <h3>{{ item.title }}</h3>
              <p>{{ item.detail }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';

/* Datos mock locales (tu compañero puede sustituir por la store o axios) */
const items = ref([
  { title: 'Tiempo de respuesta API', detail: 'Media: 210ms — 95p: 450ms' },
  { title: 'Errores 5xx hoy', detail: 'Total: 3 — Origen: /api/orders' },
  { title: 'Uso de CPU (servicio A)', detail: '32%' },
  { title: 'Estado colas', detail: 'Cola pedidos: OK — Cola mails: 120 mensajes' },
  { title: 'Último despliegue', detail: '2026-04-15 12:34 by CI' }
]);

function loadMock() {
  // ejemplo simple para actualizar la lista
  items.value.push({
    title: 'Check manual',
    detail: `Comprobación añadida ${new Date().toLocaleTimeString()}`
  });
}
</script>

<style scoped>
.panel { max-width: 1000px; margin: 0 auto; }
.controls { display:flex; gap:12px; margin:12px 0; }
h2 { margin-bottom: 8px; }
</style>