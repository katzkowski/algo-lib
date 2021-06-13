const lightTheme = {
  font: {
    main:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
    code: "Roboto Mono, monospace",
  },
  color: {
    background: "white",
    hover: "rgba(32, 33, 36, 0.04)",
    // surface: "#f6f7f9",
    surface: "#edf0f5",
    border: "#dee2e6",
    heading: "#202124",
    // text: "rgba(0,0,0,0.87)",
    // text: "#393939",
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
      criticalSection: "rgba(255, 77, 77, 0.85)",
      dynamicProgramming: "rgba(128, 128, 255, 0.85)",
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
    menu:
      "0 1px 2px 0 rgb(120 120 120 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
    mobileMenu:
      "0 1px 2px 0 rgb(120 120 120 / 30%), 0 2px 6px -6px rgb(60 64 67 / 15%)",
    card: "rgba(3, 0, 71, 0.09) 0px 1px 3px 0px",
  },
}

module.exports = { lightTheme, darkTheme }
