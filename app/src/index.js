import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import algoliasearch from "algoliasearch/lite";
import React from "react";
import { InstantSearch } from "react-instantsearch-dom";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import { AppProvider } from "##/components/shared/AppContext";
import Root from "##/components/Root";

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    margin: 0;
    font-size: 12px;
    padding: 0;
    color: #363433;
    width: 100%;
  }

  @media only screen and (min-width: 800px) {
    html, body, #app {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1280px) {
    html, body, #app {
      font-size: 20px;
    }
  }
`;

const client = new ApolloClient({
  uri: `${process.env.SERVICES_URI || "http://localhost:4000"}/graphql`,
  cache: new InMemoryCache(),
});

const searchClient = algoliasearch(
  process.env.ALGOLIA_KEY,
  process.env.ALGOLIA_PASS
);

render(
  <AppProvider>
    <ApolloProvider client={client}>
      <InstantSearch indexName="chapters" searchClient={searchClient}>
        <GlobalStyle />
        <Root />
      </InstantSearch>
    </ApolloProvider>
  </AppProvider>,
  document.getElementById("app")
);
