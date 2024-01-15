import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  background-color: #fff;
  height: 8rem;

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

export const Main = styled.main``;

export const Footer = styled.footer`
  background-color: #fff;
  height: 8rem;

  text-align: center;
  padding-top: 2.9rem;

  font-size: 1.6rem;
  color: #323238;
`;

export const CameraIcon = styled(FaCamera)`
  font-size: 3.5rem;
`;
