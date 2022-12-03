import React from 'react';
import { Typography, Grid, SvgIcon } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { useEntity, EntitySearchBar, EntityListProvider } from '@backstage/plugin-catalog-react';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { NONAME } from 'dns';




export const FrontpageComponent = () => {
  const entity = useEntity();
  console.log(entity);
  const annotations = entity.entity.metadata.annotations ? entity.entity.metadata.annotations : null; 
  console.log("^^ boom boom ^^");
  console.log(annotations);
  const ghSlug = annotations ? annotations["github.com/project-slug"] : null;
  let formatSourcegraphLink = 'https://sourcegraph.com/search?q=context%3Aglobal+repo%3A%5Egithub%5C.com%2F' 
  ghSlug ? formatSourcegraphLink+= encodeURI(ghSlug) : null; // haha this is bad code
  console.log(formatSourcegraphLink);
  console.log(ghSlug); 
  return (
  <Page themeId="tool">
    {/* <Header title="Sourcegraph code search" subtitle="search the code">
      <HeaderLabel label="Owner" value="DevX Team" />
      <HeaderLabel label="Lifecycle" value="Beta" />
    </Header> */}
    <Content>
      {/* <ContentHeader title="Code search">
        <SupportButton>Search the code using literal or regex search</SupportButton>
      </ContentHeader> */}
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard>
            <img src="https://d33wubrfki0l68.cloudfront.net/8f6a3867f7da850e890df924f482dfe622271400/ba12f/static/sourcegraph-logo.svg"
            height="50px" />
            <Typography variant="body1">
              <a href={formatSourcegraphLink}><em>Go search through this code on </em><img src="https://sourcegraph.com/.assets/img/sourcegraph-mark.svg?v2" height="12em"/> Sourcegraph</a>, or search below (cmd+enter to search)
            </Typography>
            <Content>
              Search the code
              <EntityListProvider><EntitySearchBar /></EntityListProvider>
            </Content>
            <iframe
            src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTkzMA=="
            frameBorder="0"
            sandbox="allow-scripts allow-same-origin allow-popups"
            width="100%"
            height="500px"
          ></iframe>
          </InfoCard>
        </Grid>
        <Grid item>
           
        </Grid>
        {/* <Grid item>
          <ExampleFetchComponent />
        </Grid> */}
      </Grid>
    </Content>
  </Page>
)}
;
