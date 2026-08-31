"use client";

import { useReveal } from "./hooks";
import ScrollProgress from "./components/ScrollProgress";
import AcademicBar from "./components/AcademicBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Sobre from "./components/Sobre";
import Etapas from "./components/Etapas";
import Autoteste from "./components/Autoteste";
import Alertas from "./components/Alertas";
import Glossario from "./components/Glossario";
import Citacao from "./components/Citacao";
import Toc from "./components/Toc";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Consent from "./components/Consent";
import CaregiverWelcome from "./components/CaregiverWelcome";
import SensitiveCare from "./components/SensitiveCare";
import FarmaciaPopular from "./components/FarmaciaPopular";
import Community from "./components/Community";
import Feedback from "./components/Feedback";

export default function App() {
  useReveal();
  return (
    <>
      <Consent />
      <ScrollProgress />
      <AcademicBar />
      <Header />
      <Toc />
      <main id="conteudo">
        <Hero />
        <CaregiverWelcome />
        <Marquee />
        <Sobre />
        <Etapas />
        <Autoteste />
        <SensitiveCare />
        <FarmaciaPopular />
        <Alertas />
        <Community />
        <Feedback />
        <Glossario />
        <Citacao />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
