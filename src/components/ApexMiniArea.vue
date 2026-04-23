<template>
  <VueApexCharts
    type="area"
    :height="height"
    :options="options"
    :series="series"
  />
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import { computed } from "vue";
import type { ApexOptions } from "apexcharts";

const props = defineProps<{
  categories: string[];
  values: number[];
  label: string;
  height?: number;
}>();

const height = props.height ?? 200;

const series = computed(() => [
  {
    name: props.label,
    data: props.values
  }
]);

const options: ApexOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
    background: "transparent"
  },
  theme: {
    mode: "dark"
  },
  stroke: {
    curve: "smooth",
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 100]
    }
  },
  grid: {
    borderColor: "rgba(255,255,255,0.15)"
  },
  xaxis: {
    categories: props.categories,
    labels: {
      style: {
        colors: "#ffffff"
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: "#ffffff"
      }
    }
  },
  colors: ["#ffffff"],
    tooltip: {
    theme: "dark",
    style: {
    fontSize: "12px"
  },
  y: {
    formatter: (val: number) => `${val} usuarios`
  }
}
};
</script>