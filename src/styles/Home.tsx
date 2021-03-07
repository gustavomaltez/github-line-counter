import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: blue; */

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }

  form {
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    width: 100%;

    input {
      flex: 1;
      height: 70px;
      padding: 0 24px;
      border: 0;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;
      border-right: 0;

      &::placeholder {
        color: #a8a8b3;
      }
    }

    button {
      width: 210px;
      background: #007ec6;
      border-radius: 0px 5px 5px 0px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 200ms;
    }
  }

  section {
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;

    div {
      padding: 0.5rem;
      background: #555555;
      min-width: 15vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        margin-top: 0.4rem;
        border-style: inherit;
        background: #007ec6;
        border: 1px solid #007ec6;
      }
    }
  }
`;

export { Container };
