import React from "react";
import PropTypes from "prop-types";
import {
  ExhibitionsGrid,
  EventsSection,
  CoverSection,
  GallerySection,
} from "./styles";
import Events from "./Events";

const Exhibitions = ({ exhibitions = [], alignment = "center" }) => {
  return (
    <ExhibitionsGrid>
      <EventsSection>
        <Events exhibitions={exhibitions} alignment={alignment} />
      </EventsSection>
      <CoverSection></CoverSection>
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
