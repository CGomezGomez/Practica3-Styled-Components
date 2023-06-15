import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{

    margin: 0;
    max-width: 1440px;
    margin: auto;
    font-family: 'Space Grotesk', sans-serif;
    
  }

  .wrapper-body {

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export { GlobalStyles };