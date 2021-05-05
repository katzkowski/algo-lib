const lightTheme = {
  font: {
    main: "Roboto, sans-serif",
    code: "Roboto Mono, monospace",
  },
  color: {
    background: "white",
    hover: "rgba(32, 33, 36, 0.04)",
    surface: "#f6f7f9",
    border: "#f6f7f9",
    heading: "#202124",
    // text: "rgba(0,0,0,0.87)",
    text: "#393939",
    textLight: "rgba(0,0,0,.7)",
    tagText: "#121212",
    link: "rgba(0,0,0,.7)",
    disabled: "rgba(0,0,0,0.38)",
    tag: {
      // tag names need to be in camelCase
      recursive: "lightblue",
      backtracking: "lightgreen",
      sorting: "#F2C94C",
      divideAndConquer: "#C07DFF",
      search: "#2D9CDB",
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
    shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)",
    menu: "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
  },
}

const darkTheme = {
  font: {
    main: "Roboto, sans-serif",
    code: "Roboto Mono, monospace",
  },
  color: {
    // background: "#222831",
    background: "#1f1f1f",
    hover: "rgba(32, 33, 36, 0.45)",
    // surface: "#393e46",
    surface: "#121212",
    border: "#515151",
    heading: "rgba(255,255,255,0.87)",
    text: "rgba(255,255,255,0.87)",
    textLight: "rgba(255,255,255,0.7)",
    tagText: "#121212",
    link: "rgba(255,255,255,0.7)",
    disabled: "rgba(255,255,255,0.38)",
    tag: {
      // tag names need to be in camelCase
      recursive: "lightblue",
      backtracking: "lightgreen",
      sorting: "#F2C94C",
      divideAndConquer: "#C07DFF",
      search: "#2D9CDB",
    },
  },
  breakpoint: {
    mobile: "only screen and (max-width: 50rem)",
    tablet: "only screen and (max-width: 65rem)",
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
    shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)",
    menu:
      "0 1px 2px 0 rgb(120 120 120 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
  },
}

module.exports = { lightTheme, darkTheme }
