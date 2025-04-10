import React from 'react';
import { Typography, Box, Button} from '@mui/material';
import { Link } from 'react-router-dom';

function Refrigerantes() {
  return (
    <div>
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <Button component={Link} to="/bebidas" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
      </Box>
      <Typography variant="h3" gutterBottom>
        Opções de Refrigerantes
      </Typography>
      <Typography variant="body1" component="p">
        Aqui estão algumas opções de refrigetenas para você escolher:
      </Typography>

      <div>
        <ul>
          <li><strong>Coca</strong>.</li>
          <li><strong>Guaraná</strong></li>
          <li><strong>Mineiro</strong></li>
          <li><strong>Fanta</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default Refrigerantes;