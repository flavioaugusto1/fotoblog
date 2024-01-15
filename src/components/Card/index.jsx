import { Container } from "./styles";

export function Card({ title, image }) {
  return (
    <Container>
      <img src={image} alt="#" />
      <div className="details">
        <h2>{title}</h2>
        <span>TAG</span>
      </div>
    </Container>
  );
}
