<template>
  <ion-page>
    <DashboardLayout titulo="KPIs" class="kpis-scrollable">

      <section class="kpis-content">
        <section class="kpis-shell">

          <!-- KPIs NEGOCIO -->
          <section class="section-card">
            <div class="section-heading">
              <h2 class="section-title">KPIs de Negocio</h2>
              <p class="section-subtitle">Mide tráfico, conversión, ticket medio y soporte comercial.</p>
            </div>

            <ion-accordion-group :multiple="true" class="kpis-grid">
              <ion-accordion
                v-for="(item, idx) in negocioItems"
                :key="`neg-${idx}`"
                :value="`neg-${idx}`"
              >
                <ion-item slot="header" lines="none" class="kpi-header-item">
                  <ion-label>{{ idx + 1 }}. {{ item.title }}</ion-label>
                </ion-item>

                <div class="kpi-content" slot="content">
                  <p>{{ item.content }}</p>
                </div>
              </ion-accordion>
            </ion-accordion-group>
          </section>

          <!-- KPIs TECNICOS -->
          <section class="section-card section-spacing">
            <div class="section-heading">
              <h2 class="section-title">KPIs Técnicos</h2>
              <p class="section-subtitle">Controla rendimiento, disponibilidad, carga y estado operativo.</p>
            </div>

            <ion-accordion-group :multiple="true" class="kpis-grid">
              <ion-accordion
                v-for="(item, idx) in tecnicoItems"
                :key="`tec-${idx}`"
                :value="`tec-${idx}`"
              >
                <ion-item slot="header" lines="none" class="kpi-header-item">
                  <ion-label>{{ idx + 1 }}. {{ item.title }}</ion-label>
                </ion-item>

                <div class="kpi-content" slot="content">
                  <p>{{ item.content }}</p>
                </div>
              </ion-accordion>
            </ion-accordion-group>
          </section>

        </section>
      </section>

    </DashboardLayout>
  </ion-page>
</template>

<script setup>
import { ref } from "vue";
import DashboardLayout from "@/components/DashboardLayout.vue";

import {
  IonPage,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel
} from "@ionic/vue";

/* datos */
const negocioItems = ref([
  {
    title: "Tráfico y ventas 24h",
    content: "Vistas: 7.460 — Visitas: 3.735 — Ventas estimadas: 34 — Conversión media: 2.8%"
  },
  {
    title: "Tasa de conversión por canal",
    content: "Google/Orgánico lidera el volumen, mientras Instagram y YouTube sostienen el alcance y Facebook aporta conversión final."
  },
  {
    title: "Valor medio pedido",
    content: "Ticket medio: 72.50€ | Objetivo: subir el importe por pedido sin bajar conversión."
  },
  {
    title: "Producto y tráfico principal",
    content: "Los productos más vistos deben convertirse mejor: iPhone 17, Nike y North Face funcionan como referencia de demanda."
  },
  {
    title: "Atención al cliente",
    content: "Tickets abiertos: 12 | KPI de soporte para medir carga operativa y velocidad de respuesta."
  }
]);

const tecnicoItems = ref([
  {
    title: "Tiempo de respuesta API",
    content: "Latencia media: 210ms | p95: 450ms. KPI clave para asegurar una experiencia rápida y estable."
  },
  {
    title: "Errores y disponibilidad",
    content: "5xx hoy: 3 | Objetivo: detectar incidencias antes de que impacten la conversión o el servicio."
  },
  {
    title: "Carga de infraestructura",
    content: "CPU: 66% | RAM: 57% | Disco: 57% | Red: 11%. Sirve para ver si el sistema está cerca del límite."
  },
  {
    title: "Peticiones y rendimiento",
    content: "Peticiones API: 21.0K | Rendimiento del servidor monitorizado por hora para detectar picos anómalos."
  },
  {
    title: "Estado operativo",
    content: "Servicios online, cola de pedidos y logs recientes ayudan a medir la salud real de la plataforma."
  }
]);
</script>

<style scoped>
.kpis-content {
  display: block;
  --background: linear-gradient(180deg, #0b1020 0%, #10162a 100%);
}

:global(.kpis-scrollable .dashboard-content) {
  --overflow: auto;
}

:global(.kpis-scrollable .dashboard-content::part(scroll)) {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

@media (min-width: 1024px) {
  :global(.kpis-scrollable .dashboard-content) {
    --overflow: auto;
  }
}

.kpis-shell {
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: 0;
}

.section-card {
  background: linear-gradient(180deg, rgba(17, 24, 44, 0.95) 0%, rgba(12, 17, 32, 0.95) 100%);
  border: 1px solid #2f3656;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28);
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}

.kpis-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.section-title {
  margin: 0;
  color: #c4b5fd; /* lila del sidebar */
  font-size: 25px;
  line-height: 1.1;
  letter-spacing: 0.01em;
  font-weight: 900;
}

.section-subtitle {
  margin: 0;
  color: #aab2d4;
  font-size: 13px;
  line-height: 1.4;
}

.section-spacing {
  margin-top: 18px;
}

.kpi-header-item {
  --background: linear-gradient(135deg, rgba(23, 29, 49, 0.98), rgba(28, 36, 60, 0.98));
  --color: #f3f4ff;
  --inner-padding-top: 8px;
  --inner-padding-bottom: 8px;
  --inner-padding-start: 14px;
  --inner-padding-end: 14px;

  border: 1px solid #2f3656;
  border-radius: 14px;
  margin-bottom: 0;

  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
}

.kpi-header-item::part(native) {
  background: linear-gradient(135deg, rgba(23, 29, 49, 0.98), rgba(28, 36, 60, 0.98));
  color: #f3f4ff;
  border-radius: 14px;
}

.kpi-header-item ion-label {
  color: #f3f4ff;
}

.kpi-content {
  background: #0f1527;
  border: 1px solid #2f3656;
  border-top: 0;
  border-radius: 0 0 14px 14px;
  color: #d7dcff;
  padding: 14px 14px 15px;
  margin-top: -1px;
  margin-bottom: 0;
  line-height: 1.55;
}

/* textarea */
.admin-notes {
  margin-top: 8px;
  --background: #171d31;
  --color: #edf0ff;
  --placeholder-color: #8f96b8;
  --padding-start: 12px;
  --padding-end: 12px;
  border: 1px solid #2f3656;
  border-radius: 10px;
  min-height: 72px;
}

:global(.kpis-scrollable .kpis-shell ion-item) {
  --background: transparent;
  --color: #f3f4ff;
}

:global(.kpis-scrollable .kpis-shell ion-label) {
  color: #f3f4ff;
}

:global(.kpis-scrollable .kpis-shell p) {
  color: #d7dcff;
}

:global(.kpis-scrollable .kpis-shell ion-accordion) {
  display: block;
  --background: #0f1527;
  background: transparent;
}

:global(.kpis-scrollable .kpis-shell ion-accordion ion-item::part(native)) {
  background: linear-gradient(135deg, rgba(23, 29, 49, 0.98), rgba(28, 36, 60, 0.98));
  color: #f3f4ff;
  border-radius: 14px;
}

:global(.kpis-scrollable .kpis-shell ion-accordion::part(content)) {
  background: #0f1527;
  border-radius: 0 0 14px 14px;
  color: #d7dcff;
  --background: #0f1527;
}

:global(.kpis-scrollable .kpis-shell ion-accordion ion-item) {
  --background: transparent;
  --color: #f3f4ff;
}

:global(.kpis-scrollable .kpis-shell ion-accordion ion-item::part(native)) {
  background: linear-gradient(135deg, rgba(23, 29, 49, 0.98), rgba(28, 36, 60, 0.98));
  color: #f3f4ff;
}

:global(.kpis-scrollable .kpis-shell ion-accordion .kpi-content) {
  background: #0f1527;
  color: #d7dcff;
}

:global(.kpis-scrollable .kpis-shell ion-accordion .kpi-content p) {
  color: #d7dcff;
}

:global(.kpis-scrollable .kpis-shell ion-label) {
  font-size: 15px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .kpis-shell {
    padding: 0;
  }

  .section-card {
    padding: 14px;
    border-radius: 18px;
  }

  .kpis-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 22px;
  }
}
</style>