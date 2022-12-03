import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import { githubAuth } from '@backstage/core-components'
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
  githubAuthApiRef, 
} from '@backstage/core-plugin-api';
import {
  GithubAuth 
} from '@backstage/core-app-api';


export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
];

