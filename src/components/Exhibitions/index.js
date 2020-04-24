import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  ListItem,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { ExhibitionCard } from "./styles";

const Exhibitions = ({ exhibitions = [], alignment = "center" }) => {
  const theme = useTheme();
  return (
    <Container
      style={{
        padding: `${theme.spacing(4)}px`,
        display: "flex",
        justifyContent: "center",
      }}
    >
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
