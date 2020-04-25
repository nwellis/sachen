import React from "react";
import PropTypes from "prop-types";
import { ListItem, List, ListItemText, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { ExhibitionCard, MainContainer } from "./styles";
import Gallery from "./Gallery";

const Exhibitions = ({ exhibitions = [], alignment = "center" }) => {
  const theme = useTheme();
  return (
    <MainContainer>
      <ExhibitionCard>
        <List>
          {exhibitions.map((event, i) => (
            <ListItem
              key={event.dateDisplay}
              divider={i < exhibitions.length - 1}
            >
              <ListItemText
                primary={
                  <Typography align={alignment} variant="h5">
                    {event.dateDisplay}
                  </Typography>
                }
                secondary={
                  <Typography align={alignment} variant="h6">
                    {event.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </ExhibitionCard>
      <Gallery />
    </MainContainer>
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
