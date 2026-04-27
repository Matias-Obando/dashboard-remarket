<template>
  <ion-split-pane content-id="main-content" class="dashboard-split">

    <!-- SIDEBAR -->
    <ion-menu content-id="main-content" type="overlay">

      <ion-header>
         <ion-toolbar class="header-purple"></ion-toolbar>
      </ion-header>

      <div class="menu-gap-brand">
        <p class="menu-gap-title">Remarket</p>
        <p class="menu-gap-subtitle">Dashboard</p>
      </div>

      <div class="menu-content">
        <ion-list>

          <ion-menu-toggle :auto-hide="false">

              <ion-item
                button
                routerLink="/dashboard/negocio"
                routerDirection="root"
                @click="closeMenu"
                :class="{ activeItem: route.path === '/dashboard/negocio' }"
              >
                <ion-icon :icon="briefcaseOutline" slot="start"></ion-icon>
                <ion-label>Negocio</ion-label>
              </ion-item>

              <ion-item
                button
                routerLink="/dashboard/tecnico"
                routerDirection="root"
                @click="closeMenu"
                :class="{ activeItem: route.path === '/dashboard/tecnico' }"
              >
                <ion-icon :icon="constructOutline" slot="start"></ion-icon>
                <ion-label>Técnico</ion-label>
              </ion-item>

              <ion-item
                button
                routerLink="/dashboard/kpis"
                routerDirection="root"
                @click="closeMenu"
                :class="{ activeItem: route.path === '/dashboard/kpis' }"
              >
                <ion-icon :icon="barChartOutline" slot="start"></ion-icon>
                <ion-label>KPIs</ion-label>
              </ion-item>

          </ion-menu-toggle>
        </ion-list>
      </div>

    </ion-menu>

    <!-- CONTENIDO -->
    <div class="ion-page dashboard-page" id="main-content">

      <ion-header>
        <ion-toolbar class="header-purple">

          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>

          <ion-title>
            {{ titulo }}
          </ion-title>

        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding dashboard-content">
        <slot></slot>
      </ion-content>

    </div>

  </ion-split-pane>
</template>

<script setup lang="ts">
import {
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle,
  IonButtons,
  IonMenuButton,
  IonIcon
} from "@ionic/vue";
import { menuController } from "@ionic/vue";

import {
  briefcaseOutline,
  constructOutline,
  barChartOutline
} from "ionicons/icons";



import { useRoute } from "vue-router";

const route = useRoute();

function closeMenu() {
  menuController.close();
}

defineProps({
  titulo: {
    type: String,
    required: true
  }
});


</script>

<style scoped>

.dashboard-split {
  height: 100dvh;
  background: #0b1020;
}

ion-menu {
  --width: 278px;
}

ion-menu::part(container) {
  background: #0b1020;
  border-right: 1px solid #2f3656;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

.dashboard-page {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.dashboard-content {
  --background: #0b1020;
  --padding-top: 12px;
  --padding-bottom: 12px;
  --padding-start: 12px;
  --padding-end: 12px;
  --overflow: auto;
}

.header-purple {
  --background: #0b1020;
  --color: #f3f4ff;
  --min-height: 52px;
  min-height: 52px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.42);
  border-bottom: 1px solid #2f3656;
}

:global(.header-md::after),
:global(.header-ios::after) {
  display: none;
}

.menu-subtitle {
  font-size: 22px;
  font-weight: 900;
  color: #f1e8ff;
  padding-left: 12px;
  margin: 2px 0 4px;
}

.menu-subtitle::after {
  content: "Dashboard";
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #a78bfa;
  margin: 0 0 6px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.8;
}


.menu-gap-brand {
  padding: 14px 16px 12px;
  background: linear-gradient(180deg, #111837 0%, #0f1324 100%);
  border-bottom: 1px solid #2f3656;
}

.menu-gap-title {
  margin: 0;
  font-size: clamp(28px, 3.2vw, 34px);
  line-height: 1;
  font-weight: 900;
  color: #f1e8ff;
}

.menu-gap-subtitle {
  margin: 6px 0 0;
  font-size: clamp(12px, 1.4vw, 14px);
  line-height: 1;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  color: #a78bfa;
}



ion-content {
  --background: #0f1324;
}

.menu-content {
  background: #0f1324;
  padding-top: 0;
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
}

ion-header ion-toolbar.header-purple {
  --background: #0b1020;
  --color: #f3f4ff;
}

ion-menu ion-list {
  background: transparent;
  padding-top: 8px !important;
  margin-top: 0 !important;
  display: block !important;
  width: 100%;
}

.menu-brand-item {
  --min-height: auto;
  margin-top: 0;
}

ion-menu ion-item {
  --background: rgba(255, 255, 255, 0.03);
  --color: #d9ddff;
  --min-height: 62px;
}

ion-menu ion-item:hover {
  --background: rgba(124, 58, 237, 0.18);
  --color: #ffffff;
}

ion-menu ion-label {
  color: inherit;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: 0.2px;
}

:global(.dashboard-content::part(scroll)) {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

@media (min-width: 1024px) {
  .dashboard-content {
    --overflow: hidden;
  }

  :global(.dashboard-content::part(scroll)) {
    overflow: hidden;
  }
}

ion-item {
  --border-radius: 10px;
  margin: 0 10px 8px;
  color: #d9ddff;
  font-weight: 800;
  transition: 0.2s ease;

  --background: rgba(255, 255, 255, 0.03);
  --border-color: transparent;
}

ion-item:hover {
  --background: rgba(124, 58, 237, 0.18);
  --color: #ffffff;
}


ion-icon {
  color: #a78bfa;
  font-size: 22px;
}

ion-buttons ion-menu-button {
  --color: #f3f4ff;
}

ion-title {
  color: #f3f4ff;
  font-weight: 800;
  font-size: clamp(22px, 2.4vw, 32px);
  letter-spacing: 0.2px;
}


/*sidebar gris */
.activeItem {
  --background: rgba(124, 58, 237, 0.28);
  --color: #ffffff;
  font-weight: 800;
  border-left: 4px solid #a78bfa;
}

.activeItem ion-icon {
  color: #ffffff;
}


</style>