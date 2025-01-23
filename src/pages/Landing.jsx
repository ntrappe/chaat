import React from 'react';
import Page from '../components/Page';
import Footer from '../features/Footer';
import GlassNav from '../components/GlassNav/GlassNav';
import Section from '../components/Section';
import ProjectCarousel from '../features/ProjectCarousel';
import ValuesCarousel from '../features/ValuesCarousel';
import GraphicsCarousel from '../features/GraphicsCarousel';

function Landing({ }) {
  return (
    <Page color='dark'>
      <Page.Header>
        <GlassNav>
          <GlassNav.Title>Hello World</GlassNav.Title>
          <GlassNav.Menu>
            <GlassNav.Menu.Item>Overview</GlassNav.Menu.Item>
            <GlassNav.Menu.Item>Features</GlassNav.Menu.Item>
            <GlassNav.Menu.Item>Control</GlassNav.Menu.Item>
            <GlassNav.Menu.Item>Transparency Report</GlassNav.Menu.Item>
            <GlassNav.Menu.Item>Privacy Policy</GlassNav.Menu.Item>
          </GlassNav.Menu>
        </GlassNav>
      </Page.Header>
      <Page.Main>
        <Section>
          <Section.Heading>Visuals that bring ideas to life.</Section.Heading>
          <GraphicsCarousel />
        </Section>
        <Section>
          <Section.Heading>Dive into my work.</Section.Heading>
          <ProjectCarousel />
        </Section>
        <Section>
          <Section.Heading>See through my lens.</Section.Heading>
        </Section>
        <Section>
          <Section.Heading>Values that drive design.</Section.Heading>
          <ValuesCarousel />
        </Section>
      </Page.Main>
      <Page.Footer>
        <Footer />
      </Page.Footer>
    </Page>
  )
}

export default Landing;