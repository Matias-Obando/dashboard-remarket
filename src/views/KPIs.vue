<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>KPIs</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>KPIs de Negocio</h2>

      <ion-accordion-group>
        <ion-accordion v-for="(item, idx) in negocioItems" :key="idx" :value="`neg-${idx}`">
          <ion-item slot="header" lines="none">
            <ion-label>
              {{ idx + 1 }} - {{ item.title }}
            </ion-label>
            <ion-icon slot="end" name="chevron-down-outline"></ion-icon>
          </ion-item>
          <div class="ion-padding" slot="content">
            {{ item.content }}
          </div>
        </ion-accordion>
      </ion-accordion-group>

      <h2 style="margin-top: 24px;">KPIs Técnicos</h2>

      <ion-accordion-group>
        <ion-accordion v-for="(item, idx) in tecnicoItems" :key="idx" :value="`tec-${idx}`">
          <ion-item slot="header" lines="none">
            <ion-label>
              {{ idx + 1 }} - {{ item.title }}
            </ion-label>
            <ion-icon slot="end" name="chevron-down-outline"></ion-icon>
          </ion-item>
          <div class="ion-padding" slot="content">
            {{ item.content }}
          </div>
        </ion-accordion>
      </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

/* Datos mock para la vista KPIs - tu compañero puede sustituirlos por la store/axios */
const negocioItems = ref([
  { title: 'Ventas últimas 24h', content: 'Visitas: 1200 — Ventas: 34 — Conversión: 2.8%' },
  { title: 'Tasa de conversión', content: 'Conversión por canal: Orgánico 3.1%, Ads 1.9%' },
  { title: 'Valor medio pedido', content: 'Valor medio: 72.50€' },
  { title: 'Productos más vistos', content: 'iPhone 17, Zapatillas Nike, Chaqueta North Face' },
  { title: 'Tickets abiertos', content: 'Soporte: 12 tickets pendientes' }
]);

const tecnicoItems = ref([
  { title: 'Tiempo de respuesta API', content: 'Media: 210ms — 95p: 450ms' },
  { title: 'Errores 5xx hoy', content: 'Total: 3 — Origen: /api/orders' },
  { title: 'Uso de CPU (servicio)', content: 'Servicio A: 32% — Servicio B: 58%' },
  { title: 'Estado colas', content: 'Cola pedidos: OK — Cola mails: 120 mensajes' },
  { title: 'Despliegues', content: 'Último deploy: 2026-04-15 12:34 by CI' }
]);
</script>

<style scoped>
ion-content {
  --background: var(--ion-background-color, #fff);
}
h2 {
  margin: 12px 0;
  font-weight: 700;
}
</style>
