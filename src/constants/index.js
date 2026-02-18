import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

 
  threejs,
  replica,
  fatec,
  travia,
  vendas,
  newe,
  mysql,
  java,
  csharp,
  newMy,
  elo,
  alura,
  fatecLogo,
  freelancer,
  av2,
  biggerIcon,
  linked,
  zap,
  exp
 

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Frontend",
    icon: web,
  },
  {
    title: "Desenvolvedor DevOps",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
  {
    title: "Arquitetura de Software",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: newMy,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Ensino Médio",
    company_name: "Elo Educacional",
    icon: elo,
    iconBg: "#383E56",
    date: "Janeiro 2022 - Dezembro 2024",
    points: [
      "Conclusão do Ensino Médio com início da trajetória na área de tecnologia.",
      "Primeiros estudos em programação, com foco principal em desenvolvimento Frontend.",
      "Desenvolvimento de diversos projetos práticos para consolidar lógica e fundamentos web.",
      "Criação de um site institucional para divulgação da Feira do Conhecimento do colégio.",
    ],
  },
  {
    title: "Desenvolvedor Backend",
    company_name: "Alura",
    icon: alura,
    iconBg: "#383E56",
    date: "Jan 2023 - Dezembro 2024",
    points: [
      "Aprofundamento em desenvolvimento Backend, computação em nuvem e práticas DevOps.",
      "Experiência com Docker, ambientes containerizados e deploy de aplicações na AWS e GCP.",
      "Desenvolvimento de projetos completos com bancos de dados relacionais e APIs REST.",
      "Participação em imersões técnicas envolvendo automação, fullstack e integração em nuvem.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2025",
    points: [
      "Atuação em trabalhos independentes para clientes externos, com foco em soluções sob demanda.",
      "Destaque para o projeto Travia, sistema de análise de tráfego com IA financiado por professor do ITA.",
      "Desenvolvimento de sistema de controle de vendas em Java com integração a banco de dados.",
      "Criação de automação de cadastros corporativos com Python, incluindo integração com chatbot.",
    ],
  },
  {
    title: "Desenvolvedor FullStack",
    company_name: "Fatec",
    icon: fatecLogo,
    iconBg: "#383E56",
    date: "Fev 2025 - Presente",
    points: [
      "Ingresso na Fatec em janeiro de 2025, atualmente cursando o 3º semestre.",
      "Evolução significativa das hard skills técnicas e aprofundamento das soft skills.",
      "Experiência em trabalhos em equipe utilizando metodologia ágil Scrum.",
      "Desenvolvimento de projetos acadêmicos e independentes com foco em soluções completas.",
    ],
  },
];






const projects = [
  {
    name: "Plataforma Newe",
    description:
      `Plataforma web intersetorial desenvolvida em grupo para a empresa de logística Newe, com segurança, autenticação por tokens e integração completa com banco de dados. Atuei como Dev Team, sendo responsável pelo Backend (arquitetura MVC de usuários, sistemas de lembrete e migrations), Frontend (design no Figma e criação das páginas) e DevOps (containerização da aplicação em Docker e execução em ambiente AWS), utilizando a metodologia ágil Scrum.`
,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: newe,
    source_code_link: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-2DSM-API",
  },
  {
    name: "Análise Comercial SP",
    description:
      `Plataforma web desenvolvida em grupo para análise e visualização de dados, com normalização de +12 milhões de registros e integração completa com banco de dados relacional. Atuei como DevTeam, responsável pelo banco de dados MySQL, backend em Python com Flask (queries dinâmicas e filtros), containerização com Docker e deploy na AWS EC2. O design foi criado no Figma e o frontend desenvolvido com HTML, CSS e JavaScript, utilizando metodologia ágil Scrum.`,
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "colab",
        color: "pink-text-gradient",
      },
    ],
    image: exp,
    source_code_link: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-1DSM-API",
  },
  {
    name: "Travia",
    description:
      `Sistema de análise de tráfego urbano desenvolvido em grupo para reconhecimento automático de veículos por Inteligência Artificial, com processamento de mais de 10 mil imagens aéreas e identificação em tempo real do fluxo viário. Responsável pela rotulação no CVAT, organização e padronização dos dados com Python, treinamento do modelo YOLOv8 no Google Colab e desenvolvimento da aplicação para detecção e contagem de veículos com alta precisão.`,
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cvat",
        color: "green-text-gradient",
      },
      {
        name: "yolov8",
        color: "pink-text-gradient",
      },
    ],
    image: travia,
    source_code_link: "https://github.com/",
  },
   {
    name: "Sistema de Vendas",
    description:
      `Desenvolvimento de sistema de vendas e estoque com Java (Swing) e MySQL, estruturado em MVC com JDBC/DAO. Possui CRUD completo, autenticação com níveis de acesso, integração com WebService (consulta de CEP) e controle de estoque e histórico de vendas.`
      ,
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "swing",
        color: "pink-text-gradient",
      },
    ],
    image: vendas,
    source_code_link: "https://github.com/",
  },
  {
    name: "Aerocode",
    description:
      `Desenvolvi um sistema completo de gestão de produção aeronáutica com frontend em Next.js e backend em Node.js + Express + TypeScript, utilizando Prisma ORM para integração com MySQL e seguindo arquitetura MVC. O projeto inclui autenticação de usuários, modelos de dados gerados com Prisma e interfaces web responsivas..`
      ,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mysql/prisma",
        color: "pink-text-gradient",
      },
    ],
    image: av2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Réplica Spotify",
    description:
      `Aplicação web inspirada no Spotify, desenvolvida com React e TypeScript, focada em reprodução de músicas, gerenciamento de playlists e interface moderna e responsiva. O projeto utiliza arquitetura escalável com integração a backend, banco relacional e armazenamento de arquivos em nuvem para streaming de áudio.`
      ,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: replica,
    source_code_link: "https://github.com/",
  },
];


const underNav = [{
  name:'github',
  icon: biggerIcon,
  link:'https://github.com/HenryTito'
},
{
  name:'linkedIn',
  icon:linked,
  link:'https://www.linkedin.com/in/henry-tito-989b4b354/'
},
{
name:'whatsapp',
icon:zap,
link:'https://wa.me/5512991358590'

}


]



export { services, technologies, experiences, projects, underNav };