import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 6em;
    margin: 0;
    font-family: 'Orbitron', sans-serif;
    
  }
  h2 {
    font-family: 'Tektur', sans-serif;
    font-weight: bold;
    margin-top: 0px;
  }
  
  p{
    font-family: 'Tektur', sans-serif;
  }
  
  
  
  container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5%;
    background: papayawhip;
    text-align: start;
    
  }
`;



export default GlobalStyle;