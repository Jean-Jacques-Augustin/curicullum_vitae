import { ButtonGroup, Paper, Typography } from "@mui/material";
import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Formation from "./pages/formation";
/**
 * Icons
 */
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Item_navigation_list = [
     { name: "A propos", path: "/", icon: <HomeOutlinedIcon /> },
     { name: "Formation", path: "/formation", icon: <SchoolOutlinedIcon /> },
     {
          name: "Experience",
          path: "/experience",
          icon: <WorkOutlineOutlinedIcon />,
     },
     { name: "Contact", path: "/contact", icon: <ContactMailOutlinedIcon /> },
];

const Navigation_button_custom = () => {
     return (
          <div className="navigation_div">
               <Paper className="navigation_bar">
                    <ButtonGroup
                         size="large"
                         sx={{ m: 0, p: 0 }}
                         aria-label="large button group">
                         {Item_navigation_list.map((item, key) => (
                              <NavLink
                                   color="primary"
                                   key={key}
                                   to={item.path}
                                   className="navlink_md">
                                   {item.icon}
                                   <Typography
                                        variant="subtitle1"
                                        color={"inherit"}>
                                        {item.name}
                                   </Typography>
                              </NavLink>
                         ))}
                    </ButtonGroup>
               </Paper>
          </div>
     );
};

export default function Main() {
     return (
          <div>
               <Navigation />
               <Routes>
                    <Route index path="/" element={<About />} />
                    <Route path="/formation" element={<Formation />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} />
               </Routes>
               {Navigation_button_custom()}
          </div>
     );
}
