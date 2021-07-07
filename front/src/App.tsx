import React, { createContext, useState } from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { UserContext } from "./UserContext";

import theme from "./styles/theme";

const backUrl = process.env.REACT_APP_BACK_URL;

const httpLink = createHttpLink({
  uri: `${backUrl}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  }
});

const App = (): JSX.Element => {
  const [userEmail, setUserEmail] = useState("");

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
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
