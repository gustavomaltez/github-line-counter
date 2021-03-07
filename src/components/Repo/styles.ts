import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 72px;

  background: #202024;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: transform 500ms;
  border-radius: 0.3rem;

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

  svg.close-btn {
    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
    color: #87868b;
    font-size: 1rem;
    transition: color 200ms;
    cursor: pointer;

    @media (max-width: 540px) {
      right: 0.6rem;
      top: 0.6rem;
      font-size: 1.5rem;
    }

    &:hover {
      color: rgba(255, 0, 0, 0.8);
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
