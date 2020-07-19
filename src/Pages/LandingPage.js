import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import Translator from "../Logic/Translator";
import Link from "../Logic/Link";
import StyledSection from "../styledComponents/StyledSection";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledHero from "../styledComponents/StyledHero";
import StyledButton from "../styledComponents/StyledButton";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledH3 from "../styledComponents/StyledH3";
import flyerSmall from "../image/flyerSmall.jpg";
import flyerSmallMobileS from "../image/flyerSmallMobileS.jpg";
import flyerSmallMobileM from "../image/flyerSmallMobileM.jpg";

class Home extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledSection>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LandingPage.Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="LandingPage.paragraph1" />
            </StyledParagraph>
            <StyledParagraph>
              <Translator id="LandingPage.paragraph2" />
            </StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
        <StyledHero
          backgroundImageMobileS={flyerSmallMobileS}
          backgroundImageMobileM={flyerSmallMobileS}
          backgroundImageMobileL={flyerSmallMobileM}
          backgroundImageTablet={flyerSmall}
          backgroundImageLaptop={flyerSmall}
          backgroundImageLaptopL={flyerSmall}
          backgroundImageDesktop={flyerSmall}
          isPortrait
        />
        <StyledSection>
          <StyledFlexBox alignItems="center">
            <StyledButton as={Link} padding="0.5rem" to="/home">
              <Translator id="LandingPage.button" />
            </StyledButton>
          </StyledFlexBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Home;
