import { createRouter, createWebHistory } from 'vue-router';
import Component1 from '../components/Component1.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Component1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
