import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRealtimeStore = defineStore('realtime', () => {
  const labels = ref<string[]>([]);
  const values = ref<number[]>([]);
  let timer: number | undefined;

  const randomValue = () => Math.round(20 + Math.random() * 80);

  function pushPoint() {
    const now = new Date();
    labels.value.push(now.toLocaleTimeString());
    values.value.push(randomValue());
    const maxPoints = 12;
    if (labels.value.length > maxPoints) {
      labels.value.shift();
      values.value.shift();
    }
  }

  function startSimulation(intervalMs = 2000) {
    stopSimulation();
    if (labels.value.length === 0) for (let i = 0; i < 6; i++) pushPoint();
    timer = window.setInterval(pushPoint, intervalMs);
  }

  function stopSimulation() {
    if (timer) {
      clearInterval(timer);
      timer = undefined;
    }
  }

  return { labels, values, startSimulation, stopSimulation, pushPoint };
});