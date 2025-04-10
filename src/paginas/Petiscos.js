import React from 'react';
import { Typography, Box, Button, } from '@mui/material';
import { Link } from 'react-router-dom';

function Petiscos() {
  return (
    <div>
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <Button component={Link} to="/pedidos" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
      </Box>
      <Box sx={{ mt: 4 }}>

        <Typography variant="h3" gutterBottom>
        Opções de Petiscos
        </Typography>
         <Typography variant="body1" component="p">
         Aqui estão algumas opções de petiscos para você escolher!
        </Typography>
      </Box>
        
      <ul>
        <li><strong>Batata frita:</strong> Porção para 2 pessoas.</li>
        <li><strong>Carne seca:</strong> Serve 2 pessoas.</li>
        <li><strong>Frango à passarinho:</strong> Serve 1 a 2 pessoas.</li>
        <li><strong>Mandioca frita:</strong> Serve 1 a 2 pessoas.</li>
      </ul>
    </div>
  );
}

export default Petiscos;