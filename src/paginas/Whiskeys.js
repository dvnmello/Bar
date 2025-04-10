import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Whiskeys() {
    return (
        <div>
            <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                <Button component={Link} to="/bebidas" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
            </Box>

            <Typography variant="h3" gutterBottom>
                                Opções de Whiskeys
                              </Typography>
                              <Typography variant="body1" component="p">
                                Aqui estão algumas opções de Whiskeys para você escolher
                              </Typography>
            <ul>
                <li><strong>RedLabel</strong>.</li>
                <li><strong>BlueLabel</strong></li>
                <li><strong>White Horse</strong></li>
                <li><strong>Teachers</strong></li>
            </ul>
        </div>
    );
}

export default Whiskeys;