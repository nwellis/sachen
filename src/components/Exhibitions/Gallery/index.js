import React from "react";
import { Grid, Container, CardMedia, useTheme, Paper } from "@material-ui/core";

const Gallery = () => {
  const theme = useTheme();

  return (
    <Container style={{ padding: `${theme.spacing(4)}px` }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Gallery;
