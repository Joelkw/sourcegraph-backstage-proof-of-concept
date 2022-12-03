import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const srcTestPlugin = createPlugin({
  id: 'src-test',
  routes: {
    root: rootRouteRef,
  },
});

export const SrcTestPage = srcTestPlugin.provide(
  createRoutableExtension({
    name: 'SrcTestPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
