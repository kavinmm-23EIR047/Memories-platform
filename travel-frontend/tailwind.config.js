// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glowYellow: {
          "0%, 100%": {
            boxShadow: "0 0 10px #facc15, 0 0 20px #facc15",
            textShadow: "0 0 5px #facc15, 0 0 10px #facc15",
          },
          "50%": {
            boxShadow: "0 0 20px #facc15, 0 0 40px #facc15",
            textShadow: "0 0 10px #facc15, 0 0 20px #facc15",
          },
        },
        glowWhite: {
          "0%, 100%": {
            boxShadow: "0 0 8px #ffffff",
            textShadow: "0 0 5px #ffffff",
          },
          "50%": {
            boxShadow: "0 0 16px #ffffff",
            textShadow: "0 0 10px #ffffff",
          },
        },
      },
      animation: {
        "glow-yellow": "glowYellow 1.8s ease-in-out infinite",
        "glow-white": "glowWhite 1.8s ease-in-out infinite",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
