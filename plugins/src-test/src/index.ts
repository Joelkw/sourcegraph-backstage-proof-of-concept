export { srcTestPlugin, SrcTestPage } from './plugin';
// import react
import React from 'react'
import { useEntity } from '@backstage/plugin-catalog-react';
import { ExampleComponent } from './components/ExampleComponent';
import { FrontpageComponent } from './components/FrontpageComponent';
  
export const MyPluginEntityContent = () => {
//   const { entity, loading, error, refresh } = useEntity();
    return ExampleComponent()

};

export const SourcegraphFrontpageEntityContent = () => {
    // const 
    return FrontpageComponent()
}

