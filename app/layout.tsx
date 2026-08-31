import type { Metadata, Viewport } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://fastcare.example"),
  title: { default: "FastCare | Guia para cuidadores de pessoas com demência", template: "%s | FastCare" },
  description: "Guia educativo sobre as 7 etapas da escala FAST, sinais, higiene, finanças e rede de apoio para cuidadores de pessoas idosas com demência.",
  keywords: ["demência", "cuidador de idosos", "escala FAST", "Alzheimer", "higiene do idoso", "Farmácia Popular", "cuidado familiar"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", title: "FastCare — cuidado em cada etapa da demência", description: "Informação prática e acessível para cuidadores e familiares de pessoas com demência.", siteName: "FastCare" },
  twitter: { card: "summary", title: "FastCare", description: "Guia educativo para cuidadores de pessoas com demência." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0D3B66" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "WebSite", name: "FastCare", inLanguage: "pt-BR", description: "Guia educativo para cuidadores de pessoas com demência", audience: { "@type": "Audience", audienceType: "Cuidadores e familiares de pessoas com demência" } };
  return <html lang="pt-BR"><body><a href="#conteudo" className="skip">Pular para o conteúdo</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}
