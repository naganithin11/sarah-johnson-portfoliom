tailwind.config = {
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontFamily: {
        Ovo: ["Ovo", "serif"],
        Playfair: ["Playfair Display", "serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Schibsted: ["Schibsted Grotesk", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out both",
        "slide-up": "slideUp 0.7s cubic-bezier(0.4,0,0.2,1) both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      colors: {
        primary: "var(--primary-color)",
      },
    },
  },
  darkMode: "selector",
};