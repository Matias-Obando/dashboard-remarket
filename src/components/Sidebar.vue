<template>
  <aside class="sidebar">
    <div class="brand">ReMarket</div>
    <nav>
      <router-link to="/negocio">Negocio</router-link>
      <router-link to="/tecnico">Técnico</router-link>
      <router-link to="/kpis">KPIs</router-link>
    </nav>
  </aside>
</template>

<script setup></script>

<style scoped>
.sidebar { width: 220px; background:#0b1721; color: #fff; padding: 20px; box-sizing: border-box; }
nav { display:flex; flex-direction:column; gap:12px; margin-top:20px; }
a { color:#e6eef6; text-decoration:none; }
.brand { font-weight:700; margin-bottom:8px; }
</style>