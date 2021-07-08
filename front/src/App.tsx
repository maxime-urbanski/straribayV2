import React, { createContext, useState } from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { UserContext } from "./UserContext";

import theme from "./styles/theme";

const httpLink = createHttpLink({
  uri: 'http://localhost:7777/graphql' 
  // uri: 'https://prod.straribay.wns.wilders.dev/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  }
});

const App = (): JSX.Element => {
  const [userEmail, setUserEmail] = useState("");
  console.log("App : ", userEmail);

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{userEmail, setUserEmail}}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </UserContext.Provider>
    </ApolloProvider>
  );
};

export default App;