import { createTheme } from "@mui/material/styles";
import { Colors } from "../helper/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: Colors.text,
      },
      secondary: {
        main: Colors.secondaryText,
      },
    },
    typography: {
      fontFamily: "Segoe UI",
    },
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            flexDirection: "row",
            display: "flex",
            gap: "1rem",
            flexGrow: 1,
            justifyContent: "flex-start",
            alignItems: "self-start",
            fontWeight: "bold",
            width: '100%',
            color: Colors.color,
            "&.Mui-selected": {
              color: Colors.blue,
            },
          },
        },
      },

    },
  });