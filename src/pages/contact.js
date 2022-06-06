import React from "react";
import { Button, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { name } from "../constantes";
import "../styles/main.css";
import sary from "../img/IMG_20210920_193945.jpg";
import DownloadIcon from "@mui/icons-material/Download";

export default function Contact() {
     return (
          <div>
               <div className="div_parent_about">
                    <Container sx={{ justifyContent: "center" }}>
                         <div className="div_parent_papper">
                              <Paper className="card_about">
                                   <Toolbar />
                                   <div className="about">Contact</div>
                                   <Toolbar />
                              </Paper>
                         </div>
                    </Container>
               </div>
          </div>
     );
}
