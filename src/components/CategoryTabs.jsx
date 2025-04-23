// // import React, { useState } from 'react';
// // import { Tabs, Tab, Box } from '@mui/material';

// // const categories = [
// //   'All',
// //   'Tea and Breakfast',
// //   'Lassi',
// //   'Parathas',
// //   "Biryani",
// //   "Pulao",

// //   'Juices and Milkshakes',
// // ];

// // function CategoryTabs({ onChange }) {
// //   const [value, setValue] = useState(0);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //     onChange(categories[newValue]);
// //   };

// //   return (
// //     <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4 }}>
// //       <Tabs
// //         value={value}
// //         onChange={handleChange}
// //         variant="scrollable"
// //         scrollButtons="auto"
// //       >
// //         {categories.map((cat, idx) => (
// //           <Tab label={cat} key={idx} />
// //         ))}
// //       </Tabs>
// //     </Box>
// //   );
// // }

// // export default CategoryTabs;


// // MenuGrid.js (Full Width Cards on Mobile)
// import React from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   CardActions,
//   Button,
// } from '@mui/material';

// function MenuGrid({ items, onAddToCart }) {
//   return (
//     <Box
//       sx={{
//         mt: 4,
//         display: 'grid',
//         gridTemplateColumns: {
//           xs: '1fr', // full width on mobile
//           sm: '1fr',
//           md: 'repeat(3, 1fr)', // 3 columns on desktop
//         },
//         gap: 3,
//         pb: 2,
//       }}
//     >
//       {items.map((item) => (
//         <Card
//           key={item.id}
//           sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: '100%' }}
//         >
//           <CardMedia
//             component="img"
//             sx={{ width: '100%', height: { xs: 160, sm: 180 }, objectFit: 'cover' }}
//             image={item.image}
//             alt={item.name}
//           />
//           <CardContent>
//             <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
//               {item.name}
//             </Typography>
//             <Typography color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
//               Rs. {item.price}
//             </Typography>
//           </CardContent>
//           <CardActions sx={{ justifyContent: 'center', flexWrap: 'wrap', mt: 'auto', pb: 2 }}>
//             <Button
//               size="small"
//               variant="contained"
//               color="secondary"
//               onClick={() => onAddToCart(item)}
//             >
//               Add to Cart
//             </Button>
//           </CardActions>
//         </Card>
//       ))}
//     </Box>
//   );
// }

// export default MenuGrid;

// // CategoryTabs.js (Responsive Full Width with Flex Wrap)
// import React, { useState } from 'react';
// import { Tabs, Tab, Box } from '@mui/material';

// const categories = [
//   'All',
//   'Tea and Breakfast',
//   'Lassi',
//   'Parathas',
//   'Biryani',
//   'Pulao',
//   'Juices and Milkshakes',
// ];

// function CategoryTabs({ onChange }) {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     onChange(categories[newValue]);
//   };

//   return (
//     <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4, px: { xs: 1, sm: 2 } }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons="auto"
//         allowScrollButtonsMobile
//         aria-label="category tabs"
//         sx={{
//           display: 'flex',
//           flexWrap: { xs: 'wrap', sm: 'nowrap' },
//           justifyContent: { xs: 'center', sm: 'flex-start' },
//         }}
//       >
//         {categories.map((cat, idx) => (
//           <Tab label={cat} key={idx} sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' }, minWidth: 'auto' }} />
//         ))}
//       </Tabs>
//     </Box>
//   );
// }

// export default CategoryTabs;

// CategoryTabs.js (Responsive Full Width with Flex Wrap)
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const categories = [
  'All',
  'Tea and Breakfast',
  'Lassi',
  'Parathas',
  'Biryani',
  'Pulao',
  'Juices and Milkshakes',
];

function CategoryTabs({ onChange }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(categories[newValue]);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4, px: { xs: 1, sm: 2 } }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="category tabs"
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        {categories.map((cat, idx) => (
          <Tab label={cat} key={idx} sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' }, minWidth: 'auto' }} />
        ))}
      </Tabs>
    </Box>
  );
}

export default CategoryTabs;

