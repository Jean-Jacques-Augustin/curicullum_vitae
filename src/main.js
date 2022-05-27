import { Container, Toolbar } from "@mui/material";
import React from "react";
import Navigation from "./components/navigation";
import About from "./pages/about";

export default function Main() {
     return (
          <div>
               <Navigation />
               <Toolbar />
               <Container>
                    <About />
               </Container>
          </div>
     );
}
