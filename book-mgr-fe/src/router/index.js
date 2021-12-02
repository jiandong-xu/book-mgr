import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  }, 
  {
    path: '/',
    name: 'Basiclayout',
    component: () => import(/* webpackChunkName: "Basiclayout" */ '../layout/BasicLayout/index.vue'),
    children:[
      {
        path: '/books',
        name: 'Books',
        component: () => import(/* webpackChunkName: "Books" */ '../views/Books/index.vue'),
      }, 
      // {
      //   path: '/users',
      //   name: 'User',
      //   component: () => import(/* webpackChunkName: "User" */ '../views/User/index.vue'),
      // }, 
    ]
  }, 
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Auth/index.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
