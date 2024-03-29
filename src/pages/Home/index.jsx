import { Container, Header, Main, Footer, CameraIcon } from "./styles";
import { Card } from "../../components/Card";

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
            <Card
              title={"Workspace elétrica"}
              image={Setup1}
              style={{ animationDelay: 0.2 + "s" }}
            />
            <Card
              title={"Dark and red"}
              image={Setup2}
              style={{ animationDelay: 0.4 + "s" }}
            />
            <Card
              title={"Organização e grids"}
              image={Setup3}
              style={{ animationDelay: 0.8 + "s" }}
            />
            <Card
              title={"Colméia"}
              image={Setup4}
              style={{ animationDelay: 1.2 + "s" }}
            />
            <Card
              title={"Setup de escritor"}
              image={Setup5}
              style={{ animationDelay: 1.6 + "s" }}
            />
            <Card
              title={"Ergonomia e cores"}
              image={Setup6}
              style={{ animationDelay: 1.8 + "s" }}
            />
            <Card
              title={"Show de luzes"}
              image={Setup7}
              style={{ animationDelay: 2.2 + "s" }}
            />
            <Card
              title={"Deep purple"}
              image={Setup8}
              style={{ animationDelay: 2.4 + "s" }}
            />
            <Card
              title={"Multi-Screen"}
              image={Setup9}
              style={{ animationDelay: 2.8 + "s" }}
            />
          </section>
        </div>
      </Main>
      <Footer className="wrap">
        <p>&copy; 2023 - fladev</p>
      </Footer>
    </Container>
  );
}
