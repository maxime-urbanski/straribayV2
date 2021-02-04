import Router from "./Router";

import { ThemeProvider } from "styled-components";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

import theme from "./styles/theme";

const App = (): JSX.Element => {
  const client = new ApolloClient({
  uri: 'https://localhost:7777/graphql',
  cache: new InMemoryCache()
})
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;