import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset} 
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  body {
    color: #272727;
    background-color:#fff;
  }
  button {
    cursor: pointer;
    background:none;
  }
  input {
    border:none;
  }
  ul,ol,li {
    list-style:none; 
  }
  a{
    color: #fff; text-decoration: none; outline: none;
  }
`;

export default GlobalStyles;
