import { Button, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { name } from "../constantes";
import "../styles/main.css";
import sary from "../img/IMG_20210920_193945.jpg";
import DownloadIcon from "@mui/icons-material/Download";

export default function About() {
     return (
          <div>
               <div className="div_parent_about">
                    <Container sx={{ justifyContent: "center" }}>
                         <div className="div_parent_papper">
                              <Paper className="card_about">
                                   <Toolbar />
                                   <div className="about">
                                        <Grid
                                             container
                                             direction="row"
                                             justifyContent="space-around"
                                             alignItems="center">
                                             <Grid item>
                                                  <img
                                                       className="images_avatar"
                                                       src={sary}
                                                       alt={"Sary"}
                                                  />
                                             </Grid>
                                             <Grid item>
                                                  <div className="about_infirmation">
                                                       <Typography variant="h4">
                                                            {name}
                                                       </Typography>
                                                       <br />
                                                       <Typography variant="h6">
                                                            MERN Stack
                                                            Developper
                                                       </Typography>
                                                       <Toolbar />
                                                       <Button
                                                            disableElevation
                                                            variant="contained"
                                                            size="large"
                                                            startIcon={
                                                                 <DownloadIcon />
                                                            }
                                                            style={{
                                                                 textTransform:
                                                                      "none",
                                                            }}>
                                                            Télécharger mon CV
                                                       </Button>
                                                  </div>
                                             </Grid>
                                        </Grid>
                                   </div>
                                   <Toolbar />
                              </Paper>
                         </div>
                    </Container>
               </div>
          </div>
     );
}
