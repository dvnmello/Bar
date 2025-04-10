import React from 'react';
import { Typography, Box, Button, } from '@mui/material';
import { Link } from 'react-router-dom';

function Drinks() {
  return (
    <div>
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <Button component={Link} to="/pedidos" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
      </Box>
      <Typography variant="h3" gutterBottom>
        Opções de Drinks
      </Typography>
      <Typography variant="body1" component="p">
        Confira nossa seleção de drinks especiais e refrescantes para alegrar seu dia!
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button component={Link} to="/semalcool" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Sem Álcool</Button>
        <Button component={Link} to="/comalcool" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Com Álcool</Button>
      </Box>

    </div>

  );
}

export default Drinks;