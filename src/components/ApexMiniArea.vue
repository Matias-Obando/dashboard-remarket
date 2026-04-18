<template>
  <div class="apex-wrap" :style="{ height: `${chartHeight}px` }">
    <VueApexCharts :height="String(chartHeight)" type="area" :options="options" :series="seriesData" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import type { ApexAxisChartSeries, ApexOptions } from 'apexcharts';

const props = defineProps<{
  categories: string[];
  values: number[];
  label?: string;
  height?: number;
}>();

const chartHeight = props.height ?? 220;

const options = computed<ApexOptions>(() => ({
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    fontFamily: 'Segoe UI, sans-serif'
  },
  colors: ['#6d28d9'],
  stroke: { curve: 'smooth', width: 3 },
  fill: {
    type: 'gradient',
    gradient: { opacityFrom: 0.28, opacityTo: 0.04 }
  },
  xaxis: {
    categories: props.categories,
    labels: { style: { colors: '#6d6781' } }
  },
  dataLabels: { enabled: false },
  grid: { borderColor: '#eadff9' },
  yaxis: { min: 0, labels: { style: { colors: '#6d6781' } } }
}));

const seriesData = computed<ApexAxisChartSeries>(() => [
  {
    name: props.label || 'Serie',
    data: props.values
  }
]);
</script>

<style scoped>
.apex-wrap {
  width: 100%;
}
</style>
