<template>
  <ion-app>
    <div class="app-shell">
      <Sidebar :open="menuOpen" @navigate="closeMenu" />
      <button
        v-if="menuOpen"
        class="mobile-overlay"
        type="button"
        aria-label="Cerrar menu"
        @click="closeMenu"
      ></button>
      <div class="main-area">
        <Topbar :title="pageTitle" @toggle-menu="toggleMenu" />
        <main class="view-wrap">
          <router-view />
        </main>
      </div>
    </div>
  </ion-app>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import Topbar from './components/Topbar.vue';

const menuOpen = ref(false);
const route = useRoute();

const pageTitle = computed(() => {
  if (route.path.startsWith('/negocio')) return 'Negocio';
  if (route.path.startsWith('/tecnico')) return 'Tecnico';
  if (route.path.startsWith('/kpis')) return 'KPIs';
  return 'ReMarket';
});

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

watch(
  () => route.path,
  () => {
    closeMenu();
  }
);
</script>

<style>
:root {
  --app-bg: #f6f3ff;
  --panel-bg: #ffffff;
  --line-soft: #dfd8ef;
  --text-main: #1f1530;
  --text-muted: #6d6781;
  --brand: #6d28d9;
  --brand-soft: #ede6ff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', 'Montserrat', sans-serif;
  background: linear-gradient(180deg, #f8f5ff 0%, #f3f5fb 55%, #eef2f9 100%);
  color: var(--text-main);
}

.app-shell {
  display: flex;
  min-height: 100vh;
  background: transparent;
}

.main-area {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.view-wrap {
  flex: 1;
  padding: 16px;
  background: transparent;
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  border: 0;
  background: rgba(36, 18, 64, 0.26);
  z-index: 40;
}

@media (min-width: 1024px) {
  .view-wrap {
    padding: 22px;
  }

  .mobile-overlay {
    display: none;
  }
}
</style>