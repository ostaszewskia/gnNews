import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCode } from "country-list";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../helper/colors.js";
import { countArticles } from "../features/countArticles/countArticlesSlice.js";
import { TitleContainer, TitleText } from "../theme/styled.js";
import { useTranslation } from "react-i18next";

const API_KEY = "ca44286c27dc440ebccc689658b39469";

const Canvas = () => {
  const { countryName } = useParams();
  const { t } = useTranslation();

  const isList = useSelector((state) => state.isList.value);
  const dispatch = useDispatch();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [articles, setArticles] = useState([]);
  const [dialogData, setDialogData] = useState({});
  const [open, setOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState(true);

  const url =
    "https://newsapi.org/v2/top-headlines?" +
    `country=${getCode(countryName)}&` +
    `apiKey=${API_KEY}`;

  useEffect(() => {
    getArticles();
  }, [countryName]);

  const getArticles = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        console.log("data: ", data);
        if (data?.articles.length === 0) {
          dispatch(countArticles(0));
          setPlaceholder(true);
        } else {
          dispatch(countArticles(data?.articles.length));
          setPlaceholder(false);
        }
      });
  };

  const handleNewsClick = (element) => {
    setDialogData(element);
    setOpen(true);
  };

  return (
    <>
      {placeholder ? (
        <TitleContainer>
          <TitleText variant="h1" sx={{ display: { xs: "none", md: "block" } }}>
          {t('canvas.noArticles')}
          </TitleText>
          <TitleText variant="h3" sx={{ display: { sm: "block", md: "none" } }}>
          {t('canvas.noArticles')}
          </TitleText>
        </TitleContainer>
      ) : isList ? (
        <List sx={{ background: Colors.background }}>
          {articles?.articles?.map((element, index) => (
            <>
              <ListItemButton
                key={index}
                sx={{
                  borderBottomWidth: "1px",
                  borderBottomColor: Colors.grey,
                }}
                onClick={() => handleNewsClick(element)}
              >
                <ListItemText
                  primary={element?.title}
                  secondary={
                    moment(element?.publishedAt).format("DD/MM/YYYY") +
                    ", " +
                    (element?.author
                      ? element?.author
                      : "brak danych o autorze")
                  }
                />
              </ListItemButton>
              <Divider />
            </>
          ))}
        </List>
      ) : (
        <Box sx={{ flexGrow: "1", padding: "10px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 4, md: 8 }}
            justify="center"
          >
            {articles?.articles?.map((element, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={12}>
                  <Card>
                    <CardActionArea onClick={() => handleNewsClick(element)}>
                      <CardMedia
                        component="img"
                        height={"auto"}
                        src={element?.urlToImage}
                        alt="article photo"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {element?.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {element?.description}
                        </Typography>
                        <Divider
                          sx={{ marginTop: "20px", marginBottom: "2px" }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {moment(element?.publishedAt).format("DD/MM/YYYY") +
                            ", " +
                            (element?.author
                              ? element?.author
                              : "brak danych o autorze")}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialogTitle"
      >
        <DialogTitle id="dialogTitle">{dialogData?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              {dialogData?.description ? dialogData?.description : "Brak opisu"}
            </Typography>
            <Typography sx={{ marginTop: "20px" }}>
              Autor:{" "}
              {dialogData?.author
                ? dialogData?.author
                : "brak danych o autorze"}
            </Typography>
            <Typography sx={{ marginTop: "20px" }}>
              <Link href={dialogData?.url} target="_blank" rel="noreferrer">
                Link do artykułu
              </Link>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Canvas;
