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
    path: '/bond/e-commerce/:slug',
    name: 'bond-e-commerce-product-details',
    component: () => import('@/views/bond/e-commerce-product-details/ECommerceProductDetails.vue'),
    meta: {
      pageTitle: 'Primary Group Details',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Shop',
          active: true,
        },
        {
          text: 'primary-grup Details',
          active: true,
        },
      ],
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
    
  }
]