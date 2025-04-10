import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Sucos() {
    return (
        <div>
            <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                <Button component={Link} to="/bebidas" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
            </Box>

            <Typography variant="h3" gutterBottom>
                                Opções de Sucos
                              </Typography>
                              <Typography variant="body1" component="p">
                                Aqui estão algumas opções de Sucos para você escolher
                              </Typography>
            <ul>
                <li><strong>Uva</strong>.</li>
                <li><strong>Cupuaçu</strong></li>
                <li><strong>Mucurujá</strong></li>
                <li><strong>Morango</strong></li>
            </ul>

        </div>
    );
}

export default Sucos;