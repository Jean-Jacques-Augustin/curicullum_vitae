import { Button, Paper, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { name } from "../constantes";
import "../styles/main.css";

const CusstomButton = () => {
     return (
          <div className="custom_button">
               <Button variant="outlined" style={{ textTransform: "none" }}>
                    Télécharger mon CV
               </Button>
               <Button variant="outlined" style={{ textTransform: "none" }}>
                    A props de moi
               </Button>
          </div>
     );
};

export default function About() {
     return (
          <div className="div_parent_about">
               <Container sx={{ justifyContent: "center" }}>
                    <Paper className="card_about">
                         <Typography variant="h6">Bonjour,</Typography>
                         <Toolbar />
                         <div className="about">
                              <div className="images_avatar">Images</div>
                              <div className="about_infirmation">
                                   <Typography variant="body1">
                                        Bonjour, je m'appelle
                                   </Typography>
                                   <Typography variant="h5">{name}</Typography>
                                   <Typography variant="body2">
                                        Je suis un dévellopeur web
                                   </Typography>
                                   <CusstomButton />
                              </div>
                         </div>
                         <Toolbar />
                    </Paper>
               </Container>
          </div>
     );
}
