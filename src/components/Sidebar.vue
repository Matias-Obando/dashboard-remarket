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
  background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
  color: #221738;
  padding: 20px 16px;
  border-right: 1px solid #e6def4;
  box-shadow: 0 12px 34px rgba(104, 58, 191, 0.08);
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
  border: 1px solid #e6def4;
  border-radius: 14px;
  padding: 14px;
  background: #ffffff;
}

.kicker {
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #7b6b97;
}

.brand {
  margin: 4px 0;
  font-size: 28px;
  line-height: 1;
  color: #5e2fc7;
}

.menu {
  margin-top: 16px;
  display: grid;
  gap: 10px;
}

a {
  color: #3e3556;
  text-decoration: none;
  padding: 12px 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-weight: 600;
}

a.router-link-active {
  background: var(--brand-soft);
  border-color: #d6c4ff;
  color: #5e2fc7;
}

a:hover {
  background: #f4efff;
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