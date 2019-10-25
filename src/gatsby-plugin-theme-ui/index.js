import preset from "@theme-ui/preset-base"
// import prism from "@theme-ui/prism/presets/theme-ui"
import merge from "deepmerge"

const theme = merge(preset, {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    text: "black",
    background: "white",
    primary: "#06f",
    secondary: "#a0c",
    accent: "#f0a",
    gray: "#444",
    muted: "#f6f6ff",
    outline: "rgba(0, 102, 255, 0.5)",
    grid: "rgba(0, 102, 255, 0.125)",
    modes: {
      dark: {
        text: "white",
        background: "black",
        primary: "cyan",
        secondary: "#b0f",
        accent: "#f0b",
        muted: "#111116",
        gray: "#999",
        outline: "rgba(0, 255, 255, 0.5)",
        grid: "rgba(0, 255, 255, 0.125)"
      }
    }
  },
  fonts: {
    body: "system-ui, sans-serif"
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700
  },
  sizes: {
    container: 1280
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: 1.5,
      fontWeight: "body",
      letterSpacings: "normal",
      fontSize: 3,
      maxWidth: "container",
      mx: "auto"
    },
    header: {
      py: 4
    },
    focused: {
      position: "relative",
      outline: "none",
      boxShadow: t => `0 0 0 3px ${t.colors.primary}`
    },
    list: {
      listStyle: "none",
      m: 0,
      p: 0
    },
    navlink: {
      display: "inline-block",
      color: "inherit",
      textDecoration: "none",
      fontWeight: "bold",
      ":focus": {
        variant: "styles.focused"
      },
      ":hover": {
        color: "primary"
      }
    },
    a: {
      opacity: 1,
      ":hover": {
        opacity: 0.7,
        color: "primary"
      }
    },
    img: {
      display: "block",
      maxWidth: "100%",
      height: "auto"
    },
    h1: {
      fontSize: [4, 5, 6, 7]
    },
    p: {
      maxWidth: 768
    },
    pre: {
      p: 3,
      mt: 0,
      mb: 0,
      variant: "prism",
      bg: "muted",
      ":focus-within": {
        boxShadow: t => `inset 0 0 0 2px ${t.colors.primary}`
      },
      textarea: {
        outline: "none !important",
        "::selection": {
          bg: "outline"
        }
      }
    },
    inlineCode: {
      fontFamily: "monospace"
    },
    code: {
      fontFamily: "monospace"
    }
  }
})

export default theme
