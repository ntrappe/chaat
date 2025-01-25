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
          <GlassNav.Pre sidebar={true}></GlassNav.Pre>
          <GlassNav.Title>Nicole Trappe</GlassNav.Title>
          <GlassNav.Menu>
            <GlassNav.Menu.Item>About</GlassNav.Menu.Item>
            <GlassNav.Menu.Item>Projects</GlassNav.Menu.Item>
            <GlassNav.Menu.Item>Photography</GlassNav.Menu.Item>
            <GlassNav.Menu.Item>Art</GlassNav.Menu.Item>
            {/* <GlassNav.Menu.Item>Adventures</GlassNav.Menu.Item> */}
          </GlassNav.Menu>
        </GlassNav>
      </Page.Header>
      <Page.Main>
        <Section id='hero-section' color='dark'>
          <Section.DynamicHeading words={['Designing ', 'Building ', 'Creating ', 'Exploring ']}>
            with people in mind.
          </Section.DynamicHeading>
          <Section.Subheading>
            I’m a full-stack developer bridging neuroscience, engineering, and design to create 
            technology that solves human problems.
          </Section.Subheading>
          <Section.Badges>
            <Section.Badges.Badge>
              <Section.Badges.Badge.Caption>Over</Section.Badges.Badge.Caption>
              <Section.Badges.Badge.Value>2.5</Section.Badges.Badge.Value>
              <Section.Badges.Badge.Caption>years in industry</Section.Badges.Badge.Caption>
            </Section.Badges.Badge>
            <Section.Badges.Badge>
              <Section.Badges.Badge.Caption>Up to</Section.Badges.Badge.Caption>
              <Section.Badges.Badge.Value>7.0</Section.Badges.Badge.Value>
              <Section.Badges.Badge.Caption>programming languages</Section.Badges.Badge.Caption>
            </Section.Badges.Badge>
            <Section.Badges.Badge>
              <Section.Badges.Badge.Caption>Over</Section.Badges.Badge.Caption>
              <Section.Badges.Badge.Value>10.0</Section.Badges.Badge.Value>
              <Section.Badges.Badge.Caption>projects in design & eng</Section.Badges.Badge.Caption>
            </Section.Badges.Badge>
            <Section.Badges.Badge>
              <Section.Badges.Badge.Caption>Up to</Section.Badges.Badge.Caption>
              <Section.Badges.Badge.Value>48.3</Section.Badges.Badge.Value>
              <Section.Badges.Badge.Caption>miles hiked this year</Section.Badges.Badge.Caption>
            </Section.Badges.Badge>
          </Section.Badges>
        </Section>
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