import Router from "./Router";
import "./App.css";

import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;