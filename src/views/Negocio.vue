<template>
  <ion-page>
    <DashboardLayout titulo="Negocio">
      <ion-grid class="dashboard-grid">

        <!-- FILA 1: 4 TARJETAS SPARK -->
        <ion-row>
          <ion-col size="12" size-md="3">
            <SparkCard
              title="Vistas"
              :value="viewsValue.toLocaleString()"
              :icon="eyeOutline"
              bgClass="gradient-violet"
              :chartOptions="sparkOptions"
              :chartSeries="viewsSeries"
            />
          </ion-col>

          <ion-col size="12" size-md="3">
            <SparkCard
              title="Visitas"
             :value="visitsValue.toLocaleString()"
              :icon="navigateOutline"
              bgClass="gradient-cyan"
              :chartOptions="sparkOptions"
              :chartSeries="visitsSeries"
            />
          </ion-col>

          <ion-col size="12" size-md="3">
            <SparkCard
              title="Nuevos Usuarios"
              :value="newUsersValue.toLocaleString()"
              :icon="personAddOutline"
              bgClass="gradient-amber"
              :chartOptions="sparkOptions"
              :chartSeries="newUsersSeries"
            />
          </ion-col>

          <ion-col size="12" size-md="3">
            <SparkCard
              title="Usuarios Activos"
             :value="activeUsersValue.toLocaleString()"
              :icon="peopleOutline"
              bgClass="gradient-lime"
              :chartOptions="sparkOptions"
              :chartSeries="activeUsersSeries"
            />
          </ion-col>
        </ion-row>

        <!-- FILA 2: Total Users + Traffic Website -->
        <ion-row>
          <ion-col size="12" size-md="8">
            <ion-card class="dark-card total-users-card">
              <ion-card-header>
                <ion-card-title>Total Usuarios</ion-card-title>
              </ion-card-header>

          <ion-card-content style="height: 240px;">
           <ApexMiniArea
            :categories="months"
            :values="usersValues"
            label="Usuarios Activos"
            :height="200"
           />
          </ion-card-content>
            </ion-card>
          </ion-col>

          <ion-col size="12" size-md="4" class="traffic-col">
            <ion-card class="dark-card traffic-card">
              <ion-card-header>
                <ion-card-title>Tráfico por Website</ion-card-title>
              </ion-card-header>

              <ion-card-content class="traffic-list">
                <div v-for="item in trafficData" :key="item.name" class="traffic-item">
                  <div class="traffic-header">
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

        <!-- FILA 3: Device + Location -->
        <ion-row>
          <ion-col size="12" size-md="6">
            <ion-card class="dark-card device-card">
              <ion-card-header>
                <ion-card-title>Tráfico por Dispositivos</ion-card-title>
              </ion-card-header>

              <ion-card-content style="height: 160px;">
                <canvas ref="barChart"></canvas>
              </ion-card-content>
            </ion-card>
          </ion-col>

          <ion-col size="12" size-md="6">
            <ion-card class="dark-card location-card">
              <ion-card-header>
                <ion-card-title>Tráfico por Localización</ion-card-title>
              </ion-card-header>

              <ion-card-content style="height: 160px;">
                <div class="location-wrapper">
                  <div class="chart-box">
                    <canvas ref="donutChart"></canvas>
                  </div>

                  <div class="legend-box">
                    <div v-for="item in locationData" :key="item.name" class="legend-item">
                      <span class="dot" :style="{ backgroundColor: item.color }"></span>
                      <span class="name">{{ item.name }}</span>
                      <span class="value">{{ item.value }}%</span>
                    </div>
                  </div>
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
import ApexMiniArea from "@/components/ApexMiniArea.vue";

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
  eyeOutline,
  navigateOutline,
  personAddOutline,
  peopleOutline
} from "ionicons/icons";

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
  DoughnutController,
  ArcElement,
  BarController,
  BarElement
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
  DoughnutController,
  ArcElement,
  BarController,
  BarElement
);

const viewsValue = ref(7265);
const visitsValue = ref(3671);
const newUsersValue = ref(156);
const activeUsersValue = ref(2318);

onMounted(() => {
  setInterval(() => {
    viewsValue.value += Math.floor(Math.random() * 50) + 10;
    visitsValue.value += Math.floor(Math.random() * 20) + 5;
    newUsersValue.value += Math.floor(Math.random() * 4);

    activeUsersValue.value += Math.floor(Math.random() * 15) - 7;
    if (activeUsersValue.value < 0) activeUsersValue.value = 0;
  }, 3000);


    setInterval(() => {
    usersValues.value.shift(); // elimina el primero
    usersValues.value.push(Math.floor(Math.random() * 20) + 10); // nuevo valor random
  }, 2000);

});

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
  tooltip: {
    enabled: false
  },
  grid: {
    show: false
  },
  xaxis: {
    labels: { show: false }
  },
  yaxis: {
    labels: { show: false }
  }
};

const viewsSeries = [{ data: [25, 40, 30, 55, 45, 60, 50, 72] }];
const visitsSeries = [{ data: [15, 22, 18, 30, 28, 35, 40, 45] }];
const newUsersSeries = [{ data: [5, 8, 7, 10, 9, 14, 12, 18] }];
const activeUsersSeries = [{ data: [20, 25, 22, 30, 28, 35, 33, 38] }];

const months = ref (["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]);

const usersValues = ref ([12, 14, 13, 24, 28, 22, 26]);



/* ---------------------------
   TOTAL USERS  CHART
---------------------------- */



/* ---------------------------
   TRAFFIC WEBSITE
---------------------------- */
const trafficData = [
  { name: "Google", value: 80, color: "#6D28D9" },
  { name: "Instagram", value: 70, color: "#14B8A6" },
  { name: "YouTube", value: 65, color: "#F97316" },
  { name: "Facebook", value: 50, color: "#10B981" },
  { name: "Twitter", value: 35, color: "#EF4444" }
];

/* ---------------------------
   BAR CHART
---------------------------- */
const barChart = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (!barChart.value) return;

  new Chart(barChart.value, {
    type: "bar",
    data: {
      labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
      datasets: [
        {
          data: [18000, 22000, 20000, 25000, 9000, 23000],
          backgroundColor: [
            "#7c3aed",
            "#22c55e",
            "#ffffff",
            "#a78bfa",
            "#9ca3af",
            "#6ee7b7"
          ],
          borderRadius: 6,
          barThickness: 20
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          ticks: { color: "white" },
          grid: { display: false }
        },
        y: {
          ticks: {
            color: "white",
            callback: (value: number | string) => Number(value) / 1000 + "K"
          },
          grid: { color: "rgba(255,255,255,0.2)" }
        }
      }
    }
  });
});

/* ---------------------------
   DONUT CHART
---------------------------- */
const donutChart = ref<HTMLCanvasElement | null>(null);

const locationData = [
  { name: "United States", value: 38.6, color: "#7c3aed" },
  { name: "Canada", value: 22.5, color: "#22c55e" },
  { name: "Mexico", value: 30.8, color: "#ffffff" },
  { name: "Other", value: 8.1, color: "#9ca3af" }
];

onMounted(() => {
  if (!donutChart.value) return;

  new Chart(donutChart.value, {
    type: "doughnut",
    data: {
      labels: locationData.map(i => i.name),
      datasets: [
        {
          data: locationData.map(i => i.value),
          backgroundColor: locationData.map(i => i.color),
          borderWidth: 0
        }
      ]
    },
    options: {
      cutout: "70%",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } }
    }
  });
});
</script>

<style scoped>
.dashboard-grid {
  padding: 0;
}

.dark-card {
  background: #7247bd;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.2);
  margin: 0;
}

.total-users-card {
  background: linear-gradient(180deg, #32245f 0%, #1f2244 100%);
}

.traffic-card {
  width: 100%;
  background: linear-gradient(180deg, #2b2f63 0%, #182247 100%);
}

.device-card {
  background: linear-gradient(180deg, #21355f 0%, #172645 100%);
}

.location-card {
  background: linear-gradient(180deg, #26304f 0%, #171f35 100%);
}

.dark-card ion-card-title {
  color: white;
  font-weight: 700;
  font-size: 18px;
}

.dark-card ion-card-content {
  color: rgba(255,255,255,0.9);
  padding-top: 6px;
  padding-bottom: 10px;
}

.dark-card ion-card-header {
  padding-bottom: 4px;
}

.dashboard-grid ion-row {
  margin: 0;
}

.dashboard-grid ion-col {
  padding-top: 4px;
  padding-bottom: 4px;
}

.traffic-col {
  display: flex;
}

/* Traffic by Website */
.traffic-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.traffic-header {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 2px;
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
  transition: width 0.3s ease;
}

/* Location */
.location-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 12px;
}

.chart-box {
  width: 42%;
  height: 108px;
  flex-shrink: 0;
}

.legend-box {
  width: 58%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: white;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.name {
  min-width: 82px;
  opacity: 0.9;
}

.value {
  font-weight: 700;
}

@media (min-width: 1024px) {
  .dashboard-grid {
    height: calc(100dvh - 128px);
  }

  .dashboard-grid ion-row {
    margin-bottom: 0;
  }

  .traffic-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .traffic-card .traffic-list {
    flex: 1;
    justify-content: space-evenly;
  }
}

@media (max-width: 1023px) {
  .traffic-col {
    display: block;
  }

  .traffic-card {
    height: auto;
  }
}
</style>