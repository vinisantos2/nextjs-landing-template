"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Planos simples e acessíveis"
          paragraph="Escolha o plano ideal para suas necessidades e comece a utilizar todos os recursos disponíveis."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensal
            </span>

            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>

                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>

            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Anual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Plano Inicial"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mês" : "ano"}
            subtitle="Ideal para quem está começando e precisa de uma solução simples e eficiente."
          >
            <OfferList text="Todos os recursos essenciais" status="active" />
            <OfferList text="Uso em múltiplos projetos" status="active" />
            <OfferList text="Uso comercial permitido" status="active" />
            <OfferList text="Suporte por e-mail" status="active" />
            <OfferList text="Acesso vitalício" status="inactive" />
            <OfferList text="Atualizações gratuitas" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Plano Profissional"
            price={isMonthly ? "79" : "199"}
            duration={isMonthly ? "mês" : "ano"}
            subtitle="Perfeito para empresas e profissionais que precisam de mais recursos."
          >
            <OfferList text="Todos os recursos essenciais" status="active" />
            <OfferList text="Uso em múltiplos projetos" status="active" />
            <OfferList text="Uso comercial permitido" status="active" />
            <OfferList text="Suporte prioritário" status="active" />
            <OfferList text="Acesso vitalício" status="active" />
            <OfferList text="Atualizações gratuitas" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Plano Premium"
            price={isMonthly ? "129" : "299"}
            duration={isMonthly ? "mês" : "ano"}
            subtitle="A melhor opção para quem busca todos os recursos disponíveis."
          >
            <OfferList text="Todos os recursos incluídos" status="active" />
            <OfferList text="Uso em projetos ilimitados" status="active" />
            <OfferList text="Uso comercial permitido" status="active" />
            <OfferList text="Suporte prioritário" status="active" />
            <OfferList text="Acesso vitalício" status="active" />
            <OfferList text="Atualizações gratuitas" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;