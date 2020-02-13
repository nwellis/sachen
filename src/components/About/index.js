import React from "react";
import PropTypes from "prop-types";
import { CardMedia } from "@material-ui/core";
import { HorizontalContent, HorizontalCard, VerticalCard } from "./styles";
import selfPortrait from "assets/images/sachen-portrait.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

const About = ({ paragraphs = [] }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const OrientationCard = ({ children }) =>
    matches ? (
      <HorizontalCard>{children}</HorizontalCard>
    ) : (
      <VerticalCard>{children}</VerticalCard>
    );

  return (
    <OrientationCard>
      <CardMedia
        title="Stephanie's Portrait"
        component="img"
        style={{ maxWidth: 300 }}
        src={selfPortrait}
      />
      <HorizontalContent>
        {paragraphs.map(content => (
          <p key={content}>{content}</p>
        ))}
      </HorizontalContent>
    </OrientationCard>
  );
};

About.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default About;
