import React, { useState } from "react";
import {
  LayoutGrid,
  AboutSection,
  HeaderSection,
  ContentSection
} from "./styles";
import { Container } from "@material-ui/core";
import About from "../About";
import NavBar, { TabKeys } from "../NavBar";
import aboutData from "data/about.json";
import exhibitionsData from "data/exhibitions.json";
import StaggeredGallery from "../StaggeredGallery";
import Exhibitions from "../Exhibitions";
import { RockTypography } from "../Common";

const Content = () => {
  const [tab, setTab] = useState(TabKeys.Gallery);

  return (
    <>
      <HeaderSection>
        <NavBar selected={tab} onTabSelect={tab => setTab(tab)} />
      </HeaderSection>
      <ContentSection>
        {tab === TabKeys.Gallery && <StaggeredGallery />}
        {tab === TabKeys.Exhibitions && <Exhibitions exhibitions={exhibitionsData} />}
        {tab === TabKeys.Contact && (
          <Container>
            <About paragraphs={aboutData} />
          </Container>
        )}
      </ContentSection>
    </>
  );
};

const Layout = () => {
  return (
    <LayoutGrid>
      <AboutSection>
        <RockTypography variant="h3">Stephanie Alicia Chen</RockTypography>
        <RockTypography variant="h6">- artist & designer -</RockTypography>
      </AboutSection>
      <Content />
    </LayoutGrid>
  );
};

export default Layout;
