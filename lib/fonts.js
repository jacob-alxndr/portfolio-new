import { IBM_Plex_Sans, IBM_Plex_Mono, Inter } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
});
export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-secondary",
});
export const inter = Inter({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
});
