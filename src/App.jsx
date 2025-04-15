// App.js
import React, { useState } from 'react';
import { Container, Typography, Box, Badge, IconButton, Drawer, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryTabs from './components/CategoryTabs';
import MenuGrid from './components/MenuGrid';
import CartDrawer from './components/CartDrawer';
import menuItems from './data/Menu';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCheckout = () => {
    setModalOpen(true);
  };

  const generateWhatsAppMessage = () => {
    const orderText = cart
      .map(
        (item) => `${item.name} x ${item.quantity} = Rs. ${item.price * item.quantity}`
      )
      .join('%0A');
    const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);
    return `https://wa.me/923029015909?text=New%20Order:%0A${orderText}%0ATotal:%20Rs.%20${total}`;
  };

  const handleCall = () => {
    window.location.href = 'tel:+923029015909';
  };

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3">Chai Paratha Lounge & Cafe</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Authentic Desi Taste – 24/7 Service – Family Sitting
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <IconButton color="primary" onClick={() => setDrawerOpen(true)}>
          <Badge badgeContent={cart.reduce((a, c) => a + c.quantity, 0)} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>

      <CategoryTabs onChange={setSelectedCategory} />
      <MenuGrid items={filteredItems} onAddToCart={handleAddToCart} />

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <CartDrawer
          cart={cart}
          onQuantityChange={handleQuantityChange}
          onCheckout={handleCheckout}
        />
      </Drawer>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Place Your Order</DialogTitle>
        <DialogContent>
          <Typography>Choose an option to place your order:</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={() => window.open(generateWhatsAppMessage(), '_blank')}
          >
            WhatsApp
          </Button>
          <Button variant="contained" color="primary" onClick={handleCall}>
            Call Us
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default App;