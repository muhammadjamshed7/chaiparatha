import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';

const galleryImages = [
  "g1.jpeg",
  "g2.jpeg",
  "g3.jpeg",
  "g4.jpeg",
  "g5.jpeg",
  "g6.jpeg",
  "g7.jpeg",
  "g8.jpeg",
  "g9.jpeg",
];

function Gallery() {
  return (
    <Grid container spacing={5} sx={{ mt: 4 }}>
      {galleryImages.map((img, index) => (
        <Grid item xs={12} sm={12} md={4} lg={12} key={index}>
          <Card>
            <CardMedia
              component="img"
              sx={{ height: 600, width: 400, objectFit: "cover", margin: "auto" }}
              image={img}
              alt={`Gallery ${index}`}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Gallery;
