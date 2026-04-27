<template>
  <ion-page>
    <ion-content class="fit-content dashboard-content">
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
              <h4>Total Users</h4>
              <small>Este ano vs ano pasado</small>
            </div>
            <ApexMiniArea :categories="months" :values="usersSeries" label="Usuarios" :height="190" />
          </article>

          <article class="tile tile-small">
            <h4>Traffic by Website</h4>
            <ul class="list-lines">
              <li v-for="(site, i) in trafficSites" :key="i">
                <span>{{ site.name }}</span>
                <strong>{{ site.value }}</strong>
              </li>
            </ul>
          </article>
        </div>

        <div class="bottom-grid">
          <article class="tile">
            <h4>Traffic by Device</h4>
            <ChartJSWrapper :labels="deviceLabels" :values="deviceValues" dataset-label="Sesiones" :height="170" />
          </article>

          <article class="tile">
            <h4>Traffic by Location</h4>
            <EChartDonut :data="countryShare" :height="170" :colors="countryColors" />
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

const topCards = [
  { label: 'Views', value: '7,265', delta: '+11.01%' },
  { label: 'Visits', value: '3,671', delta: '-0.03%' },
  { label: 'New Users', value: '256', delta: '+15.03%' },
  { label: 'Active Users', value: '2,318', delta: '+6.08%' }
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const usersSeries = [12, 14, 13, 24, 28, 22, 26];

const trafficSites = [
  { name: 'Google', value: '31%' },
  { name: 'YouTube', value: '22%' },
  { name: 'Instagram', value: '16%' },
  { name: 'Pinterest', value: '12%' },
  { name: 'Facebook', value: '11%' },
  { name: 'Twitter', value: '8%' }
];

const deviceLabels = ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'];
const deviceValues = [17, 30, 22, 34, 13, 26];

const countryShare = [
  { name: 'United States', value: 52.1 },
  { name: 'Canada', value: 22.8 },
  { name: 'Mexico', value: 13.9 },
  { name: 'Other', value: 11.2 }
];

const countryColors = ['#6d28d9', '#2563eb', '#14b8a6', '#f59e0b'];
</script>

<style scoped>
.dashboard-shell {
  display: grid;
  gap: 8px;
  padding: 0;
}

.top-cards {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.middle-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: 3fr 1fr;
}

.bottom-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
}

.tile {
  background: #ffffff;
  border: 1px solid #eadff9;
  border-radius: 12px;
  padding: 8px 10px;
  box-shadow: 0 8px 22px rgba(86, 46, 170, 0.07);
}

.metric p {
  margin: 0;
  color: #7a6f90;
  font-size: 12px;
}

.metric h3 {
  margin: 2px 0;
  color: #241738;
  font-size: clamp(16px, 2vw, 24px);
}

.metric small {
  color: #6d28d9;
}

h4 {
  margin: 0 0 6px;
  color: #241738;
  font-size: 13px;
}

.tile-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.tile-head small {
  color: #7b6b97;
  font-size: 12px;
}

.list-lines {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.list-lines li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #eadff9;
  padding-bottom: 4px;
  color: #403554;
  font-size: 12px;
}

@media (min-width: 1024px) {
  .fit-content {
    --overflow: hidden;
  }

  .dashboard-shell {
    height: calc(100dvh - 132px);
    grid-template-rows: auto minmax(0, 1fr) minmax(0, 1fr);
  }
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