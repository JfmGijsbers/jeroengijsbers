import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/main.vue'),
  },
  {
    path: '/platoqrcode',
    name: 'qrcode',
    component: () => import('../views/QRCode.vue'),
  }
]

export default routes;
