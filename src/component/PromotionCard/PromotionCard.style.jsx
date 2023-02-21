import { css } from '@emotion/react';
// import { tablet, desktop, mobile } from '../../utils/viewports';
import mq from '../../utils/viewports';

export const sectionContainer = css(
  mq({
    fontFamily: 'DM Sans',
    width: '100%',

    height: [700, 800, 900, 1200],

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: 'white',

    // border: '1px solid white',
  })
);

export const contentContainer = css`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  // border: 1px solid red;
`;

export const topContainer = css`
  width: 92%;
  height: auto;

  display: flex;
  justify-content: space-between;

  // border: 1px solid white;
`;

export const subjectStyle = css(
  mq({
    fontWeight: '500',
    fontSize: [54.7, 54.7, 78.7, 96],
    color: 'white',
    width: 'auto',
    height: 'content',

    // border: '1px solid red',
  })
);

export const imgStyle = height =>
  css(
    mq({
      width: ['36.25vw', 297, 427, 522],
      height: [({ height } / 1440) * 820, ({ height } / 1440) * 820, ({ height } / 1440) * 1180, { height }],

      // border: 1px solid blue;
    })
  );

export const bottomContainer = css(
  mq({
    width: '92%',
    height: [209, 210, 301, 368],
    marginTop: [58, 59, 84, 103],

    // border: '1px solid blue',
  })
);
