import React from "react";
import PropTypes from "prop-types";
import Events from "./Events";
import { CardMedia, Container, useTheme } from "@material-ui/core";

import {
  Board,
  HoldingArt,
  Presentation,
  Exhibit1,
  Exhibit2,
} from "assets/images/exhibitions";
import { Card } from "../Common";
import StackGrid from "react-stack-grid";

const images = [
  {
    src: Board,
    title: "Women's conference promotion art",
  },
  {
    src: HoldingArt,
    title: "Conference attendees holding art",
  },
  {
    src: Presentation,
    title: "Conference presentation art",
  },
  {
    src: Exhibit1,
    title: "Art on display, part 1",
  },
  {
    src: Exhibit2,
    title: "Art on display, part 2",
  },
];

const Exhibitions = ({ exhibitions = [], alignment = "center" }) => {
  const theme = useTheme();

  const imageCards = images.map(({ src, title }) => (
    <Card>
      <CardMedia title={title} component="img" src={src} />
    </Card>
  ));

  const allItems = [
    <Events exhibitions={exhibitions} alignment={alignment} />,
  ].concat(imageCards);

  return (
    <Container style={{ padding: `${theme.spacing(4)}px` }}>
      <StackGrid columnWidth={450} gutterWidth={12} monitorImagesLoaded={true}>
        {allItems}
      </StackGrid>
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
