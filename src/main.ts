import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { IonicVue } from '@ionic/vue';
import App from './App.vue';

/* ionic core styles */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/* optional ionic utilities */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/display.css';

import './theme/variables.css';

/* Import views */
import Negocio from './views/Negocio.vue';
import Tecnico from './views/Tecnico.vue';
import KPIs from './views/KPIs.vue';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(IonicVue);

const routes = [
  { path: '/', redirect: '/negocio' },
  { path: '/negocio', component: Negocio },
  { path: '/tecnico', component: Tecnico },
  { path: '/kpis', component: KPIs },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

app.use(router);

router.isReady().then(() => {
  app.mount('#app');
});