import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

import Layout from '@/views/layout/layOut.vue'

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    // redirect: 'dashboard',
    // children: [{
    //   path: 'dashboard',
    //   component: _import('dashboard/index'),
    //   name: 'dashboard',
    //   meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    // }]
  },
]
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
  // routes: [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: Home
  //   },
  //   {
  //     path: "/about",
  //     name: "about",
  //     component: () => import("./views/About.vue")
  //   }
  // ]
});
