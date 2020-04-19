import React from "react";
import "./App.css";
import { ThemeProvider as MuiThemeProvider, StylesProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./theme";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Layout />
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;
