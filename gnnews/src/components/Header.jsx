import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  List,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Colors } from "../helper/colors";
import { getNames, getCode } from "country-list";
import { useDispatch, useSelector } from "react-redux";
import { setIsList } from "../features/viewModal/viewModalSlice";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ReactCountryFlag from "react-country-flag";
import { HeaderContainer } from "../theme/styled";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;
const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polski" },
};

const Header = (props) => {
  const isList = useSelector((state) => state.isList.value);
  const dispatch = useDispatch();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const countryNames = getNames();
  const { window } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(178);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ margin: "10px" }}>
      {t('header.drawer')}
      </Typography>
      <Divider />
      <List>
        <Tabs value={value} orientation="vertical" indicatorColor="">
          {countryNames.map((element, index) => (
            <Tab
              component={Link}
              to={`/country/${element}`}
              key={index}
              icon={
                <ReactCountryFlag
                  countryCode={getCode(element)}
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title={getCode(element)}
                />
              }
              iconPosition="start"
              label={element}
              wrapped
            />
          ))}
        </Tabs>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <HeaderContainer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" sx={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: Colors.secondaryText }}
            >
              gnNews
            </Typography>
          </Link>

          <div style={{ marginLeft: "auto" }}>
            {Object.keys(lngs).map((lng) => (
              <Button
                key={lng}
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}
              >
                <ReactCountryFlag
                countryCode={lng === 'en' ? 'us' : lng}
                svg
                style={{
                  width: i18n.resolvedLanguage === lng ? "2em" : "1em",
                  height: i18n.resolvedLanguage === lng ? "2em" : "1em",
                }}
                title={lngs[lng].nativeName}
              />
              </Button>
            ))}
            <IconButton onClick={() => setOpen(true)}>
              <VisibilityIcon sx={{ color: Colors.secondaryText }} />
            </IconButton>
            {isList ? (
              <IconButton onClick={() => dispatch(setIsList())} color="white">
                <ViewListIcon sx={{ color: Colors.secondaryText }} />
              </IconButton>
            ) : (
              <IconButton onClick={() => dispatch(setIsList())} color="white">
                <GridViewIcon sx={{ color: Colors.secondaryText }} />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ border: "1px solid black" }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialogTitle"
      >
        <DialogTitle id="dialogTitle">{t('header.popup.title')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography sx={{ marginBottom: "10px" }}>
            {t('header.popup.descriptionNegative')}
            </Typography>

            <Typography>
            {t('header.popup.descriptionPositive')}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            {t('header.button')}
          </Button>
        </DialogActions>
      </Dialog>
    </HeaderContainer>
  );
};

export default Header;
