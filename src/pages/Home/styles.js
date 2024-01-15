import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

export const Container = styled.div``;

export const Header = styled.header`
  background-color: #fff;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;

  ul {
    display: flex;
    list-style: none;
    gap: 7.5rem;

    li {
      font-size: 2rem;
      line-height: 2.88rem;
      cursor: pointer;
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

export const Footer = styled.footer``;

export const CameraIcon = styled(FaCamera)`
  font-size: 3.5rem;
`;
