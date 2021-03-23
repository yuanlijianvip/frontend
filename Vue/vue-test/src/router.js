import Vue from 'vue';
import Router from 'vue-router';

import authService from '@/services/authService';
import NProgress from 'nprogress';

const MainPage = () => import('@/views/MainPage1');

// const LoginPage = () => import(/* webpackPrefetch: true, webpackChunkName: "login-page" */ '@/views/LoginPage');

const NotFoundPage = () => import(/* webpackPrefetch: true, webpackChunkName: "not-found-page" */ '@/views/NotFoundPage');

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/*',
      name: 'not-found-page',
      component: NotFoundPage
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!authService.isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      NProgress.start();
      next();
    }
  } else {
    NProgress.start();
    next(); // 确保一定要调用 next()
  }
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
