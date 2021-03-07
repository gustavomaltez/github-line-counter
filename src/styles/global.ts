import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #__next{
    max-width: 960px;
    min-width: 270px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  body{
    background: #191C20;
    color: #EFEFEF;
    font-family: 'Fira Code', monospace;
    --webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-size: 1rem;
    outline: none;
    border: 0;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  @media(max-width: 1080px){
    html{
        font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
      html{
          font-size: 87.5%;
      }
  }

  @media(max-width: 500px){
      html{
          font-size: 70.5%;
      }
  }

  @media(max-width: 400px){
      html{
          font-size: 60.5%;
      }
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 126, 198, 90);
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover{
    background: rgba(0, 126, 198, 1)
  }

  ::-webkit-scrollbar-track{
    background: rgba(85, 85, 85, 0.2);
    border-radius: 0;
  }
`;
