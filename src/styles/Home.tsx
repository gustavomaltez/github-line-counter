import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }

  h2 {
    margin: 2rem;
    font-weight: 400;
    font-size: 1.5rem;
    text-transform: uppercase;

    @media (max-width: 650px) {
      font-size: 1rem;
    }
  }

  form {
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    width: 100%;

    input {
      flex: 1;
      height: 4rem;
      padding: 0 1rem;
      border: 0;
      border-radius: 0.3rem 0 0 0.3rem;
      color: #3a3a3a;
      border-right: 0;

      &::placeholder {
        color: #a8a8b3;
      }
    }

    button {
      width: 12rem;
      min-width: 8rem;
      background: #007ec6;
      border-radius: 0px 0.3rem 0.3rem 0px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 200ms;

      &:hover {
        background: #0167a1;
      }
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;

    @media (max-width: 940px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;
