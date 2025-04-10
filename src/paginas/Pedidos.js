import React from 'react';
import { Typography, Box } from '@mui/material';
import Menu from '../componentes/layout/Menu';

function Pedidos() {
  return (
    <div>
          <Typography variant="h3" gutterBottom component="h1" align="center">
            Pedidos
          </Typography>
          <Typography variant="body1" component="p">
            Aqui estão algumas opções para você escolher:
          </Typography>
      <Menu/>
      
    </div>
);
}

export default Pedidos;