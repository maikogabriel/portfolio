import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #111;
  color: white;
  padding: 20px;
  border-radius: 12px;
  width: 320px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Button = styled.button`
  margin: 5px;
`;

export default function ProjectCard({ title, description, images, link }) {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <Card>
      <Image src={images[index]} alt={title} />
      <div>
        <Button onClick={prev}>◀</Button>
        <Button onClick={next}>▶</Button>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      {link && (
        <a href={link} target="_blank">
          Ver repositório
        </a>
      )}
    </Card>
  );
}