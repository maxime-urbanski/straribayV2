import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import theme from "./styles/theme";

const httpLink = createHttpLink({
  uri: 'https://prod.straribay.wns.wilders.dev/api/graphql',
  // uri: 'http://localhost:7777/graphql' 
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const App = (): JSX.Element => {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;