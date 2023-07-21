export default [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/main.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    redirect: '/home/button',
    children: [
      {
        path: 'button',
        name: 'button',
        component: () => import('@/packages/button/doc/doc.md'),
      },
      {
        path: 'input',
        name: 'input',
        component: () => import('@/packages/input/doc/doc.md'),
      },
      {
        path: 'textarea',
        name: 'textarea',
        component: () => import('@/packages/textarea/doc/doc.md'),
      },
    ],
  },
]
