import Home from './../pages/Home.vue';
import About from './../pages/About.vue';
import ContainerView from './../pages/ContainerView.vue';
import ContainerViewDetails from './../pages/ContainerViewDetails.vue';
import ContainerReserve from './../pages/ContainerReserve.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/containerView',
    component: ContainerView,
    name: 'containerView',
  },
  {
    path: '/containerView/:id',
    component: ContainerViewDetails,
    name: 'containerViewDetails',
  },
  {
    path: '/containerReserve',
    component: ContainerReserve,
    name: 'containerReserve',
  },
  {
    path: '/about',
    component: About,
    name: 'about',
  },
];

export default routes;
