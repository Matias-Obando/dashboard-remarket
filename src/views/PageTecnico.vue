<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-title>Técnico</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <h3>Panel técnico (mock)</h3>
      <ion-list>
        <ion-item v-for="(it, i) in items" :key="i">
          <ion-label>
            <h3>{{ it.title }}</h3>
            <p>{{ it.detail }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
const items = ref([
  { title: 'Tiempo respuesta API', detail: '200ms' },
  { title: 'Errores 5xx hoy', detail: '3' }
]);
</script>