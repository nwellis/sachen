import React from "react";
import PropTypes from "prop-types";
import { Grid, Container, Card, CardMedia, Typography, ListItem, List, ListItemText } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const Exhibitions = ({exhibitions = []}) => {
  const theme = useTheme();
  console.log(exhibitions)
  return (
    <Container style={{ padding: `${theme.spacing(4)}px` }}>
      <Card>
        <List>
          {exhibitions.map(event => (
            <ListItem key={event.dateDisplay}>
              <ListItemText
                primary={event.dateDisplay}
                secondary={event.description}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </Container>
  );
};

Exhibitions.propTypes = {
  exhibitions: PropTypes.arrayOf(PropTypes.shape({
    dateDisplay: PropTypes.string,
    description: PropTypes.string
  }))
};

export default Exhibitions;
