import * as React from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

import {
  Dashboard,
  ShoppingCart,
  People,
  BarChart,
  Layers,
  Assignment,
} from '@mui/icons-material';

export const ListItems = () => (
  <div>
    <ListItemButton>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCart />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChart />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Layers />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </div>
);
