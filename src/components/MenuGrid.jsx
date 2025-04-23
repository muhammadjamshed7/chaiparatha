// import React from 'react';
// import {
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   CardActions,
//   Button,
// } from '@mui/material';

// function MenuGrid({ items, onAddToCart }) {
//   return (
//     <Grid container spacing={3} sx={{ mt: 4 }}>
//       {items.map((item) => (
//         <Grid item xs={12} sm={6} md={4} key={item.id}>
//           <Card>
//             <CardMedia
//               component="img"
//               height="160"
//               image={item.image}
//               alt={item.name}
//             />
//             <CardContent>
//               <Typography variant="h6">{item.name}</Typography>
//               <Typography color="text.secondary">Rs. {item.price}</Typography>
//             </CardContent>
//             <CardActions>
//               <Button
//                 size="small"
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => onAddToCart(item)}
//               >
//                 Add to Cart
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default MenuGrid;


// MenuGrid.js (Full Width Cards on Mobile)
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

function MenuGrid({ items, onAddToCart }) {
  return (
    <Box
      sx={{
        mt: 4,
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr', // full width on mobile
          sm: '1fr',
          md: 'repeat(3, 1fr)', // 3 columns on desktop
        },
        gap: 3,
        pb: 2,
      }}
    >
      {items.map((item) => (
        <Card
          key={item.id}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <CardMedia
            component="img"
            sx={{ width: '100%', height: { xs: 160, sm: 180 }, objectFit: 'cover' }}
            image={item.image}
            alt={item.name}
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
              {item.name}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Rs. {item.price}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', flexWrap: 'wrap', mt: 'auto', pb: 2 }}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => onAddToCart(item)}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default MenuGrid;

