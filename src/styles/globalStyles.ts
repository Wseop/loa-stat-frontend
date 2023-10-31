import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #282828;
    color: white;
    font-family: 'main-font';
  }

  @font-face {
    font-family: 'main-font';
    src: url('/fonts/NanumSquareNeo-bRg.ttf');
  }
`;
