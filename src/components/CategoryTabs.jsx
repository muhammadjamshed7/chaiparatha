import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const categories = [
  'All',
  'Tea and Breakfast',
  'Lassi',
  'Parathas',
  "Biryani",
  "Pulao",

  'Juices and Milkshakes',
];

function CategoryTabs({ onChange }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(categories[newValue]);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {categories.map((cat, idx) => (
          <Tab label={cat} key={idx} />
        ))}
      </Tabs>
    </Box>
  );
}

export default CategoryTabs;
