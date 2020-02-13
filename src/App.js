import React from "react";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./theme";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Layout />
        </StyledThemeProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
