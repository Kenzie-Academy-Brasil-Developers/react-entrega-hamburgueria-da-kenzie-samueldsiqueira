import styled, { css, createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
:root {
  // colors
  --color-primary: #27ae60;
  --color-primary-light: #93d7af;
  --color-secondary: #eb5757;

  //grayscale

  --gray-100: #333333;
  --gray-50: #828282;
  --gray-20: #e0e0e0;
  --gray-0: #f5f5f5;

//feedback colors

  --color-negative: #e60000;
  --color-warning: #ffcd07;
  --color-positive: #168821;
  --color-info: #155bcb;

//font sizes
  
  --font-size-xxs: 0.7rem; // 12px
  --font-size-xs: 0.8rem; //14px
  --font-size-md: 1rem; //16px
  --font-size-lg: 1.1rem; //18px
  --font-size-xl: 1.3rem; //22px
  --font-size-xxl: 1.5rem; //26px

//font weights

  --font-weight-light: 400;
  --font-weight-normal: 600;
  --font-weight-bold: 700;

}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }


  button {
    cursor: pointer;
    border: none;
    background: transparent;
    }

  ul, ol, li{
    list-style: none;
    }
    img{
        max-width: 100%;
    }
  input, select{
    background: transparent;
    border: none;
    } 

  body{
    font-family: 'Inter, sans-serif';
    background-color: var(--gray-0);
    color: var(--gray-100);
    font-size: var(--font-size-md);
  }

  h1, h2, h3, h4, h5, h6, p, span, li{
    font-family: 'Inter, sans-serif';
    color : var(--gray-100);
  }

  `;

export default Style;
