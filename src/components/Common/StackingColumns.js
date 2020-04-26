import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

const xsMap = {
  2: 12,
  3: 12,
  4: 6,
  6: 4,
};

const StackingColumns = ({ components, columns = 2, spacing = 0 }) => {
  const mdBp = 12 / columns;
  const xsBp = xsMap[columns];

  return (
    <Grid container spacing={spacing}>
      {components.map((component) => (
        <Grid item container xs={xsBp} md={mdBp}>
          {component}
        </Grid>
      ))}
    </Grid>
  );
};

StackingColumns.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node),
  spacing: PropTypes.oneOf(2, 3, 4, 6),
};

export default StackingColumns;
