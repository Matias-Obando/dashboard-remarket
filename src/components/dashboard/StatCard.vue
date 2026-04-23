<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <p class="value">{{ value }}</p>
      <p class="extra">{{ extra }}</p>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from "@ionic/vue";

defineProps({
  subtitle: String,
  title: String,
  value: String,
  extra: String
});
</script>

<style scoped>
.value {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.extra {
  margin: 0;
  opacity: 0.6;
  font-size: 14px;
}
</style>