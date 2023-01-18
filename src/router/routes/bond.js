export default [


  {
    path: '/bond/Main',
    name: 'bond-Main-page',
    component: () => import('@/views/bond/Main-page/MainPage.vue'),
    meta: {
      pageTitle: 'SQM-BOND',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'SQM-BOND',
      //     active: true,
      //   },
      // ],
    },
  },
  {
    path: '/bond/EditMaingroup/',
    name: 'bond-Main-Group-Edit',
    component: () => import('@/views/bond/Main-page/MainGroupEdit.vue'),
    meta: {
      pageTitle: 'Main-page-edit',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
    
  },
  {
    path: '/bond/AddMaingroup/',
    name: 'bond-Main-Group-Add',
    component: () => import('@/views/bond/Main-page/MainGroupAdd.vue'),
    meta: {
      pageTitle: 'Main-page-add',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
    
  },
  ///////////////////entity page//////////////
  {
    path: '/bond/EditEntity/',
    name: 'bond-Entity-Edit',
    component: () => import('@/views/bond/Entity-page/EntityEdit.vue'),
    meta: {
      pageTitle: 'Entity-edit',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
    
  },
  {
    path: '/bond/AddEntity/',
    name: 'bond-Entity-Add',
    component: () => import('@/views/bond/Entity-page/EntityAdd.vue'),
    meta: {
      pageTitle: 'Entity-add',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
    
  },
  {
    path: '/bond/secondary/',
    name: 'bond-Secondary-page',
    component: () => import('@/views/bond/Secondary-page/SecondaryPage.vue'),
    meta: {
      pageTitle: 'Secondary Group Details',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
    
  },
  {
    path: '/bond/entity/',
    name: 'bond-Entity-page',
    component: () => import('@/views/bond/Entity-page/EntityPage.vue'),
    meta: {
      pageTitle: 'Entity Group Details',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
    
  },
  {
    path: '/bond/entityDetails/',
    name: 'bond-Entity-details-page',
    component: () => import('@/views/bond/Entity-details-page/EntityDetailsPage.vue'),
    meta: {
      pageTitle: 'Entity Details page',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
    
    
  },
    ////////////////////////////////////////////
    ///////////////////device page//////////////
  {
    path: '/bond/devicesDetails/',
    name: 'bond-Device-details-page',
    component: () => import('@/views/bond/Device-details-page/DeviceDetailsPage.vue'),
    meta: {
      pageTitle: 'Device Details page',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
  },
  {
    path: '/bond/AddDevice/',
    name: 'bond-Device-Add',
    component: () => import('@/views/bond/Device-details-page/DeviceAdd.vue'),
    meta: {
      pageTitle: 'Device-add',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
    
  },
  {
    path: '/bond/EditDevice/',
    name: 'bond-Device-Edit',
    component: () => import('@/views/bond/Device-details-page/DeviceEdit.vue'),
    meta: {
      pageTitle: 'Edit-add',
      contentClass: 'ecommerce-application',
      // breadcrumb: [
      //   {
      //     text: 'ECommerce',
      //   },
      //   {
      //     text: 'Shop',
      //     active: true,
      //   },
      //   {
      //     text: 'primary-grup Details',
      //     active: true,
      //   },
      // ],
    },
    
  },
]