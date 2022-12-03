import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Sourcegraph code search" subtitle="search the code">
      <HeaderLabel label="Owner" value="DevX Team" />
      <HeaderLabel label="Lifecycle" value="Beta" />
    </Header>
    <Content>
      <ContentHeader title="Code search">
        <SupportButton>Search the code using literal or regex search</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Search through the code">
            {/* <Typography variant="body1">
              SOURCEGRAPH! search 
            </Typography> */}
          </InfoCard>
        </Grid>
        <Grid item>
            <iframe
            src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTkzMA=="
            frameBorder="0"
            sandbox="allow-scripts allow-same-origin allow-popups"
            width="100%"
            height="500px"
          ></iframe>
        </Grid>
        {/* <Grid item>
          <ExampleFetchComponent />
        </Grid> */}
      </Grid>
    </Content>
  </Page>
);
