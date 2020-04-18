import React from "react";
import PropTypes from "prop-types";
import { Container, ListItem, List, ListItemText, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Card } from "../Common";

const Exhibitions = ({exhibitions = [], alignment = 'center'}) => {
  const theme = useTheme();
  return (
    <Container style={{ padding: `${theme.spacing(4)}px` }}>
      <Card>
        <List>
          {exhibitions.map(event => (
            <ListItem key={event.dateDisplay}>
              <ListItemText
                primary={<Typography align={alignment} variant="h5">{event.dateDisplay}</Typography>}
                secondary={<Typography align={alignment} variant="h6">{event.description}</Typography>}
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
