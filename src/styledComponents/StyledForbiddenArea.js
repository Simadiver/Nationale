import styled from 'styled-components';
import StyledBorderBox from './StyledBorderBox';
import StyledImg from './StyledImg';
import style from './style';

const StyledForbiddenArea = styled(StyledBorderBox)`
  ${StyledImg} {
    width: 13rem;
    @media (min-width: ${style.mediaSize.mobileM}) {
      width: 17rem;
    }
    @media (min-width: ${style.mediaSize.mobileL}) {
      width: 30rem;
    }
  }
`

export default StyledForbiddenArea;
