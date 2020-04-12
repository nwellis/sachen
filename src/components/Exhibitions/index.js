import React from "react";
import PropTypes from "prop-types";
import { Container, Card, ListItem, List, ListItemText, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const Exhibitions = ({exhibitions = [], alignment = 'center'}) => {
  const theme = useTheme();
  console.log(exhibitions)
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
