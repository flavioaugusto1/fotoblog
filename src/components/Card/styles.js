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
      border-radius: .5rem;
      padding: 0.8rem;
    }
  }
`;
