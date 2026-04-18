<template>
  <ion-page>
    <ion-content class="kpis-content">
      <section class="kpis-shell">
        <h2 class="section-title">KPIs de Negocio</h2>
        <ion-accordion-group :multiple="true">
          <ion-accordion
            v-for="(item, idx) in negocioItems"
            :key="`neg-${idx}`"
            :value="`neg-${idx}`"
          >
            <ion-item slot="header" lines="full" class="kpi-header-item">
              <ion-label>{{ idx + 1 }}. {{ item.title }}</ion-label>
            </ion-item>
            <div class="kpi-content" slot="content">
              {{ item.content }}
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <section class="section-spacing">
          <h2 class="section-title">KPIs Técnicos</h2>
          <ion-accordion-group :multiple="true">
            <ion-accordion
              v-for="(item, idx) in tecnicoItems"
              :key="`tec-${idx}`"
              :value="`tec-${idx}`"
            >
              <ion-item slot="header" lines="full" class="kpi-header-item">
                <ion-label>{{ idx + 1 }}. {{ item.title }}</ion-label>
              </ion-item>
              <div class="kpi-content" slot="content">
                {{ item.content }}
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </section>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
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
.kpis-content {
  --background: linear-gradient(180deg, #f8f5ff 0%, #f3f5fb 100%);
}

.kpis-shell {
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: 12px;
}

.section-title {
  margin: 0 0 12px;
  color: #241738;
  font-size: 30px;
  line-height: 1.1;
  letter-spacing: 0.01em;
}

.section-spacing {
  margin-top: 26px;
}

.kpi-header-item {
  --background: #ffffff;
  --color: #241738;
  --inner-padding-top: 8px;
  --inner-padding-bottom: 8px;
  --inner-padding-start: 12px;
  --inner-padding-end: 12px;
  border: 1px solid #eadff9;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 8px 22px rgba(86, 46, 170, 0.07);
}

.kpi-content {
  background: #fbf8ff;
  border: 1px solid #eadff9;
  border-top: 0;
  border-radius: 0 0 10px 10px;
  color: #4a3e62;
  padding: 12px 14px;
  margin-top: -10px;
  margin-bottom: 10px;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .kpis-shell {
    padding: 10px;
  }

  .section-title {
    font-size: 24px;
  }
}
</style>