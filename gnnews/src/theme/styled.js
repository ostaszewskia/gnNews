import { styled } from "@mui/material/styles";
import { Colors } from "../helper/colors";
import { Box, Typography } from "@mui/material";

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "90vh",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    overflow: "scroll",
    height: "86vh",
  },
  "*::-webkit-scrollbar": {
    width: "1px",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: Colors.blue,
  },
}));

export const MenuContainer = styled(Box)(({ theme }) => ({
  backgroundColor: Colors.secondaryBackground,
  width: "20%",
  height: "90vh",
  display: "flex",
  borderBottom: "1px solid lightgrey",
  color: Colors.blue,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  h1: {
    fontSize: '4rem',
    [theme.breakpoints.down("sm")]: {
      fontSize: '0,5rem',
    }
  }
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  textAlign: "center",
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  background: Colors.backgroundImage,
  height: "5vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: Colors.secondaryText,
  [theme.breakpoints.down("sm")]: {
    height: "7vh",
  },
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "5vh",
  [theme.breakpoints.down("sm")]: {
    height: "7vh",
  },
}));

export const MiddleContainer = styled(Box)(({ theme }) => ({
  backgroundColor: Colors.background,
  width: "100%",
  height: "100%",
  overflow: "scroll",
  overflowX: "hidden",
  borderBottom: "1px solid lightgrey",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    overflow: "visible",
  },
}));