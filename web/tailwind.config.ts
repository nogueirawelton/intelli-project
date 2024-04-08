import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
      },
      keyframes: {
        "slide-up": {
          from: { opacity: "1", transform: "translateY(2px)" },
          to: { opacity: "0", transform: "translateY(0)" },
        },

        "slide-down": {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },

        "grow-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
          },
          to: {
            height: "0",
          },
        },

        "grow-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },
      },
      animation: {
        "slide-up": "slide-up 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slide-down 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "grow-down": "grow-down 400ms cubic-bezier(0.16, 1, 0.3, 1) ",
      },
    },
  },
  plugins: [],
};
export default config;
