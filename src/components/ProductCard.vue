<template>
  <div class="product-card">
    <img :src="product.image" alt="" />
    <div class="info">
      <div class="price">{{ product.price }}€</div>
      <div class="title">{{ product.title }}</div>
      <div class="meta">{{ product.meta }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true }
});
</script>

<style scoped>
.product-card{
  background:#fff;
  border-radius:14px;
  padding:12px;
  text-align:left;
  box-shadow:0 1px 4px rgba(0,0,0,0.06);
}
.product-card img { width:100%; height:160px; object-fit:cover; border-radius:10px }
.price { font-weight:700; font-size:1.1rem; margin-top:8px }
.title { margin-top:6px; font-size:0.95rem }
.meta { color:#6b7280; font-size:0.85rem }
</style>