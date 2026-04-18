import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { IonicVue } from '@ionic/vue';
import App from './App.vue';

import PageNegocio from './views/PageNegocio.vue';
import PageTecnico from './views/PageTecnico.vue';
import KPIs from './views/KPIs.vue';

/* Ionic core styles */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/* optional utilities */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/display.css';

import './theme/variables.css';

const app = createApp(App);

/* Register Ionic + Pinia */
app.use(IonicVue);
app.use(createPinia());

/* Router */
const routes = [
  { path: '/', redirect: '/negocio' },
  { path: '/negocio', component: PageNegocio },
  { path: '/tecnico', component: PageTecnico },
  { path: '/kpis', component: KPIs }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
app.use(router);

router.isReady().then(() => {
  app.mount('#app');
});