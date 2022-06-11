import {
     BottomNavigation,
     BottomNavigationAction,
     Hidden,
     Paper,
} from "@mui/material";
import React from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navigation";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Formation from "./pages/formation";
/**
 * Icons
 */
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const Item_navigation_list = [
     { name: "A propos", path: "/", icon: <HomeRoundedIcon /> },
     { name: "Formation", path: "/formation", icon: <SchoolRoundedIcon /> },
     {
          name: "Experience",
          path: "/experience",
          icon: <WorkRoundedIcon />,
     },
     { name: "Contact", path: "/contact", icon: <ContactPageRoundedIcon /> },
];

const Bottom_navigation_control = () => {
     const [value, setValue] = React.useState(0);
     return (
          <div className="navigation_div">
               <Paper
                    sx={{
                         position: "fixed",
                         width: 500,
                         bottom: 20,
                    }}
                    className={"papper_navigation_parent"}
                    elevation={3}>
                    <BottomNavigation
                         className={"papper_navigation"}
                         showLabels
                         value={value}
                         onChange={(event, newValue) => {
                              setValue(newValue);
                         }}>
                         {Item_navigation_list.map((item, key) => (
                              <BottomNavigationAction
                                   component={Link}
                                   key={key}
                                   label={item.name}
                                   icon={item.icon}
                                   to={item.path}
                              />
                         ))}
                    </BottomNavigation>
               </Paper>
          </div>
     );
};

const MobileNavigation = () => {
     const [value, setValue] = React.useState(0);
     return (
          <Paper
               sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
               elevation={3}>
               <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                         setValue(newValue);
                    }}>
                    {Item_navigation_list.map((item, key) => (
                         <BottomNavigationAction
                              component={Link}
                              key={key}
                              label={item.name}
                              icon={item.icon}
                              to={item.path}
                         />
                    ))}
               </BottomNavigation>
          </Paper>
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
               <Hidden smDown>
                    <Bottom_navigation_control />
               </Hidden>
               <Hidden smUp>
                    <MobileNavigation />
               </Hidden>
          </div>
     );
}
