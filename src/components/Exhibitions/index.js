import React from "react";
import PropTypes from "prop-types";
import {
  ExhibitionsGrid,
  EventsSection,
  CoverSection,
  GallerySection,
} from "./styles";
import Events from "./Events";
import { CardMedia, Container, useTheme, Grid } from "@material-ui/core";

import {
  Board,
  HoldingArt,
  Presentation,
  Exhibit1,
  Exhibit2,
} from "assets/images/exhibitions";
import { FitContentCard } from "../Common";

const Exhibitions = ({ exhibitions = [], alignment = "center" }) => {
  const theme = useTheme();

  const leftColumnComponents = [
    <Events exhibitions={exhibitions} alignment={alignment} />,
    <FitContentCard>
      <CardMedia
        title="Conference Attendees holding art"
        component="img"
        src={HoldingArt}
      />
    </FitContentCard>,
  ];

  const rightColumnComponents = [
    <FitContentCard>
      <CardMedia title="Painting 1" component="img" src={Board} />
    </FitContentCard>,
    <FitContentCard>
      <CardMedia title="Painting 1" component="img" src={Presentation} />
    </FitContentCard>,
  ];

  const zippedComponents = leftColumnComponents
    .map((leftComponent, i) => {
      const rightComponent = rightColumnComponents[i];
      return [leftComponent, rightComponent];
    })
    .reduce((zipped, paired) => zipped.concat(paired), []);

  return (
    <Container style={{ padding: `${theme.spacing(4)}px` }}>
      <Grid container spacing={3}>
        {zippedComponents.map((component, i) => {
          const align = i % 2 === 0 ? "flex-end" : "flex-start";
          return (
            <Grid item container xs={12} md={6} justify={align}>
              {component}
            </Grid>
          );
        })}
      </Grid>
      <Grid item container xs={12} justify="center">
        <FitContentCard>
          <CardMedia title="Exhibit 1" component="img" src={Exhibit1} />
        </FitContentCard>
      </Grid>
      <Grid item container xs={12} justify="center">
        <FitContentCard>
          <CardMedia title="Exhibit 2" component="img" src={Exhibit2} />
        </FitContentCard>
      </Grid>
    </Container>
  );
};

Exhibitions.propTypes = {
  exhibitions: PropTypes.arrayOf(
    PropTypes.shape({
      dateDisplay: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Exhibitions;
