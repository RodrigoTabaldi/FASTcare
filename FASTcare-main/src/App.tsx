"use client";

import { useCallback, useState } from "react";
import { useReveal } from "./hooks";
import ScrollProgress from "./components/ScrollProgress";
import AcademicBar from "./components/AcademicBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Sobre from "./components/Sobre";
import Etapas from "./components/Etapas";
import CuidadosEspeciais from "./components/CuidadosEspeciais";
import Autoteste from "./components/Autoteste";
import Alertas from "./components/Alertas";
import Glossario from "./components/Glossario";
import Citacao from "./components/Citacao";
import Toc from "./components/Toc";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Consent from "./components/Consent";

export default function App() {
  const [suggestedStage, setSuggestedStage] = useState<number | null>(null);
  useReveal();
  const handleStageChange = useCallback((stage: number | null) => {
    setSuggestedStage(stage);
  }, []);
  return (
    <>
      <Consent />
      <ScrollProgress />
      <AcademicBar />
      <Header />
      <Toc />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Sobre />
        <Etapas suggestedStage={suggestedStage} />
        <Autoteste onStageChange={handleStageChange} />
        <CuidadosEspeciais />
        <Alertas />
        <Glossario />
        <Citacao />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
