import { createRouter, createWebHashHistory } from 'vue-router';
import {user} from '../service'
import store from '../store/index';
import { message } from 'ant-design-vue';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  }, 
  {
    path: '/',
    name: 'Basiclayout',
    redirect:'/auth',
    component: () => import(/* webpackChunkName: "Basiclayout" */ '../layout/BasicLayout/index.vue'),
    children:[
      {
        path: '/books',
        name: 'Books',
        component: () => import(/* webpackChunkName: "Books" */ '../views/Books/index.vue'),
      }, 
      {
        path: '/books/:id',
        name: 'BookDetail',
        component: () => import(/* webpackChunkName: "BookDetail" */ '../views/BookDetail/index.vue'),
      }, 
      {
        path: 'user',
        name: 'User',
        component: () => import(/* webpackChunkName: "User" */ '../views/Users/index.vue'),
      }, 
      {
        path: 'log',
        name: 'Log',
        component: () => import(/* webpackChunkName: "Log" */ '../views/Log/index.vue'),
      },
      {
        path: 'reset/password',
        name: 'ResetPassword',
        component: () => import(/* webpackChunkName: "ResetPassword" */ '../views/ResetPassword/index.vue'),
      },
      {
        path: 'invite-code',
        name: 'InviteCode',
        component: () => import(/* webpackChunkName: "InviteCode" */ '../views/InviteCode/index.vue'),
      },
      {
        path: 'book-classify',
        name: 'BookClassify',
        component: () => import(/* webpackChunkName: "BookClassify" */ '../views/BookClassify/index.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile/index.vue'),
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard/index.vue'),
      }
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

router.beforeEach(async (to,from,next) => {
  let res = {};

  try{
    res = await user.info();
  }catch(e) {
    if(e.message.includes('code 401')) {
      res.code = 401;
    }
  }

  const {code} = res;

  if(code === 401) {
    if(to.path === '/auth') {
      next();
      return;
    }


    message.error('认证失败,请重新登陆');
    next('/auth');

    return;
  }

  
  

  if(!store.state.characterInfo.length) {
    // reqArr.push(store.dispatch('getCharacterInfo'));
    await store.dispatch('getCharacterInfo');
  }

  const reqArr = []; 

  if(!store.state.userInfo.account) {
    reqArr.push(store.dispatch('getUserInfo'));
    // await store.dispatch('getUserInfo');
  }

  if(!store.state.bookClassify.length) {
    // await store.dispatch('getBookClassify');
    reqArr.push(store.dispatch('getBookClassify'));
  }

  await Promise.all(reqArr);

  if(to.path === '/auth') {
    next('/books');
    return;
  }

  next();
});

export default router;
