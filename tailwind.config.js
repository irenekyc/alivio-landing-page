module.exports = {
  purge: false,
  theme: {
    screens: {
      LTS: "1024px",
      LTL: "1440px",
      XL: "1920px",
    },
    fontFamily: {
      heading: ["Georgia", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        darkGreen: "#245852",
        primary: "#01996D",
        textColor: "#484848",
        navLinksColor: "#292929",
      },
      height: {
        hero: "980px",
        nav: "85px",
      },
      fontSize: {
        headingText: "55px",
        headingTextS: "50px",
        cardHeading: "150px",
      },
      width: {
        card: "390px",
      },
      opacity: {
        "20": "0.2",
      },
      margin: {
        negative45: "-45px",
      },
    },
  },
  variants: {},
  plugins: [],
};
