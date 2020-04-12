import React from "react";
import PropTypes from "prop-types";
import { Grid, Container, Card, CardMedia } from "@material-ui/core";
import {
  painting1,
  painting2,
  painting3,
  painting4,
  painting5,
  painting6,
  painting7,
  painting8,
  painting9,
  painting10,
  painting11,
  painting12,
  painting13,
  painting14
} from "assets/images/paintings";
import { useTheme } from "@material-ui/styles";

const Gallery = () => {
  const theme = useTheme();
  return (
    <Container style={{ padding: `${theme.spacing(4)}px` }}>
      <Grid container spacing={2}>
        {/* Section 1 */}
        <Grid item xs={8}>
          <Card>
            <CardMedia title="Painting 1" component="img" src={painting1} />
          </Card>
        </Grid>
        <Grid item container xs={4} alignItems="center">
          <Grid item xs={12}>
            <Card>
              <CardMedia title="Painting 2" component="img" src={painting2} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardMedia title="Painting 3" component="img" src={painting3} />
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Card>
            <CardMedia title="Painting 4" component="img" src={painting4} />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardMedia title="Painting 5" component="img" src={painting5} />
          </Card>
        </Grid>
        {/* Section 2 */}
        <Grid item xs={6}>
          <Card>
            <CardMedia title="Painting 6" component="img" src={painting6} />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia title="Painting 7" component="img" src={painting7} />
          </Card>
        </Grid>
        {/* Section 3 */}
        <Grid item container xs={2} alignItems="center">
          <Grid item xs={12}>
            <Card>
              <CardMedia title="Painting 8" component="img" src={painting8} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardMedia title="Painting 9" component="img" src={painting9} />
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Card>
            <CardMedia title="Painting 10" component="img" src={painting10} />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card>
            <CardMedia title="Painting 11" component="img" src={painting11} />
          </Card>
        </Grid>
        {/* Section 4 */}
        <Grid item xs={8}>
          <Card>
            <CardMedia title="Painting 12" component="img" src={painting12} />
          </Card>
        </Grid>
        <Grid item container xs={4} alignItems="center">
          <Grid item xs={12}>
            <Card>
              <CardMedia title="Painting 13" component="img" src={painting13} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardMedia title="Painting 14" component="img" src={painting14} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

Gallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string)
};

export default Gallery;
