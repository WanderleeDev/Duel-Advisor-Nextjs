import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import Providers from "@/lib/Providers";
import { PropsWithChildren } from "react";
import "./globals.css";
import { setupAxiosInterceptors } from "@/lib/interceptors";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Duel Advisor",
  description: "Aplicación de gestión de cartas y estrategias",
};

export default function RootLayout({ children }: PropsWithChildren) {
  setupAxiosInterceptors();

  return (
    <ViewTransitions>
      <html lang="es">
        <body>
          <div id="modal"></div>
          <Toaster />
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
