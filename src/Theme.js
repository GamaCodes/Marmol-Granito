import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#afc5e8",
      main: "#608cd1",
      dark: "#608cd1",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e22a2e",
      main: "#ad171a",
      dark: "#730f11",
      contrastText: "#fff",
    },
  },
});

export default theme;
