import Feminin_theme_light from "./themes/feminin";
import Masculin_theme_light from "./themes/masculin";

export const name = "Jean Jacques Augustin";
export const imageUrl = "";

let sexe = false;

export const theme_Light = sexe ? Masculin_theme_light : Feminin_theme_light;
