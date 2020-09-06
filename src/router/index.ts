import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Example from '../views/Example.vue';
import VuexUse from '../views/VuexUse.vue';
import VuexModule from '../views/VuexModule.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/example',
    name: 'Example',
    component: Example,
  },
  {
    path: '/terms',
    name: 'Terms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Terms.vue'),
  },
  {
    path: '/vuex',
    name: 'VuexUse',
    component: VuexUse,
  },
  {
    path: '/vuex-module',
    name: 'VuexModule',
    component: VuexModule,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
