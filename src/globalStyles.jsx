import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 4em;
    margin: 0;
    font-family: 'Orbitron', sans-serif;
    
  }
  h2 {
    font-family: 'Tektur', sans-serif;
    font-weight: bold;
    margin-bottom: 0px;
  }

  
  p{
    font-family: 'Tektur', sans-serif;
    margin: 0px;
  }
  
  
  
  container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5%;
    background: papayawhip;
    text-align: start;
  }
  
  spacer {
    padding-top: 20px;
  }
`;



export default GlobalStyle;