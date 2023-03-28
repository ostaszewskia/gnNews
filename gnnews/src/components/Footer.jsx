import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { FooterContainer } from "../theme/styled";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const count = useSelector((state) => state.articles.value);
  const { t } = useTranslation();


  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <FooterContainer>
      <Typography variant="button">{t('footer.articles')} {count}</Typography>
      <Typography
        variant="button"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <AccessTimeFilledIcon fontSize="small" sx={{ marginRight: "5px" }} />{" "}
        {time.toLocaleTimeString()}
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
