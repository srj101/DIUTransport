import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

export const themeLight = {
  ...PaperDefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    accent: "#2a529f",
    success: "#16a085",
    tabActiveColor: "#74b9ff",
    tabInactiveColor: "#dfe6e9",
    accentLight: "#b2bec3",
    White: "#FFFFFF",
    surfaceToggle: "#F3F3F3",
    cardToggle: "#FFFFFF",
    btnToggle: "#182C61",
    backcolor: "#ffffff",
    accentToggle: "#2a529f",
    black: "#000000",
    green: "#2ecc71",
  },
};

export const themeDark = {
  ...PaperDarkTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    green: "#2ecc71",
    accent: "#272727",
    success: "#16a085",
    tabActiveColor: "#FFF",
    tabInactiveColor: "#2C3A47",
    White: "#FFFFFF",
    surfaceToggle: "#000",
    cardToggle: "#272727",
    btnToggle: "#272727",
    accentToggle: "#FFFFFF",
    black: "#000000",
  },
};
