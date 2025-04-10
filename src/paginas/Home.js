import React from 'react';
import { Typography } from '@mui/material';


function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Bem-vindo ao Menu!
      </Typography>
      <Typography variant="body1">
        Escolha uma opção no menu lateral para começar.
      </Typography>
       
    </div>
  );
}

export default Home;