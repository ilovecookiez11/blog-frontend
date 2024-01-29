import React from 'react';
import { AppBar, Toolbar, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const MenuBar = () => (
    <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
            <Button component={RouterLink} color="inherit" to="/">
                Mi Blog
            </Button>
            <Button component={RouterLink} color="inherit" to="/new">
                Nuevo post
            </Button>
            <Button component={RouterLink} color="inherit" to="/search">
                Búsqueda
            </Button>
        </Toolbar>
    </AppBar>
);

export default MenuBar;