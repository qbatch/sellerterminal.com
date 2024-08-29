import React, { lazy } from 'react';

import Layout from '../layout';

const AboutBanner = lazy(()=> import('../components/PagesComponents/AboutBanner'));
const WhoWeAre = lazy(()=> import('../components/PagesComponents/WhoWeAre'));
const OurCommitment = lazy(()=> import('../components/PagesComponents/OurCommitment'));
const OurServices = lazy(()=> import('../components/PagesComponents/OurServices'));
const WhyChoose = lazy(()=> import('../components/PagesComponents/WhyChoose'));

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
}

export default About;
