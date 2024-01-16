import { Container } from "./styles";

export function Card({ title, image, ...rest }) {
  return (
    <Container {...rest}>
      <img src={image} alt="#" />
      <div className="details">
        <h2>{title}</h2>
        <span>TAG</span>
      </div>
    </Container>
  );
}
