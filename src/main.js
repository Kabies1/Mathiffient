import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import GameConfig from './components/GameConfig';
import GamePlay from './components/GamePlay';

const routes = [
  { path: '/', component: GameConfig },
  { path: '/play/:operation/:maxNumber', component: GamePlay, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');

