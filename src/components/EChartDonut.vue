<template>
  <VChart class="chart" :style="{ height: `${chartHeight}px` }" :option="option" autoresize />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import VChart from 'vue-echarts';

use([CanvasRenderer, PieChart, TooltipComponent, LegendComponent]);

const props = defineProps<{
  data: Array<{ name: string; value: number }>;
  height?: number;
  colors?: string[];
}>();

const chartHeight = props.height ?? 220;

const option = computed(() => ({
  tooltip: { trigger: 'item' },
  legend: {
    bottom: 0,
    icon: 'circle',
    textStyle: { fontSize: 11, color: '#6d6781' }
  },
  series: [
    {
      type: 'pie',
      radius: ['52%', '75%'],
      avoidLabelOverlap: true,
      label: { show: false },
      data: props.data,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 2
      }
    }
  ],
  color: props.colors || ['#6d28d9', '#8b5cf6', '#c084fc', '#a855f7', '#f472b6']
}));
</script>

<style scoped>
.chart {
  width: 100%;
}
</style>
