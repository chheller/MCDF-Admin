import { css } from "linaria";

export const AppBody = css`
  text-align: center;
`;

export const AppLogo = css`
  animation: App-Logo-Spins infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
  @keyframes App-Logo-Spins {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const AppHeader = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLink = css`
  color: #61dafb;
`;
