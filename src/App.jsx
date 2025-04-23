import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Badge,
  IconButton,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryTabs from './components/CategoryTabs';
import MenuGrid from './components/MenuGrid';
import CartDrawer from './components/CartDrawer';
import menuItems from './data/Menu';
import Gallery from './components/Gallery';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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

  if (showSplash) {
    return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffe0b2',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            px: 2,
            textAlign: 'center',
            animation: 'slide-in 2s ease-in-out',
            '@keyframes slide-in': {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(0)' },
            },
          }}
        >
          Welcome to Chai Paratha Lounge & Cafe
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="2xl" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3">Chai Paratha Lounge & Cafe</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Authentic Desi Taste – 24/7 Service – Family Sitting
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="subtitle1" color="initial" style={{ fontSize: '2.5rem', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
            Free Delievery Service in j3 Block Johar Town
          </Typography>
          <Typography variant="subtitle1" color="warning" style={{ fontSize: '2rem', backgroundColor: 'darkgreen', color:"white", display:'inline-block',marginTop:'12px', padding:"0.6rem", borderRadius:'50px'}}>Home Delivery Available</Typography>
        </Box>
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

      <Box sx={{ my: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Restaurant Gallery
        </Typography>
        <Gallery />
      </Box>

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