import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { srcTestPlugin, SrcTestPage } from '../src/plugin';

createDevApp()
  .registerPlugin(srcTestPlugin)
  .addPage({
    element: <SrcTestPage />,
    title: 'Root Page',
    path: '/src-test'
  })
  .render();
