/** @jsxImportSource @emotion/react */
import Fade from 'react-reveal/Fade';
import {
  sectionContainer,
  contentContainer,
  topContainer,
  subjectStyle,
  imgStyle,
  bottomContainer,
} from './PromotionCard.style';
import Project from '../Project/Project';
import Study from '../Study/Study';
import Entertainment from '../Entertainment/Entertainment';

export default function PromotionCard({ imageSrc, height, title, benefits }) {
  return (
    <section css={sectionContainer}>
      <div css={contentContainer}>
        <div css={topContainer}>
          <Fade left>
            <div css={subjectStyle}>{title}</div>
          </Fade>
          <img src={`${imageSrc}.png`} alt={title} css={imgStyle(height)} />
        </div>

        {title === 'Project' && (
          <div css={bottomContainer}>
            <Project benefits={benefits} imageSrc={imageSrc} />
          </div>
        )}
        {title === 'Study & Networking' && (
          <div css={bottomContainer}>
            <Study benefits={benefits} />
          </div>
        )}

        {title === 'Entertainment' && (
          <div css={bottomContainer}>
            <Entertainment benefits={benefits} />
          </div>
        )}
      </div>
    </section>
  );
}
