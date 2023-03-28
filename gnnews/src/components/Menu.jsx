import React, { useState } from "react";
import { MenuContainer } from "../theme/styled";
import ReactCountryFlag from "react-country-flag";
import { Tab, Tabs } from "@mui/material";
import { getNames, getCode } from "country-list";
import { Link } from "react-router-dom";

const Menu = () => {
  const countryNames = getNames();
  const [value, setValue] = useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MenuContainer>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", width: "100%" }}
      >
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
    </MenuContainer>
  );
};

export default Menu;
