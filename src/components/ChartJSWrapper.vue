<template>
  <div>
    <Bar :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

const props = defineProps({
  labels: { type: Array, default: () => ['A','B','C'] },
  values: { type: Array, default: () => [10,20,30] }
});

const chartData = ref({
  labels: props.labels,
  datasets: [
    { label: 'Dataset 1', backgroundColor: '#7c3aed', data: props.values }
  ]
});

const chartOptions = ref({ responsive: true, maintainAspectRatio: false });
</script>

<style scoped>
div { height:300px }
</style>