import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigo | VS Tech",
  description:
    "Leia nossos artigos e descubra conteúdos sobre tecnologia, desenvolvimento e soluções digitais.",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  10 plataformas para encontrar imagens e recursos digitais gratuitos
                </h2>

                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">

                  <div className="flex flex-wrap items-center">
                    
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="autor"
                            fill
                          />
                        </div>
                      </div>

                      <div className="w-full">
                        <span className="text-body-color mb-1 text-base font-medium">
                          Por <span>Equipe VS Tech</span>
                        </span>
                      </div>
                    </div>

                    <div className="mb-5 flex items-center">
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        12 Jan 2024
                      </p>

                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        50 comentários
                      </p>

                      <p className="text-body-color flex items-center text-base font-medium">
                        35 visualizações
                      </p>
                    </div>

                  </div>

                  <div className="mb-5">
                    <a
                      href="#"
                      className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                    >
                      Tecnologia
                    </a>
                  </div>

                </div>

                <div>

                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg">
                    Neste artigo apresentamos algumas plataformas que oferecem
                    imagens e recursos digitais gratuitos que podem ser utilizados
                    em projetos pessoais ou profissionais.
                  </p>

                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src="/images/blog/blog-details-02.jpg"
                        alt="blog"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg">
                    Atualmente existem diversas plataformas que disponibilizam
                    fotos, ícones, ilustrações e outros recursos digitais que
                    podem ser utilizados em projetos de design, desenvolvimento
                    web e criação de conteúdo.
                  </p>

                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg">
                    Utilizar recursos de qualidade ajuda a melhorar o resultado
                    visual de um projeto e também pode acelerar o processo de
                    desenvolvimento.
                  </p>

                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl dark:text-white">
                    Recursos digitais para designers e desenvolvedores
                  </h3>

                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg">
                    Muitos profissionais utilizam bibliotecas de recursos
                    gratuitos para criar interfaces modernas e melhorar a
                    experiência do usuário em sites e aplicativos.
                  </p>

                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Bancos de imagens gratuitos
                    </li>

                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Bibliotecas de ícones
                    </li>

                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Ilustrações para interfaces
                    </li>

                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Recursos para design e desenvolvimento
                    </li>
                  </ul>

                  <div className="items-center justify-between sm:flex">

                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        Tags populares:
                      </h4>

                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Tecnologia" />
                        <TagButton text="Desenvolvimento" />
                      </div>
                    </div>

                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                        Compartilhar este artigo:
                      </h5>

                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;