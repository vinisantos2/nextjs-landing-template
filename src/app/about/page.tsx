import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | VS Tech",
  description:
    "Conheça mais sobre nossa empresa, nossos valores e como trabalhamos para entregar soluções digitais modernas.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre"
        description="Conheça mais sobre nossa história, nossa missão e como desenvolvemos soluções digitais modernas para nossos clientes."
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;