import styled from "styled-components";
import StyledFlexBox from "./StyledFlexBox";
import StyledImg from "./StyledImg";
import style from "./style";

const StyledGalleryItem = styled(StyledFlexBox)`
  margin: 0.25rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 0.25rem;
  border-style: solid;
  border-width: 0.05rem;
  cursor: pointer;
  ${StyledImg} {
    height: 9rem;
  }
  @media (min-width: ${style.mediaSize.mobileM}) {
    ${StyledImg} {
      height: unset;
    }
  }
  @media (min-width: ${style.mediaSize.mobileL}) {
    ${props => (props.urbanGallery ? `` : `width: 23.5rem`)};
    align-self: center;
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    ${props => (props.urbanGallery ? `` : `width: 47%`)};
    alifn-self: unset;
  }
`;

export default StyledGalleryItem;
