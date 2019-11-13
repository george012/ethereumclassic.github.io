import React from 'react';
import { graphql } from 'gatsby';

import Navigation from '~components/navigation';
import Footer from '~components/footer';
import Banner from '~components/banner';
import Section from '~components/section';
import WideSection from '~components/wideSection';
import IconGrid from '~components/iconGrid';
import Mdx from '~components/mdx';
import LatestBlogPosts from '~components/latestBlogPosts';

const Index = ({ pageContext: { i18n }, data: { file } }) => (
  <>
    <Navigation />
    <div id="wrapper">
      <Banner image={file.childImageSharp.fluid} />
      <Section className="wide-header" subSection={() => <Mdx code={i18n.mdx.whatIsClassic} />}>
        <Mdx code={i18n.mdx.whatIsBlockchain} />
      </Section>
      <WideSection className="shaded">
        <IconGrid
          icons={[
            {
              title: 'Decentalized',
              text: 'Open and welcoming grassroots community',
              icon: 'fas fa-users'
            },
            {
              title: 'Immutable',
              text: "Ledger remains untampered since it's 2015 inception",
              icon: 'fas fa-link'
            },
            {
              title: 'Unstoppable',
              text: 'Neutral platform where contracts are honored forever',
              icon: 'far fa-hourglass'
            }
          ]}
        />
      </WideSection>
      <WideSection className="dark">
        <Mdx code={i18n.mdx.getStarted} />
      </WideSection>
      <Section subSection={() => <Mdx code={i18n.mdx.stayCurrent} />}>
        <h2>Latest Blog Posts</h2>
        <LatestBlogPosts />
      </Section>
      <Footer />
    </div>
  </>
);

export default Index;

export const query = graphql`
  query {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;