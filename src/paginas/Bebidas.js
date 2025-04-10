import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Bebidas() {
  return (
    <div>
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <Button component={Link} to="/pedidos" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
      </Box>

      <Typography variant="h3" gutterBottom>
        Opções de Bebidas
      </Typography>
      <Typography variant="body1" component="p">
        Aqui estão algumas opções de bebidas para você escolher:
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button component={Link} to="/cervejas" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Cervejas</Button>
        <Button component={Link} to="/refrigerantes" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Refrigerantes</Button>
        <Button component={Link} to="/sucos" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Sucos</Button>
        <Button component={Link} to="/whiskeys" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Whiskeys</Button>
        <Button component={Link} to="/vinhos" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Vinhos</Button>

      </Box>
    </div>
  );
}

export default Bebidas;