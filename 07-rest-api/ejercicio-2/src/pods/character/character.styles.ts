import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  & p {
    margin: 0;
  }
`;

export const form = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
`;
