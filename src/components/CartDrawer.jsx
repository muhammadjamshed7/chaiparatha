
// CartDrawer.js
import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartDrawer({ cart, onQuantityChange, onCheckout }) {
  return (
    <Box sx={{ width: 300, p: 2 }}>
      <Typography variant="h6">Your Cart</Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        {cart.map((item) => (
          <ListItem key={item.id} secondaryAction={
            <Box>
              <IconButton onClick={() => onQuantityChange(item.id, -1)}>
                <RemoveIcon />
              </IconButton>
              <Typography component="span" sx={{ mx: 1 }}>{item.quantity}</Typography>
              <IconButton onClick={() => onQuantityChange(item.id, 1)}>
                <AddIcon />
              </IconButton>
            </Box>
          }>
            <ListItemText
              primary={item.name}
              secondary={`Rs. ${item.price} x ${item.quantity} = Rs. ${item.price * item.quantity}`}
            />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1">
        Total: Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </Typography>
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={onCheckout}>
        Checkout
      </Button>
    </Box>
  );
}

export default CartDrawer;
