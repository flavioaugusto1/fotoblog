import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  .wrap {
    padding: 1.6rem 3.2rem;
    width: min(112rem, 100%);
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  background-color: #fff;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 2rem;

  ul {
    display: flex;
    gap: 3rem;
    list-style: none;

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
    flex: 1;
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

  animation: topDown 0.5s forwards;

  @keyframes topDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
    }
  }
`;

export const Main = styled.main`
  background-color: #f5f5f5;
  overflow-y: scroll;

  h1 {
    font-size: 2.4rem;
    line-height: 3.84rem;
    color: #202024;

    padding-top: 1.2rem;
    margin-bottom: 3.2rem;
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

  animation: downTop 0.5s forwards;

  @keyframes downTop {
    0% {
      transform: translateY(100%);
    }
    100% {
    }
  }
`;

export const CameraIcon = styled(FaCamera)`
  width: 3.5rem;
  height: 2.75rem;
`;
