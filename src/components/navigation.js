import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { name } from "../constantes";
import "../styles/main.css";

export const nav_styles = [
     { name: "A propos de moi", path: "/", icon: "" },
     { name: "Formation", path: "/formation", icon: "" },
     { name: "Experience", path: "/experience", icon: "" },
];

export default function Navigation() {
     return (
          <AppBar color="transparent" variant="elevation" elevation={1}>
               <Container>
                    <Toolbar className="toolbar_menu">
                         <Typography variant="h5">{name}</Typography>

                         <Button
                              variant="outlined"
                              style={{ textTransform: "none" }}>
                              Télécharger mon CV
                         </Button>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
