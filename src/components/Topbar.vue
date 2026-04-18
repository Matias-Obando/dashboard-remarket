<template>
  <header class="topbar">
    <button class="menu-btn" type="button" aria-label="Abrir menu" @click="$emit('toggle-menu')">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <h2>{{ title }}</h2>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
defineEmits<{ (e: 'toggle-menu'): void }>();
</script>

<style scoped>
.topbar {
  min-height: 72px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #eadff9;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(104, 58, 191, 0.06);
}

.menu-btn {
  width: 38px;
  height: 38px;
  border: 1px solid #e1d6f4;
  border-radius: 10px;
  background: #ffffff;
  display: grid;
  gap: 4px;
  place-content: center;
  cursor: pointer;
}

.menu-btn span {
  width: 16px;
  height: 2px;
  background: #6d28d9;
  display: block;
}

h2 {
  margin: 0;
  font-size: 20px;
  color: #241738;
  margin-left: 2px;
}

@media (min-width: 1024px) {
  .menu-btn {
    display: none;
  }

  .topbar {
    padding: 14px 22px;
  }
}
</style>