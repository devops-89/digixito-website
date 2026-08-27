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
});
