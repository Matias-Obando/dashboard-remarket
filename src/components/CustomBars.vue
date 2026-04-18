<template>
  <div class="bars">
    <div v-for="(item, idx) in items" :key="idx" class="bar-row">
      <div class="meta">
        <span>{{ item.label }}</span>
        <strong>{{ item.value }}%</strong>
      </div>
      <div class="track">
        <div class="fill" :style="{ width: `${item.value}%`, background: item.color || '#6d28d9' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ label: string; value: number; color?: string }>;
}>();
</script>

<style scoped>
.bars {
  display: grid;
  gap: 12px;
  padding-top: 4px;
}

.meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 13px;
}

.track {
  height: 10px;
  border-radius: 99px;
  background: #f0e8fb;
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 99px;
}
</style>
