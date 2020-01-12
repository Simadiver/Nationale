import styled from 'styled-components';
import { rgba } from 'polished';
import StyledFlexBox from './StyledFlexBox';
import StyledH1 from './StyledH1';
import style from './style';

const StyledHeroHeadline = styled(StyledFlexBox)`
  background-color: ${rgba(style.colors.primary, 0.9)};
  width: 10rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;

  ${StyledH1} {
    text-align: center;
    font-size: ${style.fontSize.small};
  }

  @media (min-width: ${style.mediaSize.mobileM}) {
    ${StyledH1} {
      font-size: ${style.fontSize.small};
    }
    width: 13rem;
  }
  @media (min-width: ${style.mediaSize.mobileL}) {
    ${StyledH1} {
      font-size: ${style.fontSize.medium};
    }
    width: 15rem;
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    ${StyledH1} {
      font-size: ${style.fontSize.big};
    }
    width: 30rem;
  }
`

export default StyledHeroHeadline;