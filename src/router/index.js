import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CitySelection from '../views/CitySelection.vue';
import VehicleSelection from '../views/VehicleSelection.vue';
import ResultPage from '../views/ResultPage.vue';
import SelectCops from '../views/SelectCops.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/city-selection',
      component: CitySelection,
      name: 'CitySelection',
      props: true // Indicates that route params should be set as component props
    },
  { path: '/vehicle-selection', component: VehicleSelection },
  { path: '/result', component: ResultPage },
  { path: '/select-cops', component: SelectCops },
  ]
})

export default router
