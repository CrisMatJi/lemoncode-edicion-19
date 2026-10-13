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

export const episodes = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
