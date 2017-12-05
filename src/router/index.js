import Home from './../pages/Home.vue';
import About from './../pages/About.vue';
import ContainerView from './../pages/ContainerView.vue';
import ContainerViewDetails from './../pages/ContainerViewDetails.vue';
import ContainerReserve from './../pages/ContainerReserve.vue';
import ContainerAdd from './../pages/ContainerAdd.vue';
import ContainerInventory from './../pages/ContainerInventory.vue';
import SuppliesInventory from './../pages/SuppliesInventory.vue';
import PackingList from './../pages/PackingList.vue';

import QrCodes from './../pages/QrCodes.vue';

const routes = [
  {
    path: '/Frutexsa',
    component: Home,
    name: 'home',
  },
  {
    path: '/Frutexsa/containerView',
    component: ContainerView,
    name: 'containerView',
  },
  {
    path: '/Frutexsa/qrCodes',
    component: QrCodes,
    name: 'QrCodes',
  },
  {
    path: '/Frutexsa/containerView/:id',
    component: ContainerViewDetails,
    name: 'containerViewDetails',
  },
  {
    path: '/Frutexsa/containerReserve',
    component: ContainerReserve,
    name: 'containerReserve',
  },
  {
    path: '/Frutexsa/containerAdd',
    component: ContainerAdd,
    name: 'containerAdd',
  },
  {
    path: '/Frutexsa/containerInventory',
    component: ContainerInventory,
    name: 'containerInventory',
  },
  {
    path: '/Frutexsa/suppliesInventory',
    component: SuppliesInventory,
    name: 'suppliesInventory',
  },
  {
    path: '/Frutexsa/packingList',
    component: PackingList,
    name: 'packingList',
  },
  {
    path: '/Frutexsa/aboutUs',
    component: About,
    name: 'about',
  },
];

export default routes;
