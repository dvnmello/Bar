import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function SemAlcool() {
    return (
        <div>
            <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                <Button component={Link} to="/drinks" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
            </Box>

            <Typography variant="h3" gutterBottom>
                Opções de Bebidas Sem Álcool
            </Typography>
            <Typography variant="body1" component="p">
                Aqui estão algumas opções de bebidas SEM ALCOOL para você escolher:
            </Typography>

            <div>
                <ul>
                    <li><strong>Suvaco de Cobra</strong></li>
                    <li><strong>Pentelho de Idoso</strong></li>
                </ul>
            </div>
        </div>
    );
}

export default SemAlcool;