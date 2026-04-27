<template>
  <aside class="sidebar" :class="{ open }">
    <div class="brand-block">
      <p class="kicker">Dashboard</p>
      <h1 class="brand">ReMarket</h1>
    </div>

    <nav class="menu">
      <router-link to="/negocio" @click="onNavigate">Negocio</router-link>
      <router-link to="/tecnico" @click="onNavigate">Tecnico</router-link>
      <router-link to="/kpis" @click="onNavigate">KPIs</router-link>
    </nav>

    
  </aside>
</template>

<script setup lang="ts">
const props = defineProps<{ open: boolean }>();
const emit = defineEmits<{ (e: 'navigate'): void }>();

function onNavigate() {
  if (props.open) emit('navigate');
}
</script>

<style scoped>
.sidebar {
  width: 270px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #0b1020 0%, #12172a 100%);
  color: #edf0ff;
  padding: 6px 14px 14px;
  border-right: 1px solid #2f3656;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  z-index: 50;
  display: flex;
  flex-direction: column;
}

.sidebar.open {
  transform: translateX(0);
}

.brand-block {
  border: 1px solid #2f3656;
  border-radius: 16px;
  padding: 12px 14px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.14), rgba(59, 130, 246, 0.08));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.kicker {
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #aab2d4;
}

.brand {
  margin: 4px 0 0;
  font-size: 30px;
  line-height: 1;
  color: #f5f3ff;
}

.menu {
  margin-top: 6px;
  display: grid;
  gap: 12px;
}

a {
  color: #d9ddff;
  text-decoration: none;
  padding: 14px 12px;
  border-radius: 14px;
  border: 1px solid transparent;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease;
}

a.router-link-active {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.28), rgba(59, 130, 246, 0.16));
  border-color: #6d5ca8;
  color: #ffffff;
}

a:hover {
  transform: translateX(2px);
  background: rgba(124, 58, 237, 0.16);
}

@media (min-width: 1024px) {
  .sidebar {
    position: sticky;
    transform: none;
    z-index: 2;
    top: 0;
    height: 100vh;
  }
}
</style>