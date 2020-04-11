import { createMuiTheme } from "@material-ui/core/styles";
import { sunsetPalette } from "./palette";

const customPalette = sunsetPalette;

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Ubuntu'
    ]
  },
  palette: {
    ...customPalette,
    primary: {
      main: customPalette.primary
    },
    secondary: {
      main: customPalette.secondary
    }
  }
});
