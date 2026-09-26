import type { Metadata } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title: "FastCare — Escala FAST para cuidadores",
  description: "Guia educativo para cuidadores e familiares de idosos com suspeita de demência, organizado pelas 7 etapas da escala FAST.",
  keywords: ["escala FAST", "demência", "cuidadores", "idosos", "Alzheimer"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Roboto+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body><a href="#conteudo" className="skip">Pular para o conteúdo</a>{children}</body>
    </html>
  );
}
