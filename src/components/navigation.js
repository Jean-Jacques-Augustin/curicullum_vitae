import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

export const nav_styles = [
     { name: "A propos de moi", path: "/", icon: "" },
     { name: "Formation", path: "/formation", icon: "" },
     { name: "Experience", path: "/experience", icon: "" },
     { name: "Télécharger mon CV", path: "/download", icon: "" },
];

export default function Navigation() {
     return (
          <AppBar color="inherit" variant="elevation">
               <Toolbar className="toolbar_menu">
                    <Typography variant="h4">Feno</Typography>
                    <div className="links_style">
                         {nav_styles.map((item, key) => (
                              <Link
                                   component={Typography}
                                   variant="h5"
                                   key={key}
                                   to={item.path}>
                                   {item.name}
                              </Link>
                         ))}
                    </div>
               </Toolbar>
          </AppBar>
     );
}