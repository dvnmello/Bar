import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Vinhos() {
    return (
        <div>
            <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                <Button component={Link} to="/bebidas" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
            </Box>

             <Typography variant="h3" gutterBottom>
                    Opções de Vinhos
                  </Typography>
                  <Typography variant="body1" component="p">
                    Aqui estão algumas opções de Vinhos para você escolher
                  </Typography>
            <ul>
                <li><strong>Sangue de Boi</strong>.</li>
                <li><strong>Mioranza</strong></li>
                <li><strong>Casillero Del Diablo</strong></li>
                <li><strong>Rocinha</strong></li>
            </ul>
        </div>
    );
}

export default Vinhos;