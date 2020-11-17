module.exports = {
  purge: [],
  theme: {
    height: { 72: "28rem" },
    extend: {
      transitionProperty: {
        top: "top",
      },

      keyframes: {
        "alice-top-slide": {
          "0%": {
            transform: "translateY(-120%)",
          },
          "1%": {
            opacity: "100",
          },
          "25%,100%": {
            transform: "translateY(0)",
            opacity: "0",
          },
        },

        "alice-down-slide": {
          "0%,25%": {
            transform: "translateY(0%)",
            opacity: "0",
          },
          "26%": {
            transform: "translateY(0%)",
            opacity: "100",
          },
          "50%,100%": {
            transform: "translateY(120%)",
          },
        },

        "bob-down-slide": {
          "0%,50%": {
            transform: "translateY(-50%)",
            opacity: "0",
          },
          "51%": {
            transform: "translateY(-50%)",
            opacity: "100",
          },
          "75%,100%": {
            transform: "translateY(0%)",
          },
        },

        "alice-down-slide-w-eve": {
          "0%,11%": {
            transform: "translateY(0%)",
            opacity: "0",
          },
          "12%": {
            opacity: "100",
          },
          "23%,100%": {
            transform: "translateY(120%)",
          },
        },
        "eve-down-slide": {
          "0%,23%": {
            transform: "translateY(-50%)",
            opacity: "0",
            // animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "24%": {
            opacity: "100",
            // animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "35%,100%": {
            transform: "translateY(0%)",
            // animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },

        "bob-down-slide-w-eve": {
          "0%,35%": {
            transform: "translateY(-70%)",
            opacity: "0",
            // animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "36%": {
            opacity: "100",
            // animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "47%,100%": {
            transform: "translateY(0%)",
            // animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "alice-top-slide-w-eve": {
          "0%": {
            transform: "translateY(-120%)",
          },
          "1%": {
            opacity: "100",
          },
          "12%,100%": {
            transform: "translateY(0)",
            opacity: "0",
          },
        },
      },

      animation: {
        "alice-top-slide": "alice-top-slide 8s infinite",
        "alice-down-slide": "alice-down-slide 8s infinite",
        "bob-down-slide": "bob-down-slide 8s infinite",
        "alice-down-slide-w-eve": "alice-down-slide-w-eve 12s infinite",
        "eve-down-slide": "eve-down-slide 12s infinite",
        "bob-down-slide-w-eve": "bob-down-slide-w-eve 12s infinite",
        "alice-top-slide-w-eve": "alice-top-slide-w-eve 12s infinite",
      },
    },
    inset: {
      "1/2": "50%",
    },
  },
  variants: {
    margin: ["last", "hover"],
    animation: ["responsive", "hover", "focus"],
    cursor: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
