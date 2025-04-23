import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';

const galleryImages = [
  'https://i.imgur.com/IFe4n9T.jpg',
  'https://i.imgur.com/0fhbObS.jpg',
  'https://i.imgur.com/BvGp89D.jpg',
  'https://i.imgur.com/V9PfGFS.jpg',
  'https://i.imgur.com/MkA1hI2.jpg',
  'https://i.imgur.com/G54s9km.jpg',
];

function Gallery() {
  return (
    <Grid container spacing={2}>
      {galleryImages.map((img, index) => (
        <Grid item xs={12} sm={6} md={12} key={index}>
          <Card>
            <CardMedia component="img" height="200" image={img} alt={`Gallery ${index}`} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Gallery;
