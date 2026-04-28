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
                  <p v-html="item.content"></p>
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
                  <p v-html="item.content"></p>
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
    content: "<strong>S:</strong> Incrementar el volumen de transacciones diarias confirmadas\n<strong>M:</strong> De 850 a 1,200 ventas (incremento del 41%)\n<strong>A:</strong> Optimizando el flujo de checkout y reduciendo los errores de pago en Stripe\n<strong>R:</strong> Para maximizar los ingresos directos por comisiones de venta\n<strong>T:</strong> En los próximos 30 días"
  },
  {
    title: "Tasa de conversión por canal",
    content: "<strong>S:</strong> Mejorar la conversión del tráfico proveniente de Google (80% del total)\n<strong>M:</strong> Pasar de 3.2% al 4.5%\n<strong>A:</strong> Implementando mejoras de SEO técnico y descripciones automáticas por IA\n<strong>R:</strong> Aprovechar el alto volumen de tráfico orgánico actual\n<strong>T:</strong> Durante el presente trimestre"
  },
  {
    title: "Valor medio pedido",
    content: "<strong>S:</strong> Aumentar el gasto promedio por usuario en cada transacción\n<strong>M:</strong> De 35€ a 45€ por pedido\n<strong>A:</strong> Crear un sistema de 'Cross-selling' (productos relacionados) en el carrito\n<strong>R:</strong> Aumentar la rentabilidad de cada usuario activo\n<strong>T:</strong> En los siguientes 60 días"
  },
  {
    title: "Producto y tráfico principal",
    content: "<strong>S:</strong> Mantener el liderazgo de 'Electrónica' como motor de la app\n<strong>M:</strong> Asegurar que el 60% de las vistas totales pertenezcan a esta categoría\n<strong>A:</strong> Lanzar campañas específicas de 'Renovación Tecnológica'\n<strong>R:</strong> Consolidar la identidad de marca como referente en tecnología usada\n<strong>T:</strong> Durante todo el semestre"
  },
  {
    title: "Atención al cliente (Satisfaction Score)",
    content: "<strong>S:</strong> Recuperar el índice de satisfacción del usuario\n<strong>M:</strong> De 6.5 a 8.5 sobre 10\n<strong>A:</strong> Reparar el 'Email Service' que actualmente está Down\n<strong>R:</strong> Evitar la fuga de usuarios (Churn Rate) por falta de comunicación\n<strong>T:</strong> En los próximos 15 días"
  }
]);

const tecnicoItems = ref([
  {
    title: "Tiempo de respuesta API",
    content: "<strong>S:</strong> Reducir la latencia media de respuesta de los servidores\n<strong>M:</strong> Mantenerla por debajo de 250ms (actualmente en 280ms)\n<strong>A:</strong> Optimizando las consultas a la base de datos y usando caché de borde\n<strong>R:</strong> Para garantizar que el chat sea instantáneo y no haya fricción\n<strong>T:</strong> De forma permanente, con revisión semanal"
  },
  {
    title: "Errores y disponibilidad (Uptime)",
    content: "<strong>S:</strong> Minimizar el número de errores de servidor reportados en los logs\n<strong>M:</strong> Reducir los errores críticos de 12 a menos de 2 por semana\n<strong>A:</strong> Depurando el timeout en /api/orders y los fallos de Stripe detectados\n<strong>R:</strong> Para asegurar la estabilidad del proceso de compra\n<strong>T:</strong> En los próximos 7 días"
  },
  {
    title: "Carga de infraestructura",
    content: "<strong>S:</strong> Estabilizar el consumo de memoria RAM de los servidores\n<strong>M:</strong> Bajar del 72% actual a un máximo operativo del 55%\n<strong>A:</strong> Implementando un sistema de microservicios para el procesamiento de imágenes\n<strong>R:</strong> Para evitar caídas del sistema por desbordamiento de memoria\n<strong>T:</strong> En los siguientes 20 días"
  },
  {
    title: "Peticiones y rendimiento (Throughput)",
    content: "<strong>S:</strong> Aumentar la capacidad de peticiones API procesadas simultáneamente\n<strong>M:</strong> Soportar de 12.5K a 18K peticiones sin aumentar la latencia\n<strong>A:</strong> Configurando el auto-escalado horizontal en la nube\n<strong>R:</strong> Para estar preparados para el pico de tráfico del lanzamiento de producto\n<strong>T:</strong> Antes del día 15 del próximo mes"
  },
  {
    title: "Estado operativo (Service Recovery)",
    content: "<strong>S:</strong> Restablecer la funcionalidad de los servicios críticos caídos\n<strong>M:</strong> Pasar el 'Email Service' de estado Down a Online\n<strong>A:</strong> Migrando el servicio de correos a un proveedor con mayor redundancia\n<strong>R:</strong> Para restaurar el flujo de notificaciones y validaciones de cuenta\n<strong>T:</strong> En las próximas 24 horas"
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
  white-space: pre-wrap;
  word-wrap: break-word;
}

.kpi-content strong {
  color: #c4b5fd;
  font-weight: 700;
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

:global(.kpis-scrollable .kpis-shell .kpi-content p) {
  color: #d7dcff;
  white-space: pre-wrap;
  word-wrap: break-word;
}

:global(.kpis-scrollable .kpis-shell .kpi-content strong) {
  color: #c4b5fd;
  font-weight: 700;
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
  white-space: pre-wrap;
  word-wrap: break-word;
}

:global(.kpis-scrollable .kpis-shell ion-accordion .kpi-content strong) {
  color: #c4b5fd;
  font-weight: 700;
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