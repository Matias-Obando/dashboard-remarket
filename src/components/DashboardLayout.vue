<template>
  <ion-split-pane content-id="main-content">

    <!-- SIDEBAR -->
    <ion-menu content-id="main-content" type="overlay">

      <ion-header>
         <ion-toolbar class="header-purple"></ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>

          <ion-item lines="none">
            <ion-label class="menu-subtitle">
              Remarket
            </ion-label>
          </ion-item>

          <ion-menu-toggle :auto-hide="false">

              <ion-item
                button
                routerLink="/dashboard/negocio"
                :class="{ activeItem: route.path === '/dashboard/negocio' }"
              >
                <ion-icon :icon="briefcaseOutline" slot="start"></ion-icon>
                <ion-label>Negocio</ion-label>
              </ion-item>

              <ion-item
                button
                routerLink="/dashboard/tecnico"
                :class="{ activeItem: route.path === '/dashboard/tecnico' }"
              >
                <ion-icon :icon="constructOutline" slot="start"></ion-icon>
                <ion-label>Técnico</ion-label>
              </ion-item>

              <ion-item
                button
                routerLink="/dashboard/kpis"
                :class="{ activeItem: route.path === '/dashboard/kpis' }"
              >
                <ion-icon :icon="barChartOutline" slot="start"></ion-icon>
                <ion-label>KPIs</ion-label>
              </ion-item>

          </ion-menu-toggle>
        </ion-list>
      </ion-content>

    </ion-menu>

    <!-- CONTENIDO -->
    <div class="ion-page" id="main-content">

      <ion-header>
        <ion-toolbar class="header-purple">

          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>

          <ion-title>
            Dashboards / {{ titulo }}
          </ion-title>

        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
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

import {
  briefcaseOutline,
  constructOutline,
  barChartOutline
} from "ionicons/icons";



import { useRoute } from "vue-router";

const route = useRoute();

defineProps({
  titulo: {
    type: String,
    required: true
  }
});


</script>

<style scoped>

.header-purple {
  --background: linear-gradient(135deg, #a78bfa, #7c3aed);
  --color: white;
  min-height: 56px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
}

.menu-subtitle {
  font-size: 22px;
  font-weight: 900;
  color: #4c1d95;
  padding-left: 12px;
  margin: 14px 0 6px;
}

.menu-subtitle::after {
  content: "Dashboard";
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #7c3aed;
  margin-top: 3px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.8;
}



ion-content {
  --background: #ffffff;
}

ion-item {
  --border-radius: 10px;
  margin: 4px 8px;
  color: #5b5bd6;
  font-weight: 800;
  transition: 0.2s ease;

  --background: transparent;
}

ion-item:hover {
  --background: rgba(124, 58, 237, 0.12);
  --color: #4c1d95;
}


ion-icon {
  color: #7c3aed;
}


/*sidebar gris */
ion-menu ion-content {
    --background: #f5f3ff;
}


.activeItem {
  --background: rgba(124, 58, 237, 0.18);
  --color: #4c1d95;
  font-weight: 800;
  border-left: 4px solid #7c3aed;
}

.activeItem ion-icon {
  color: #4c1d95;
}


</style>