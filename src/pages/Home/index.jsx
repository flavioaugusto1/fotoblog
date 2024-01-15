import { Container, Header, Main, Footer, CameraIcon } from "./styles";
import { Card } from "../../components/Card";

import Perfil from "../../assets/perfil.jpg";
import Setup1 from "../../assets/setup1.png";

export function Home() {
  return (
    <Container>
      <Header>
        <CameraIcon />
        <ul>
          <li>Home</li>
          <li>Galeria</li>
        </ul>
        <input type="text" placeholder="Pesquise por imagens e coleções" />
        <img
          src={Perfil}
          alt="Imagem de uma pessoa com barba, cabelo cortado e olhos castanhos"
        />
      </Header>
      <Main>
        <h1>Galeria</h1>
        <Card title={"Workspace elétrica"} image={Setup1} />
      </Main>
      <Footer>&copy; 2023 - fladev</Footer>
    </Container>
  );
}
