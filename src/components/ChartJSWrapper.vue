<template>
  <div :style="{ height: `${chartHeight}px` }">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const props = defineProps<{
  labels: string[];
  values: number[];
  datasetLabel?: string;
  height?: number;
}>();

const chartHeight = props.height ?? 220;

const chartData = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      label: props.datasetLabel || 'Serie',
      backgroundColor: '#2f73d9',
      borderRadius: 8,
      data: props.values
    }
  ]
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: { color: '#6d6781' }
    }
  },
  scales: {
    x: { ticks: { color: '#6d6781' }, grid: { color: '#f0e8fb' } },
    y: { beginAtZero: true, ticks: { color: '#6d6781' }, grid: { color: '#f0e8fb' } }
  }
};
</script>

<style scoped>
div { width: 100%; }
</style>