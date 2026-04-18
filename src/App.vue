<template>
  <ion-app>
    <div class="app-shell">
      <Sidebar />
      <div class="main-area">
        <Topbar />
        <router-view />
      </div>
    </div>
  </ion-app>
</template>

<script setup>
import Sidebar from './components/AppSidebar.vue';
import Topbar from './components/AppTopbar.vue';
</script>

<style>
.app-shell {
  display: flex;
  min-height: 100vh;
}
.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>