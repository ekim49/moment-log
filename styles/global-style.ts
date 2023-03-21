// reset 또는 공통적으로 사용하는 css
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body { 
    width: 100%;
    height: 100%;
    /* min-width: 1200px; */
    background-color: #ffffff;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-size : ${({ theme }) => theme.fontSize.text}px;
    color: ${({ theme }) => theme.colors.black1};
  }

  ul, ol {
    list-style: none;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }
`;
