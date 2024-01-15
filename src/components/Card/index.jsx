import { Container } from "./styles";

export function Card({ title, image }) {
  return (
    <Container>
      <img src={image} alt="#" />
      <div className="details">
        <h1>{title}</h1>
        <span>TAG</span>
      </div>
    </Container>
  );
}
