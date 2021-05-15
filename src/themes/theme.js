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
      recursive: "rgba(173, 216, 230, 1)", // lightblue
      backtracking: "rgba(144, 238, 144, 1)", // lightgreen
      sorting: "rgba(242, 201, 76, 1)",
      divideAndConquer: "rgba(192, 125, 255, 1)",
      search: "rgba(45, 156, 219, 1)",
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
