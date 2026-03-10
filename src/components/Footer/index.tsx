"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* LOGO */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>

                <p className="text-body-color dark:text-body-color-dark mb-9 text-base leading-relaxed">
                  Soluções digitais modernas para ajudar empresas e projetos a
                  crescerem no ambiente online.
                </p>

                {/* REDES SOCIAIS */}
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-body-color hover:text-primary mr-6 duration-300"
                  >
                    {/* facebook */}
                  </a>

                  <a
                    href="#"
                    className="text-body-color hover:text-primary mr-6 duration-300"
                  >
                    {/* twitter */}
                  </a>

                  <a
                    href="#"
                    className="text-body-color hover:text-primary mr-6 duration-300"
                  >
                    {/* youtube */}
                  </a>

                  <a
                    href="#"
                    className="text-body-color hover:text-primary duration-300"
                  >
                    {/* linkedin */}
                  </a>
                </div>
              </div>
            </div>

            {/* LINKS */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Navegação
                </h2>

                <ul>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary mb-4 inline-block text-base"
                    >
                      Início
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      className="hover:text-primary mb-4 inline-block text-base"
                    >
                      Sobre
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-primary mb-4 inline-block text-base"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* POLÍTICAS */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Informações
                </h2>

                <ul>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary mb-4 inline-block text-base"
                    >
                      Termos de uso
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary mb-4 inline-block text-base"
                    >
                      Política de privacidade
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary mb-4 inline-block text-base"
                    >
                      Política de reembolso
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* SUPORTE */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Suporte
                </h2>

                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-primary mb-4 inline-block text-base"
                    >
                      Fale conosco
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary mb-4 inline-block text-base"
                    >
                      Termos de uso
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      className="hover:text-primary mb-4 inline-block text-base"
                    >
                      Sobre nós
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LINHA */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent"></div>

          {/* COPYRIGHT */}
          <div className="py-8">
            <p className="text-body-color text-center text-base dark:text-white">
              © {new Date().getFullYear()}
              <a href="https://vstechdigital.com.br/" className="text-primary ml-1 hover:underline">
                VS Tech
              </a>
              . Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
