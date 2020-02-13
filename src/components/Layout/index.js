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
import about from "data/about.json";
import Gallery from "../Gallery";

const Content = () => {
  const [tab, setTab] = useState(TabKeys.Gallery);

  return (
    <>
      <HeaderSection>
        <NavBar selected={tab} onTabSelect={tab => setTab(tab)} />
      </HeaderSection>
      <ContentSection>
        {tab === TabKeys.Gallery && <Gallery />}
        {tab === TabKeys.Contact && (
          <Container>
            <About paragraphs={about} />
          </Container>
        )}
      </ContentSection>
    </>
  );
};

const Layout = () => {
  return (
    <LayoutGrid>
      <AboutSection />
      <Content />
    </LayoutGrid>
  );
};

export default Layout;
