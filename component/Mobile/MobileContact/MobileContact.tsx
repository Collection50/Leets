/** @jsxImportSource @emotion/react */
import { CONTACT_LAYOUT } from '@/constants';
import {
  sectionContainer,
  headContainer,
  flexContainer,
  infoContainer,
  titleStyle,
  infoStyle,
  linkStyle,
} from './MobileContact.styled';

export default function MobileContact() {
  return (
    <section css={sectionContainer}>
      <div css={headContainer}>Contact</div>
      <div css={flexContainer}>
        {CONTACT_LAYOUT.map(({ title, value, hasLink }) => (
          <div key={title} css={infoContainer}>
            <div css={titleStyle}>{title}</div>
            <div css={infoStyle}>
              {hasLink ? (
                <a href={value} target={value} css={linkStyle}>
                  {value}
                </a>
              ) : (
                value
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
