import React from "react";
import PropTypes from "prop-types";
import { AppBar, Tabs, Tab, Typography } from "@material-ui/core";

export const TabKeys = {
  Gallery: 0,
  Exhibitions: 1,
  Contact: 2,
};

const NavBar = ({ selected = TabKeys.Gallery, onTabSelect = () => {} }) => {
  const handleTabUpdate = (_, index) => onTabSelect(index);

  return (
    <AppBar position="relative" color="white">
      <Tabs
        value={selected}
        onChange={handleTabUpdate}
        centered
        indicatorColor="secondary"
      >
        {Object.keys(TabKeys).map((key) => (
          <Tab key={key} label={<Typography variant="h6">{key}</Typography>} />
        ))}
      </Tabs>
    </AppBar>
  );
};

NavBar.propTypes = {
  selected: PropTypes.oneOf(Object.values(TabKeys)),
  onTabSelect: PropTypes.func,
};

export default NavBar;
