import { createMuiTheme } from "@material-ui/core/styles";
import { sunsetPalette } from "./palette";

const customPalette = sunsetPalette;

export const theme = createMuiTheme({
  palette: {
    ...customPalette,
    primary: {
      main: customPalette.primary
    },
    secondary: {
      main: customPalette.secondary
    }
  },
  typography: {
    fontFamily: [
      'Ubuntu'
    ]
  },
});
