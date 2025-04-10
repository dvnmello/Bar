import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

  export default function Menu() {
    return (
<div>
       <Box sx={{ position: "absolute", top: 16, right: 16 }}>
            <Button component={Link} to="/" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Voltar</Button>
            </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        
        <Button component={Link} to="/bebidas" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Bebidas</Button>
        <Button component={Link} to="/petiscos" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Petiscos</Button>
        <Button component={Link} to="/drinks" variant="contained" color="primary" sx={{ mr: 2, padding: "10px" }}>Drinks</Button>
        

      </Box>
</div>
  );
  }
