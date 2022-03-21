import React from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import { MenuSide } from '@/components/material/list-items/style';
import { ListItems } from '@/components/material/list-items';
import { Menu, AccountCircleOutlined } from '@mui/icons-material';
import { ContainerStyled } from '@/layouts/layout/style';

const Layout: React.FC = ({ children }) => {
  return (
    <Grid container={true} justifyContent={'space-between'}>
      <AppBar position={'static'}>
        <Toolbar>
          <IconButton color={'inherit'}>
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, margin: '0 20px' }}
          >
            Starboard
          </Typography>
          <IconButton color={'inherit'}>
            <AccountCircleOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid item={true} maxWidth={200}>
        <MenuSide>
          <ListItems />
        </MenuSide>
      </Grid>
      <Grid item={true} xs={true}>
        <ContainerStyled>{children}</ContainerStyled>
      </Grid>
    </Grid>
  );
};

export default Layout;
