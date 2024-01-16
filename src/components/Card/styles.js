import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  max-width: 40rem;

  border-radius: 0.7rem;

  > img {
    width: 100%;
    border-top-right-radius: 0.7rem;
    border-top-left-radius: 0.7rem;

    aspect-ratio: 16/9;
    object-fit: cover;

    transition: all 1s;

    &:hover {
      filter: hue-rotate(10deg) contrast(101%) saturate(200%);
    }
  }

  .details {
    padding: 2.2rem;

    h2 {
      font-size: 2rem;
      line-height: 3.2rem;
      margin-bottom: 1.3rem;
    }

    span {
      background-color: #f5f5f5;
      border-radius: 0.5rem;
      padding: 0.8rem;
    }
  }

  animation-name: appears;
  animation-duration: 2s;
  animation-fill-mode: backwards;

  @keyframes appears {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
