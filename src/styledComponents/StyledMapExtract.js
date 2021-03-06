import styled from "styled-components";
import StyledFlexBox from "./StyledFlexBox";
import style from "./style";

const StyledmapExtract = styled(StyledFlexBox)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${StyledFlexBox} {
    max-width: fit-content;
    margin: 0.5rem 0;
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    ${StyledFlexBox} {
      margin: 0.5rem;
    }
`;

export default StyledmapExtract;
