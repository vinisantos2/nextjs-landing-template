import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | VS Tech",
  description:
    "Entre em contato conosco para tirar dúvidas, solicitar informações ou conversar sobre seu projeto.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contato"
        description="Fale conosco para tirar dúvidas, solicitar um orçamento ou saber mais sobre nossas soluções."
      />

      <Contact />
    </>
  );
};

export default ContactPage;