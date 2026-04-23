<template>
  <div class="spark-card" :class="bgClass">
    <div class="spark-header">
      <div class="spark-info">
        <p class="spark-title">{{ title }}</p>
        <p class="spark-value">{{ value }}</p>
      </div>

      <ion-icon :icon="icon" class="spark-icon"></ion-icon>
    </div>

    <apexchart
      width="100%"
      height="70"
      type="area"
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonIcon } from "@ionic/vue";

defineProps<{
  title: string;
  value: string;
  icon: any;
  bgClass: string;
  chartOptions: any;
  chartSeries: any;
}>();



</script>

<style scoped>
.spark-card {
  border-radius: 18px;
  padding: 16px;
  color: white;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.spark-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.spark-title {
  margin: 0;
  font-size: 13px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.spark-value {
  margin: 4px 0 0;
  font-size: 30px;
  font-weight: 800;
}

.spark-icon {
  font-size: 22px;
  opacity: 0.85;
}

/* Gradientes metálicos */
.gradient-blue {
  background: linear-gradient(135deg, #0ea5e9, #1e3a8a);
}

.gradient-purple {
  background: linear-gradient(135deg, #a855f7, #4c1d95);
}

.gradient-red {
  background: linear-gradient(135deg, #111827, #2563eb);
  color: white;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.25);
}

.gradient-green {
  background: linear-gradient(135deg, #34d399, #065f46);
}
</style>