<template>
  <div class="chart-wrapper">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions
} from 'chart.js';
import { useRealtimeStore } from '../store/useRealtimeStore';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const store = useRealtimeStore();
const MAX_VISIBLE_POINTS = 12;

/* Tipado explícito: ChartData<'bar', number[], string> */
const chartData = computed<ChartData<'bar', number[], string>>(() => ({
  labels: store.labels.slice(-MAX_VISIBLE_POINTS),
  datasets: [
    {
      label: 'Usuarios activos',
      data: store.values.slice(-MAX_VISIBLE_POINTS),
      backgroundColor: '#6d28d9',
      borderRadius: 6,
      barPercentage: 0.7
    }
  ]
}));

const chartOptions = computed<ChartOptions<'bar'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 300 },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 20 }
    }
  }
}));
</script>

<style scoped>
.chart-wrapper { height: 360px; padding: 8px; }
</style>
