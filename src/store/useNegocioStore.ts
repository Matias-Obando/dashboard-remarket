import { defineStore } from 'pinia';
import axios from 'axios';

export const useNegocioStore = defineStore('negocio', {
  state: () => ({ items: [] as any[] }),
  actions: {
    async loadMock() {
      // si lo sirves con Vite import estático: import mock from '../data/mock-negocio.json'
      // aquí usamos axios para simular petición
      const res = await axios.get('/src/data/mock-negocio.json');
      this.items = res.data;
    }
  }
});