import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";

const Section = styled.section`
  padding: 100px 20px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export default function Projects() {
  const projects = [
    {
      title: "PWA Diário de Bordo",
      description:
        "Aplicação progressiva para registro de atividades diárias, com suporte offline e armazenamento local.",
      images: ["/assets/images/pwa1.png", "/assets/images/pwa2.png", "/assets/images/pwa3.png"],
      link: "https://github.com/maikogabriel/diario-bordo",
    },
    {
      title: "Cardápio (Micro Frontend)",
      description:
        "Sistema modular baseado em micro frontends para gerenciamento de pedidos e cardápio.",
      images: ["/assets/images/microfrontend1.png", "/assets/images/microfrontend2.png", "/assets/images/microfrontend3.png"],
      link: "https://github.com/maikogabriel/micro-frontend",
    },
    {
      title: "Portal de Viagens",
      description:
        "Plataforma de busca e visualização de destinos turísticos com interface moderna.",
      images: ["/assets/images/portalviagens1.png", "/assets/images/portalviagens2.png"],
      link: "https://github.com/maikogabriel/portal-viagens",
    },
    {
      title: "Sistema de Pré-Reservas (Em desenvolvimento)",
      description:
        "Projeto pessoal focado na criação de um sistema de reservas para hotéis com foco em UX e escalabilidade.",
      images: ["/assets/images/hotel1.png", "/assets/images/hotel2.png", "/assets/images/hotel3.png"],
    },
  ];

  return (
    <Section id="projects">
      <h2>Projetos</h2>
      <Grid>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </Grid>
    </Section>
  );
}