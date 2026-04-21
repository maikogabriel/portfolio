import styled from "styled-components";

const Section = styled.section`
  padding: 120px 20px;
  text-align: center;
`;

const Img = styled.img`
  width: 150px;
  border-radius: 50%;
  margin: 20px 0;
`;

export default function About() {
  return (
    <Section id="about">
      <h1>Maiko Gabriel</h1>
      <Img src="/assets/images/eu1.jpeg" alt="Maiko Gabriel" />

      <p>
        Sou Maiko Gabriel, gaúcho de 25 anos e estudante de programação pela EBAC.
        Tenho focado meus estudos no desenvolvimento frontend com React, criando
        aplicações modernas, responsivas e bem estruturadas. Busco constantemente
        evoluir minhas habilidades e construir projetos que resolvam problemas
        reais, com código limpo e boas práticas.
      </p>
    </Section>
  );
}