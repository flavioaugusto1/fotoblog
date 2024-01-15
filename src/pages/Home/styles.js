import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  background-color: #fff;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;

  padding: 2rem;

  ul {
    display: flex;
    list-style: none;
    gap: 7.5rem;

    li {
      font-size: 2rem;
      line-height: 2.88rem;
      font-weight: 700;
      color: #8d8d99;
      cursor: pointer;

      transition: 0.8s;

      &:hover {
        color: #202024;
      }
    }
  }

  input {
    width: 71rem;
    padding: 1.2rem 1.6rem;
    outline: none;

    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
  }

  img {
    height: 4.2rem;
    width: 4.2rem;
    border-radius: 50%;
  }
`;

export const Main = styled.main`
  max-width: 120rem;
  margin: 3.6rem auto 3.6rem;

  h1 {
    font-size: 2.4rem;
    line-height: 3.84rem;
    color: #202024;

    margin-bottom: 3.6rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2.2rem;
  }
`;

export const Footer = styled.footer`
  background-color: #fff;
  height: 5rem;

  font-size: 1.6rem;
  color: #323238;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CameraIcon = styled(FaCamera)`
  font-size: 3.5rem;
`;
