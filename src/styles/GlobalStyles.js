import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

:root {
  --blackPurple: #07020E;
  --primary: #7C57A7;
  --black: #000000;
  --blackLighter: #9E9E9E;
  --grayLight: #F5F5F5;
  --grayMedium: #e5e5e5; 
  --whitePurple: #CABDD9;
  --frontEnd: #6BD1FF;
  --backEnd: #00C86F;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: #271041;
}

a {
  color: inherit;
} 

`;