import type { Config } from 'tailwindcss'

function asRem(px: number): string {
  return  `${px / 4}rem`;
}

export default {
  content: [],
  theme: {
    colors: {
      "back": "#FFFFFF",
      "alt-back": "#FFE9F2",
      "0": "#FDA2A2",
      "10": "#F8949B",
      "20": "#F48995",
      "30": "#F07C8F",
      "40": "#EC7189",
      "50": "#E86583",
      "60": "#E3587D",
      "70": "#E04E77",
      "80": "#DC4372",
      "90": "#D8386C",
      "100": "#D52E67",
      "110": "#D52E67"
    },
    lineHeight: {
      "reading": "130%",
      "packed": "110%",
      "thin": "90%"
    },
    fontSize: {
      "huge": [asRem(196), { fontWeight: "black", lineHeight: "100%" }],
      "heading": [asRem(36), { fontWeight: "bold", lineHeight: "130%" }],
      "normal": asRem(20),
      "sub": asRem(14),
    },
    fontFamily: {
      "roboto": ["Roboto", "sans-serif"],
      "noto": ["Noto Sans CJK JP", "Noto Sans JP", "Noto Sans", "sans-serif"],
    },
    fontWeight: {
      "regular": "regular",
      "bold": "bold",
      "black": "black",
    }
  },
  plugins: [],
} satisfies Config

