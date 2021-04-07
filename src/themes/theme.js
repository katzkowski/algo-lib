export const lightTheme = {
  font: {
    main: "Roboto, sans-serif",
    code: "Roboto Mono, monospace",
  },
  color: {
    primary: "blue",
    secondary: "green",
    background: "white",
    surface: "lightgray",
    heading: "#202124",
    text: "rgba(0,0,0,1.0)",
    textLight: "#5f6368",
    tagText: "black",
    tag: {
      // tag names need to be in camelCase
      recursive: "lightblue",
      backtracking: "lightgreen",
      sorting: "#F2C94C",
      divideAndConquer: "#C07DFF",
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
  animation: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
  },
  shadow: {
    shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)",
    menu: "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
  },
}

export const darkTheme = {
  font: {
    main: "Roboto, sans-serif",
    code: "Roboto Mono, monospace",
  },
  color: {
    primary: "blue",
    secondary: "green",
    background: "black",
    surface: "lightgray",
    text: "white",
    textLight: "darkgray",
    tag: {
      // tag names need to be in camelCase
      recursive: "lightblue",
      backtracking: "lightgreen",
      sorting: "#F2C94C",
      divideAndConquer: "#C07DFF",
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
    medium: "2rem",
    large: "3rem",
    xLarge: "4rem",
    xxLarge: "6rem",
  },
  animation: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
  },
  shadow: {
    shadow1: "none",
  },
}
