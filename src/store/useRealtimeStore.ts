import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRealtimeStore = defineStore('realtime', () => {
  const labels = ref<string[]>([]);
  const values = ref<number[]>([]);
  let timer: number | undefined;

  const randomValue = () => Math.round(20 + Math.random() * 80);

  function push() {
    const now = new Date();
    labels.value.push(now.toLocaleTimeString());
    values.value.push(randomValue());
    const maxPoints = 12;
    if (labels.value.length > maxPoints) { labels.value.shift(); values.value.shift(); }
  }

  function start(intervalMs = 2000) {
    stop();
    if (labels.value.length === 0) for (let i = 0; i < 6; i++) push();
    timer = window.setInterval(push, intervalMs);
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = undefined; }
  }

  const pushPoint = push;
  const startSimulation = start;
  const stopSimulation = stop;

  return { labels, values, start, stop, push, startSimulation, stopSimulation, pushPoint };
});
