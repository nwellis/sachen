import React from "react";
import PropTypes from "prop-types";
import {
  ExhibitionsGrid,
  EventsSection,
  CoverSection,
  GallerySection,
} from "./styles";
import Events from "./Events";
import { CardMedia } from "@material-ui/core";

import { Board } from "assets/images/exhibitions";
import { FitContentCard } from "../Common";

const Exhibitions = ({ exhibitions = [], alignment = "center" }) => {
  return (
    <ExhibitionsGrid>
      <EventsSection>
        <Events exhibitions={exhibitions} alignment={alignment} />
      </EventsSection>
      <CoverSection>
        <FitContentCard>
          <CardMedia title="Painting 1" component="img" src={Board} />
        </FitContentCard>
      </CoverSection>
      <GallerySection></GallerySection>
    </ExhibitionsGrid>
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
