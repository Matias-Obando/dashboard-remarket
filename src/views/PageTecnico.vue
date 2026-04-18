<template>
  <ion-page>
    <ion-content class="fit-content">
      <section class="dashboard-shell">
        <div class="top-cards">
          <article v-for="(item, i) in topCards" :key="i" class="tile metric">
            <p>{{ item.label }}</p>
            <h3>{{ item.value }}</h3>
            <small>{{ item.delta }}</small>
          </article>
        </div>

        <div class="middle-grid">
          <article class="tile tile-big">
            <div class="tile-head">
              <h4>API p95 Latency</h4>
              <small>ms por mes</small>
            </div>
            <ApexMiniArea :categories="months" :values="latencySeries" label="Latency" :height="190" />
          </article>

          <article class="tile tile-small">
            <h4>Service Usage</h4>
            <CustomBars :items="serviceUsage" />
          </article>
        </div>

        <div class="bottom-grid">
          <article class="tile">
            <h4>Error Types</h4>
            <ChartJSWrapper :labels="errorLabels" :values="errorValues" dataset-label="Errores" :height="170" />
          </article>

          <article class="tile">
            <h4>Incidents by Area</h4>
            <EChartDonut :data="incidentShare" :height="170" :colors="incidentColors" />
          </article>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import ChartJSWrapper from '../components/ChartJSWrapper.vue';
import ApexMiniArea from '../components/ApexMiniArea.vue';
import EChartDonut from '../components/EChartDonut.vue';
import CustomBars from '../components/CustomBars.vue';

const topCards = [
  { label: 'Availability', value: '99.94%', delta: '+0.02%' },
  { label: 'API p95', value: '240ms', delta: '-18ms' },
  { label: '5xx Errors', value: '5', delta: '-2' },
  { label: 'CPU Cluster', value: '62%', delta: '+4%' }
];

const serviceUsage = [
  { label: 'API Gateway', value: 71, color: '#1f5fbf' },
  { label: 'Orders', value: 62, color: '#2f73d9' },
  { label: 'Payments', value: 57, color: '#17a2b8' },
  { label: 'Search', value: 49, color: '#2fc66b' },
  { label: 'Notifications', value: 44, color: '#f59e0b' }
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const latencySeries = [290, 275, 268, 254, 248, 241, 236];
const errorLabels = ['Timeout', 'Auth', 'DB', '3rd party', 'Rate limit'];
const errorValues = [12, 7, 9, 4, 6];
const incidentShare = [
  { name: 'Backend', value: 34 },
  { name: 'Frontend', value: 18 },
  { name: 'Infra', value: 27 },
  { name: 'Data', value: 11 },
  { name: 'Integraciones', value: 10 }
];

const incidentColors = ['#0ea5e9', '#22c55e', '#f97316', '#ef4444', '#64748b'];
</script>

<style scoped>
.dashboard-shell {
  display: grid;
  gap: 10px;
  padding: 2px;
}

.top-cards {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.middle-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: 3fr 1fr;
}

.bottom-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
}

.tile {
  background: #ffffff;
  border: 1px solid #eadff9;
  border-radius: 14px;
  padding: 10px;
  box-shadow: 0 8px 22px rgba(86, 46, 170, 0.07);
}

.metric p {
  margin: 0;
  color: #7a6f90;
  font-size: 13px;
}

.metric h3 {
  margin: 4px 0;
  color: #241738;
  font-size: clamp(18px, 2.4vw, 28px);
}

.metric small {
  color: #6d28d9;
}

h4 {
  margin: 0 0 8px;
  color: #241738;
  font-size: 14px;
}

@media (min-width: 1024px) {
  .fit-content {
    --overflow: hidden;
  }

  .dashboard-shell {
    min-height: calc(100vh - 132px);
    grid-template-rows: auto 1fr 1fr;
  }
}

.tile-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.tile-head small {
  color: #7b6b97;
}

@media (max-width: 1200px) {
  .top-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .middle-grid {
    grid-template-columns: 1fr;
  }

  .bottom-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .top-cards {
    grid-template-columns: 1fr;
  }
}
</style>