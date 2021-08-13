import Vue from 'vue';
import Router from 'vue-router';

import Index from '~/pages/Index';
import Services from '~/pages/Services';
import Portfolio from '~/pages/Portfolio';
import Technologies from '~/pages/Technologies';
import Career from '~/pages/Career';
import About from '~/pages/About';
import Contact from '~/pages/Contact';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/services',
        name: 'services',
        component: Services
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
      },
      {
        path: '/technologies',
        name: 'technologies',
        component: Technologies
      },
      {
        path: '/career',
        name: 'career',
        component: Career
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      }
    ]
  });
}
