import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Como melhorar a presença digital do seu negócio",
    paragraph:
      "Descubra algumas estratégias importantes para fortalecer a presença online da sua empresa e alcançar mais clientes.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Equipe Editorial",
      image: "/images/blog/author-03.png",
      designation: "Redação",
    },
    tags: ["negócios"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Dicas para criar um site moderno e eficiente",
    paragraph:
      "Conheça práticas importantes que ajudam a criar sites mais rápidos, organizados e com melhor experiência para o usuário.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Equipe de Conteúdo",
      image: "/images/blog/author-02.png",
      designation: "Conteúdo",
    },
    tags: ["tecnologia"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Boas práticas para projetos digitais",
    paragraph:
      "Aprenda algumas boas práticas que podem ajudar no desenvolvimento e organização de projetos digitais.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Equipe Técnica",
      image: "/images/blog/author-03.png",
      designation: "Tecnologia",
    },
    tags: ["desenvolvimento"],
    publishDate: "2025",
  },
];

export default blogData;