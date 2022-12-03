# Very hacky rough playground (danger!)

This was a one-evening-only experiment to see if I could put up a quick sourcegraph<-->backstage search integration, and an excuse to see how much chatGPT could help (it couldn't, actually – all the backstage info it gave me seemed to be outdated and from digging in it appears the component libraries have undergone refactors since GPT was trained). 

The `src-test` (which I meant in my head to stand for SouRCegraph-test, sorry for the confusion with `src/`'s main use in javascript) in the `plugin` directory has some of the quick hacky code (again, this was fast! It can be done very fast!). 

The modifications to get it to render are on the `packages/app/src/components/catalog/EntityPage.tsx` mainly. 

The rest of this was loosely based on the docs from: 
1. https://backstage.io/docs/plugins/
2. https://github.com/johnson-jesse/simple-backstage-app (note, this also seemed to be a bit outdated and if I have time I'll go back and make a PR to it) 
3. the Backstage tutorial starting here: https://backstage.io/docs/getting-started/running-backstage-locally
