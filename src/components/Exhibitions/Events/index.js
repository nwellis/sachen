import React from "react";
import PropTypes from "prop-types";
import { ListItem, List, ListItemText, Typography } from "@material-ui/core";
import { Card } from "../../Common";

const Events = ({ exhibitions = [], alignment = "center" }) => {
  return (
    <Card>
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
    </Card>
  );
};

Events.propTypes = {
  exhibitions: PropTypes.arrayOf(
    PropTypes.shape({
      dateDisplay: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Events;
