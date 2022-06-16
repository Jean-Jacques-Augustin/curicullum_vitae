import React from "react";
import {
     Button,
     Divider,
     Grid,
     Hidden,
     Paper,
     Toolbar,
     Typography,
} from "@mui/material";
import { Container } from "@mui/system";

/**
 * Icons
 */
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

import "../styles/main.css";

export default function Contact() {
     return (
          <div>
               <div className="div_parent_about">
                    <Container sx={{ justifyContent: "center" }}>
                         <Hidden smUp>
                              <Toolbar />
                         </Hidden>
                         <div className="div_parent_papper">
                              <Paper className="card_about" variant="elevation">
                                   <div className="about">
                                        <Grid
                                             container
                                             spacing={2}
                                             padding={2}
                                             alignItems="stretch"
                                             direction="column">
                                             <br />
                                             <Grid item>
                                                  <div>
                                                       <Typography variant="h5">
                                                            Contact
                                                       </Typography>
                                                       <br />
                                                       <Divider />
                                                  </div>
                                             </Grid>
                                             <Grid item>
                                                  <div className="form_typo_icon">
                                                       <PersonIcon />
                                                       <Typography
                                                            align="left"
                                                            variant="h6">
                                                            RANDRIANANTENAINA
                                                            Jean Jacques
                                                            Augustin
                                                       </Typography>
                                                  </div>
                                             </Grid>
                                             <Grid item>
                                                  <div className="form_typo_icon">
                                                       <LocationOnIcon />
                                                       <Typography
                                                            align="left"
                                                            variant="h6">
                                                            Lot 044E/3708
                                                            Tsimandatsa
                                                            Tsaramandroso
                                                            Fianarantsoa 301,
                                                            Madagascar
                                                       </Typography>
                                                  </div>
                                             </Grid>
                                             <Grid item>
                                                  <div className="form_typo_icon">
                                                       <PhoneIcon />
                                                       <Typography
                                                            align="left"
                                                            variant="h6">
                                                            +261345451367
                                                       </Typography>
                                                  </div>
                                             </Grid>
                                             <Grid item>
                                                  <div className="form_typo_icon">
                                                       <EmailIcon />
                                                       <Typography
                                                            align="left"
                                                            variant="h6">
                                                            <a
                                                                 className="lien_contact"
                                                                 href="/">
                                                                 rjja@outlook.fr
                                                            </a>
                                                       </Typography>
                                                  </div>
                                             </Grid>
                                             <Grid item>
                                                  <div className="form_typo_icon">
                                                       <FacebookIcon />
                                                       <Typography
                                                            align="left"
                                                            variant="h6">
                                                            <a
                                                                 className="lien_contact"
                                                                 href="/">
                                                                 Jean Jacques
                                                                 Augustin
                                                            </a>
                                                       </Typography>
                                                  </div>
                                             </Grid>
                                             <Grid item>
                                                  <div className="form_typo_icon">
                                                       <LanguageIcon />
                                                       <Typography
                                                            align="left"
                                                            variant="h6">
                                                            <a
                                                                 className="lien_contact"
                                                                 href="/">
                                                                 www.jja.fordisco-ius.com
                                                            </a>
                                                       </Typography>
                                                  </div>
                                             </Grid>
                                             <br />
                                        </Grid>
                                   </div>
                              </Paper>
                         </div>
                         <Hidden smUp>
                              <Toolbar />
                         </Hidden>
                    </Container>
               </div>
          </div>
     );
}
