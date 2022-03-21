import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      component: '@/layouts/layout/index',
      routes: [
        { path: '/', exact: true, redirect: '/dashboard' },
        { path: '/dashboard', component: '@/pages/dashboard/index' },
      ],
    },
  ],
  fastRefresh: {},
});
