import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 4.7rem;

  background: #555555;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 20rem;
  transition: transform 500ms;

  a {
    padding: 0.5rem;
    text-decoration: none;
    display: flex;
    color: #ececec;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  svg {
    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
    font-size: 1rem;
    transition: color 200ms;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
  &:hover {
    transform: scale(1.05);
  }
  img {
    margin-top: 0.4rem;
    border-style: inherit;
    background: #007ec6;
    border: 1px solid #007ec6;
  }
`;
