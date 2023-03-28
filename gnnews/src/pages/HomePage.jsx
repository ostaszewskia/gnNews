import { Box, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { TitleContainer, TitleText } from "../theme/styled";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <TitleContainer>
      <TitleText variant="h1" sx={{ display: { xs: "none", md: "block" } }}>
        {t('mainPage.title')}
      </TitleText>
      <TitleText variant="h3" sx={{ display: { sm: "block", md: "none" } }}>
        {t('mainPage.title')}
      </TitleText>
    </TitleContainer>
  );
};

export default HomePage;
