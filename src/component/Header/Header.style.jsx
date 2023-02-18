import { css } from '@emotion/react';
import { tablet, desktop } from '../../utils/viewports';

export const headContainer = height => css`
  width: 100%;
  height: ${height}px;

  line-height: ${height + 200}px;

  ${tablet} {
    height: ${height + 250}px;
    line-height: ${height + 450}px;
  }

  ${desktop} {
    height: ${height}px;
    line-height: ${height + 200}px;
  }

  text-align: center;
`;

export const titleStyle = css`
  color: white;

  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 10vw;

  letter-spacing: -0.03em;
`;
