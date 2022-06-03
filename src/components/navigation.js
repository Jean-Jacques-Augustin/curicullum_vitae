import React, { useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { name } from "../constantes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../styles/main.css";

export const nav_styles = [
     { name: "A propos de moi", path: "/", icon: "" },
     { name: "Formation", path: "/formation", icon: "" },
     { name: "Experience", path: "/experience", icon: "" },
];

export default function Navigation() {
     const [dark, setDark] = useState("false");

     const changementMode = (e) => {
          setDark(!dark);
     };

     return (
          <AppBar color="primary" variant="elevation" elevation={1}>
               <Container>
                    <Toolbar className="toolbar_menu">
                         <Typography color={"inherit"} variant="h5">
                              {name}
                         </Typography>

                         <IconButton color={"inherit"} onClick={changementMode}>
                              {dark ? <DarkModeIcon /> : <LightModeIcon />}
                         </IconButton>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
