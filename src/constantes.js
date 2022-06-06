import Feminin_theme_light from "./themes/dark";
import Masculin_theme_light from "./themes/light";

export const name = "Jean Jacques Augustin";
export const imageUrl = "";

const theme_mode = true;

export const theme_Light = theme_mode
     ? Masculin_theme_light
     : Feminin_theme_light;
