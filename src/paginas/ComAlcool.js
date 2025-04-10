import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ComAlcool() {
    return (
        <div>
            <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                <Button component={Link} to="/drinks" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
            </Box>

            <Typography variant="h3" gutterBottom>
                Opções de Bebidas Com Álcool
            </Typography>
            <Typography variant="body1" component="p">
                Aqui estão algumas opções de bebidas para você escolher:
            </Typography>

            <div>
                <ul>
                    <li><strong>Tadalafila</strong>.</li>
                    <li><strong>Perereca com Limão</strong></li>
                </ul>
            </div>
        </div>
    );
}

export default ComAlcool;