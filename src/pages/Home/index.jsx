import { Container, Header, Main, Footer, CameraIcon } from "./styles";
import { Card } from "../../components/Card";

import Perfil from "../../assets/perfil.jpg";
import Setup1 from "../../assets/setup1.png";
import Setup2 from "../../assets/setup2.png";
import Setup3 from "../../assets/setup3.png";
import Setup4 from "../../assets/setup4.png";
import Setup5 from "../../assets/setup5.png";
import Setup6 from "../../assets/setup6.png";
import Setup7 from "../../assets/setup7.png";
import Setup8 from "../../assets/setup8.png";
import Setup9 from "../../assets/setup9.png";

export function Home() {
  return (
    <Container>
      <Header className="wrap">
        <CameraIcon />
        <ul>
          <li>Home</li>
          <li>Galeria</li>
        </ul>
        <input type="text" placeholder="Pesquise por imagens e coleções" />
        <img
          src="https://github.com/flavioaugusto1.png"
          alt="Imagem de uma pessoa com barba, cabelo cortado e olhos castanhos"
        />
      </Header>
      <Main>
        <div className="wrap">
          <h1>Galeria</h1>
          <section>
            <Card title={"Workspace elétrica"} image={Setup1} />
            <Card title={"Dark and red"} image={Setup2} />
            <Card title={"Organização e grids"} image={Setup3} />
            <Card title={"Colméia"} image={Setup4} />
            <Card title={"Setup de escritor"} image={Setup5} />
            <Card title={"Ergonomia e cores"} image={Setup6} />
            <Card title={"Show de luzes"} image={Setup7} />
            <Card title={"Deep purple"} image={Setup8} />
            <Card title={"Multi-Screen"} image={Setup9} />
          </section>
        </div>
      </Main>
      <Footer className="wrap">
        <p>&copy; 2023 - fladev</p>
      </Footer>
    </Container>
  );
}
