import React, { lazy } from 'react';

import Seo from '../components/Seo';
import Layout from '../layout';

const AboutBanner = lazy(() => import('../components/PagesComponents/AboutBanner'));
const WhoWeAre = lazy(() => import('../components/PagesComponents/WhoWeAre'));
const OurCommitment = lazy(() => import('../components/PagesComponents/OurCommitment'));
const OurServices = lazy(() => import('../components/PagesComponents/OurServices'));
const WhyChoose = lazy(() => import('../components/PagesComponents/WhyChoose'));

const About = () => {
  return (
    <Layout>
      <AboutBanner />
      <WhoWeAre />
      <OurCommitment />
      <OurServices />
      <WhyChoose />
    </Layout>
  )
};

export const Head = () => (
  <Seo
    title="Maximize Your Amazon FBA Returns | Seller Terminal"
    description="Seller Terminal ensures you're always in control of your Amazon business by helping you recover every dollar owed from Amazon's FBA program."
    pathname='/about'
    robots='index, follow'
  />
);

export default About;
