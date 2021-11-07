const lightTheme = {
  font: {
    main:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
    code: "Roboto Mono, monospace",
  },
  color: {
    background: "white",
    hover: "rgba(32, 33, 36, 0.04)",
    surface: "#edf0f5",
    border: "#dee2e6",
    heading: "#202124",
    text: "#212529",
    textLight: "rgba(0,0,0,.7)",
    tagText: "#121212",
    link: "rgba(0,0,0,.7)",
    disabled: "rgba(0,0,0,0.38)",
    tag: {
      // tag names need to be in camelCase
      recursive: "rgba(173, 216, 230, 1)", // lightblue
      backtracking: "rgba(144, 238, 144, 1)", // lightgreen
      sorting: "rgba(242, 201, 76, 1)",
      divideAndConquer: "rgba(192, 125, 255, 1)",
      search: "rgba(45, 156, 219, 1)",
      criticalSection: "rgba(255, 77, 77, 1)",
      dynamicProgramming: "rgba(128, 128, 255, 1)",
      nlp: "rgba(31, 187, 122, 1)",
    },
    code: {
      inlineCodeColor: "#DB4C69",
      inlineCodeBackground: "#ffffff",
      blockBackground: "#edf0f5",
      baseColor: "#5C6E74",
      selectedColor: "#b3d4fc",
      highlightBackground: "#F7EBC6",
      highlightAccent: "#F7D87C",
      commentColor: "#93A1A1",
      punctuationColor: "#999999",
      propertyColor: "#990055",
      selectorColor: "#669900",
      operatorColor: "#a67f59",
      operatorBg: "#FFFFFF",
      variableColor: "#ee9900",
      functionColor: "#DD4A68",
      keywordColor: "#0077aa",
    },
  },
  breakpoint: {
    mobile: "only screen and (max-width: 50rem)",
    tablet: "only screen and (max-width: 1240px)",
  },
  spacing: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
    xLarge: "3rem",
    xxLarge: "4rem",
  },
  shadow: {
    menu: "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
    mobileMenu:
      "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px -6px rgb(60 64 67 / 15%)",
    card: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px",
  },
}

const darkTheme = {
  font: {
    main:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
    code: "Roboto Mono, monospace",
  },
  color: {
    background: "#1f1f1f",
    hover: "#2f2f2f",
    surface: "#121212",
    border: "#515151",
    borderHover: "#717171",
    heading: "rgba(255,255,255,0.87)",
    text: "rgba(255,255,255,0.87)",
    textLight: "rgba(255,255,255,0.7)",
    tagText: "#121212",
    link: "rgba(255,255,255,0.7)",
    disabled: "rgba(255,255,255,0.38)",
    tag: {
      // tag names need to be in camelCase
      recursive: "rgba(173, 216, 230, 0.85)",
      backtracking: "rgba(144, 238, 144, 0.85)",
      sorting: "rgba(242, 201, 76, 0.85)",
      divideAndConquer: "rgba(192, 125, 255, 0.85)",
      search: "rgba(45, 156, 219, 0.85)",
      criticalSection: "rgba(255, 77, 77, 0.85)",
      dynamicProgramming: "rgba(128, 128, 255, 0.85)",
      nlp: "rgba(31, 187, 122, 0.85)",
    },
    code: {
      // Adapted from Darcula theme
      inlineCodeColor: "#DB4C69",
      inlineCodeBackground: "#1f1f1f",
      blockBackground: "#2f2f2f",
      baseColor: "#eee",
      selectedColor: "#363636",
      highlightBackground: "#4e4c46",
      highlightAccent: "#b19b59",
      commentColor: "#616161",
      punctuationColor: "#89ddff",
      propertyColor: "#fd9170",
      selectorColor: "#a5e844",
      operatorColor: "#89ddff",
      operatorBg: "#363636",
      variableColor: "#ff6666",
      functionColor: "#c792ea",
      keywordColor: "#f47067",
    },
  },
  breakpoint: {
    mobile: "only screen and (max-width: 50rem)",
    tablet: "only screen and (max-width: 1240px)",
  },
  spacing: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
    xLarge: "3rem",
    xxLarge: "4rem",
  },
  shadow: {
    menu:
      "0 1px 2px 0 rgb(120 120 120 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
    mobileMenu:
      "0 1px 2px 0 rgb(120 120 120 / 30%), 0 2px 6px -6px rgb(60 64 67 / 15%)",
    card: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px",
  },
}

module.exports = { lightTheme, darkTheme }
