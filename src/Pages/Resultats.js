import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import Link from "../Logic/Link";
import StyledH1 from "../styledComponents/StyledH1";
import StyledH3 from "../styledComponents/StyledH3";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledSection from "../styledComponents/StyledSection";
import StyledSpan from "../styledComponents/StyledSpan";
import StyledAnchor from "../styledComponents/StyledAnchor";
import Translator from "../Logic/Translator";

class Resultats extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Résultats | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledSection justify>
          <StyledH1>
            <Translator id="Results.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Results.lastUpate" />
          </StyledSpan>
          <StyledBorderBox id="Sprint">
            <StyledH3>
              <Translator id="Results.spTitle" />
            </StyledH3>
            <StyledAnchor
              as={Link}
              to="/download/Results/Sprint/resultats SI.html"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.spParagraph1" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/Results/Sprint/resultats_cat.html"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.spParagraph2" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/Results/Sprint/resultats_selection_ SI_V2.html"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.spParagraph3" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/Results/Sprint/resultats_selections_cat_V2.html"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.spParagraph4" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledParagraph>
              <StyledSpan>
                <Translator id="Results.spVideoParagraph" />
              </StyledSpan>
              <StyledAnchor as={Link} to="/sprint#video">
                <StyledSpan>
                  <Translator id="Results.videoLink" />
                </StyledSpan>
              </StyledAnchor>
              <StyledSpan>
                <Translator id="Results.albumParagraph" />
              </StyledSpan>
              <StyledAnchor as={Link} to="/gallery">
                <StyledSpan>
                  <Translator id="Results.albumLink" />
                </StyledSpan>
              </StyledAnchor>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox id="MD">
            <StyledH3>
              <Translator id="Results.mdTitle" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Results.spParagraph" />
            </StyledParagraph>
            <StyledAnchor
              as={Link}
              to="/download/Results/MD/Resultats_provisoires_MD.pdf"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.mdParagraph1" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/Results/MD/Resultats_provisoires_SI_MD.pdf"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.mdParagraph2" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledParagraph>
              <StyledSpan>
                <Translator id="Results.mdVideoParagraph" />
              </StyledSpan>
              <StyledAnchor as={Link} to="/middle-distance#video">
                <StyledSpan>
                  <Translator id="Results.videoLink" />
                </StyledSpan>
              </StyledAnchor>
              <StyledSpan>
                <Translator id="Results.albumParagraph" />
              </StyledSpan>
              <StyledAnchor as={Link} to="/gallery">
                <StyledSpan>
                  <Translator id="Results.albumLink" />
                </StyledSpan>
              </StyledAnchor>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox id="LD">
            <StyledH3>
              <Translator id="Results.ldTitle" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Results.spParagraph" />
            </StyledParagraph>
            <StyledAnchor
              as={Link}
              to="/download/Results/LD/Resultats_provisoires_LD.pdf"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.ldParagraph1" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/Results/LD/Resultats_provisoires_SI_LD.pdf"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.ldParagraph2" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledParagraph>
              <StyledSpan>
                <Translator id="Results.ldVideoParagraph" />
              </StyledSpan>
              <StyledAnchor as={Link} to="/long-distance#video">
                <StyledSpan>
                  <Translator id="Results.videoLink" />
                </StyledSpan>
              </StyledAnchor>
              <StyledSpan>
                <Translator id="Results.albumParagraph" />
              </StyledSpan>
              <StyledAnchor as={Link} to="/gallery">
                <StyledSpan>
                  <Translator id="Results.albumLink" />
                </StyledSpan>
              </StyledAnchor>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Results.gpsTrackingTitle" />
            </StyledH3>
            <StyledParagraph>
              <StyledSpan>
                <Translator id="LDEvent.gpsTrackingParagrpah1" />
              </StyledSpan>
              <StyledSpan>
                <StyledAnchor href="https://www.livelox.com/Events/Show/52869/Nationale-NO-2020-LD">
                  <Translator id="LDEvent.gpsTrackingParagrpah2" />
                </StyledAnchor>
              </StyledSpan>
              <StyledSpan>
                <Translator id="LDEvent.gpsTrackingParagrpah3" />
              </StyledSpan>
            </StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Resultats;
