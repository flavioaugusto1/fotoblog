import { Container, Header, Main, Footer, CameraIcon } from "./styles";
import Perfil from "../../assets/perfil.jpg";

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
        <img src={Perfil} alt="Imagem de uma pessoa com barba, cabelo cortado e olhos castanhos" />
      </Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  );
}
