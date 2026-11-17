import localFont from "next/font/local";
import { Roboto } from "next/font/google";
export const monument = localFont({
  src: "../assets/fonts/MonumentExtended-Regular.otf",
});

export const kessel = localFont({
  src: "../assets/fonts/Kessel_105_W00_Book.ttf",
});

export const archivo = localFont({
  src: "../assets/fonts/Archivo.ttf",
});

export const roboto = Roboto({
  weight: "variable",
});

export const kessel_bold = localFont({
  src: "../assets/fonts/font-bold.otf",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020, U+0030-0039, U+0041-005A, U+0061-007A",
    },
  ],
  fallback: ["sans-serif"],
});