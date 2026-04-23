<template>
  <ion-page>
    <DashboardLayout titulo="Técnico">
      <ion-grid>

        <!-- FILA 1: 4 TARJETAS SPARK -->
        <ion-row>
          <ion-col size="12" size-md="3">
            <SparkCard
              title="Errores"
              :value="errorsValue.toString()"
              :icon="bugOutline"
              bgClass="gradient-purple"
              :chartOptions="sparkOptions"
              :chartSeries="errorsSeries"
            />
          </ion-col>

          <ion-col size="12" size-md="3">
            <SparkCard
              title="Usuarios Online"
              :value="onlineUsersValue.toLocaleString()"
              :icon="peopleOutline"
              bgClass="gradient-blue"
              :chartOptions="sparkOptions"
              :chartSeries="activeUsersSeries"
            />
          </ion-col>

          <ion-col size="12" size-md="3">
            <SparkCard
              title="Latencia API"
              :value="latencyValue + ' ms'"
              :icon="speedometerOutline"
              bgClass="gradient-red"
              :chartOptions="sparkOptions"
              :chartSeries="latencySeries"
            />
          </ion-col>

          <ion-col size="12" size-md="3">
            <SparkCard
              title="Peticiones API"
              :value="(apiRequestsValue / 1000).toFixed(1) + 'K'"
              :icon="cloudOutline"
              bgClass="gradient-green"
              :chartOptions="sparkOptions"
              :chartSeries="apiRequestsSeries"
            />
          </ion-col>
        </ion-row>

        <!-- FILA 2: Rendimiento Servidor + Uso Recursos -->
        <ion-row>
          <ion-col size="12" size-md="8">
            <ion-card class="dark-card">
              <ion-card-header>
                <ion-card-title>Rendimiento del Servidor</ion-card-title>
              </ion-card-header>

              <ion-card-content style="height: 250px;">
                <canvas ref="serverChart"></canvas>
              </ion-card-content>
            </ion-card>
          </ion-col>

          <ion-col size="12" size-md="4">
            <ion-card class="dark-card">
              <ion-card-header>
                <ion-card-title>Uso de Recursos</ion-card-title>
              </ion-card-header>

              <ion-card-content class="resource-list">
                <div
                  v-for="item in resourceData"
                  :key="item.name"
                  class="resource-item"
                >
                  <div class="resource-header">
                    <span>{{ item.name }}</span>
                    <span>{{ item.value }}%</span>
                  </div>

                  <div class="progress-bar">
                    <div
                      class="progress-fill"
                      :style="{ width: item.value + '%', backgroundColor: item.color }"
                    ></div>
                  </div>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <!-- FILA 3: Logs + Estado Servicios -->
        <ion-row>
          <ion-col size="12" size-md="6">
            <ion-card class="dark-card">
              <ion-card-header>
                <ion-card-title>Logs Recientes</ion-card-title>
              </ion-card-header>

              <ion-card-content class="logs-box">
                <div
                  v-for="(log, index) in logsData"
                  :key="index"
                  class="log-item"
                >
                  <span class="log-tag" :class="log.type">{{ log.type }}</span>
                  <span class="log-text">{{ log.message }}</span>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>

          <ion-col size="12" size-md="6">
            <ion-card class="dark-card">
              <ion-card-header>
                <ion-card-title>Estado de Servicios</ion-card-title>
              </ion-card-header>

              <ion-card-content class="services-box">
                <div
                  v-for="service in servicesData"
                  :key="service.name"
                  class="service-item"
                >
                  <span class="service-name">{{ service.name }}</span>

                  <span
                    class="service-status"
                    :class="service.status"
                  >
                    {{ service.statusText }}
                  </span>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

      </ion-grid>
    </DashboardLayout>
  </ion-page>
</template>

<script setup lang="ts">
import DashboardLayout from "@/components/DashboardLayout.vue";
import SparkCard from "@/components/SparkCard.vue";

import { ref, onMounted } from "vue";

import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/vue";

import {
  bugOutline,
  peopleOutline,
  speedometerOutline,
  cloudOutline
} from "ionicons/icons";

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

/* ---------------------------
   SPARKLINE CONFIG (APEX)
---------------------------- */
const sparkOptions = {
  chart: {
    sparkline: { enabled: true },
    toolbar: { show: false }
  },
  stroke: {
    curve: "smooth",
    width: 3
  },
  fill: {
    opacity: 0.3
  },
  colors: ["#ffffff"],
  tooltip: { enabled: false },
  grid: { show: false },
  xaxis: { labels: { show: false } },
  yaxis: { labels: { show: false } }
};

/* ---------------------------
   VALUES (DYNAMIC)
---------------------------- */
const errorsValue = ref(12);
const onlineUsersValue = ref(239);
const latencyValue = ref(280);
const apiRequestsValue = ref(12500);

/* ---------------------------
   SPARK SERIES (APEX)
---------------------------- */
const errorsSeries = ref([{ data: [2, 5, 3, 7, 6, 8, 9, 12] }]);
const activeUsersSeries = ref([{ data: [120, 150, 180, 210, 200, 230, 240, 239] }]);
const latencySeries = ref([{ data: [220, 250, 240, 280, 300, 290, 310, 280] }]);
const apiRequestsSeries = ref([{ data: [5000, 7000, 6500, 9000, 11000, 12000, 12500, 12500] }]);

/* ---------------------------
   SERVER PERFORMANCE CHART
---------------------------- */
const serverChart = ref<HTMLCanvasElement | null>(null);
let serverChartInstance: Chart | null = null;

/* ---------------------------
   RESOURCE DATA (DYNAMIC)
---------------------------- */
const resourceData = ref([
  { name: "CPU", value: 68, color: "#7c3aed" },
  { name: "RAM", value: 72, color: "#a78bfa" },
  { name: "Disco", value: 54, color: "#22c55e" },
  { name: "Red", value: 30, color: "#9ca3af" }
]);

/* ---------------------------
   LOGS DATA
---------------------------- */
const logsData = ref([
  { type: "INFO", message: "Login correcto usuario #1023" },
  { type: "WARN", message: "Stock bajo producto #450 (Camiseta Barça)" },
  { type: "ERROR", message: "Pago rechazado en Stripe" },
  { type: "ERROR", message: "Timeout en /api/orders" },
  { type: "INFO", message: "Nuevo pedido generado #8932" }
]);

/* ---------------------------
   SERVICES STATUS
---------------------------- */
const servicesData = ref([
  { name: "API Orders", status: "online", statusText: "Online" },
  { name: "API Payments", status: "online", statusText: "Online" },
  { name: "Base de Datos", status: "online", statusText: "Online" },
  { name: "Servicio de Envíos", status: "slow", statusText: "Lento" },
  { name: "Email Service", status: "down", statusText: "Down" }
]);

/* ---------------------------
   ON MOUNTED (ALL REAL TIME)
---------------------------- */
onMounted(() => {

  /* CHART GRANDE SERVER */
  if (serverChart.value) {
    serverChartInstance = new Chart(serverChart.value, {
      type: "line",
      data: {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
        datasets: [
          {
            label: "CPU (%)",
            data: [30, 45, 60, 55, 70, 65, 68],
            borderColor: "#ffffff",
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: "#ffffff"
          },
          {
            label: "RAM (%)",
            data: [40, 50, 62, 68, 72, 75, 73],
            borderColor: "#a78bfa",
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: "#a78bfa"
          },
          {
            label: "Latencia (ms)",
            data: [200, 250, 300, 280, 350, 320, 280],
            borderColor: "#22c55e",
            borderDash: [6, 6],
            tension: 0.4,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "white",
              usePointStyle: true
            }
          }
        },
        scales: {
          x: {
            ticks: { color: "white" },
            grid: { display: false }
          },
          y: {
            ticks: { color: "white" },
            grid: { color: "rgba(255,255,255,0.2)" }
          }
        }
      }
    });
  }

  /* INTERVAL GENERAL (SPARK + VALUES + RESOURCES) */
  setInterval(() => {

    // Valores dinámicos
    errorsValue.value += Math.floor(Math.random() * 3) - 1;
    if (errorsValue.value < 0) errorsValue.value = 0;

    onlineUsersValue.value += Math.floor(Math.random() * 20) - 10;
    if (onlineUsersValue.value < 0) onlineUsersValue.value = 0;

    latencyValue.value += Math.floor(Math.random() * 40) - 20;
    if (latencyValue.value < 80) latencyValue.value = 80;

    apiRequestsValue.value += Math.floor(Math.random() * 500) + 200;

    // Actualizar series sparkline
    errorsSeries.value[0].data.shift();
    errorsSeries.value[0].data.push(errorsValue.value);

    activeUsersSeries.value[0].data.shift();
    activeUsersSeries.value[0].data.push(onlineUsersValue.value);

    latencySeries.value[0].data.shift();
    latencySeries.value[0].data.push(latencyValue.value);

    apiRequestsSeries.value[0].data.shift();
    apiRequestsSeries.value[0].data.push(apiRequestsValue.value);

    // Recursos dinámicos
    resourceData.value[0].value = Math.floor(Math.random() * 40) + 40;
    resourceData.value[1].value = Math.floor(Math.random() * 30) + 50;
    resourceData.value[2].value = Math.floor(Math.random() * 30) + 30;
    resourceData.value[3].value = Math.floor(Math.random() * 40) + 10;

  }, 3000);

  /* INTERVAL PARA ACTUALIZAR EL CHART GRANDE */
  setInterval(() => {
    if (!serverChartInstance) return;

    const cpu = Math.floor(Math.random() * 40) + 30;
    const ram = Math.floor(Math.random() * 30) + 50;
    const latency = Math.floor(Math.random() * 200) + 200;

    serverChartInstance.data.datasets[0].data.shift();
    serverChartInstance.data.datasets[0].data.push(cpu);

    serverChartInstance.data.datasets[1].data.shift();
    serverChartInstance.data.datasets[1].data.push(ram);

    serverChartInstance.data.datasets[2].data.shift();
    serverChartInstance.data.datasets[2].data.push(latency);

    serverChartInstance.update();
  }, 2500);

});
</script>

<style scoped>
.dark-card {
  background: #7247bd;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.2);
}

.dark-card ion-card-title {
  color: white;
  font-weight: 700;
}

.dark-card ion-card-content {
  color: rgba(255,255,255,0.9);
}

/* Recursos */
.resource-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.resource-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 5px;
  color: white;
}

.progress-bar {
  width: 100%;
  height: 7px;
  background: rgba(255,255,255,0.15);
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.4s ease;
}

/* Logs */
.logs-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.log-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.log-tag {
  font-weight: 800;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 10px;
  color: white;
  min-width: 60px;
  text-align: center;
}

.log-tag.INFO {
  background: #2563eb;
}

.log-tag.WARN {
  background: #f59e0b;
}

.log-tag.ERROR {
  background: #ef4444;
}

.log-text {
  opacity: 0.9;
}

/* Servicios */
.services-box {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.service-item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.service-name {
  font-weight: 600;
  color: white;
}

.service-status {
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
}

.service-status.online {
  background: rgba(34, 197, 94, 0.25);
  color: #a7f3d0;
}

.service-status.slow {
  background: rgba(245, 158, 11, 0.25);
  color: #fde68a;
}

.service-status.down {
  background: rgba(239, 68, 68, 0.25);
  color: #fecaca;
}
</style>