import React from "react";
import PropTypes from "prop-types";
import { Grid, Container, Card, CardMedia } from "@material-ui/core";
import StackGrid from "react-stack-grid";
import {
  painting1,
  painting2,
  painting3,
  painting4,
  painting5,
  painting6,
  painting7,
  painting8,
  painting9,
  painting10,
  painting11,
  painting12,
  painting13,
  painting14
} from "assets/images/paintings";
import { useTheme } from "@material-ui/styles";

const paintingsInOrder = [
  painting1,
  painting2,
  painting3,
  painting4,
  painting5,
  painting6,
  painting7,
  painting8,
  painting9,
  painting10,
  painting11,
  painting12,
  painting13,
  painting14
];

const StaggeredGallery = () => {
  const theme = useTheme();
  return (
    <Container style={{ padding: `${theme.spacing(4)}px` }}>
      <StackGrid columnWidth={380}>
        {paintingsInOrder.map((painting, index) => (
          <Card>
            <CardMedia
              title={`Painting ${index}`}
              component="img"
              src={painting}
            />
          </Card>
        ))}
      </StackGrid>
    </Container>
  );
};

StaggeredGallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string)
};

export default StaggeredGallery;
