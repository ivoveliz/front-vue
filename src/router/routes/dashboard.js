export default [
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
  {
    path: '/dashboard/analytics2',
    name: 'dashboard-analytics2',
    component: () => import('@/views/dashboard/analytics2/Analytics.vue'),
  },
  {
    path: '/dashboard/ecommerce',
    name: 'dashboard-ecommerce',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },

  {
    path: '/dashboard/Dash',
    name: 'dashboard',
    component: () => import('@/views/dashboard/dash/Dash.vue'),
  },
  
]
