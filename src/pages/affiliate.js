import React, { lazy } from 'react';

import Layout from '../layout';
import Seo from '../components/Seo';
import { affiliateFaqs } from '../constants';

const AffiliateBanner = lazy(() => import('../components/PagesComponents/AffiliateBanner'));
const BuildRevenue = lazy(() => import('../components/PagesComponents/BuildRevenue'));
const Benefits = lazy(() => import('../components/PagesComponents/Benefits'));
const HowItWorks = lazy(() => import('../components/PagesComponents/HowItWorks'));
const StartEarning = lazy(() => import('../components/PagesComponents/StartEarning'));
const Faqs = lazy(() => import('../components/PagesComponents/Faqs'));
const ReferralsRewards = lazy(() => import('../components/PagesComponents/ReferralsRewards'));

const Affiliate = () => {
  return (
    <Layout>
      <div className="banner-bg">
        <AffiliateBanner />
        <BuildRevenue />
      </div>
      <Benefits />
      <HowItWorks />
      <StartEarning />
      <Faqs content={affiliateFaqs} />
      <ReferralsRewards />
    </Layout>
  )
};

export const Head = () => (
  <Seo
    title="Earn Top Commissions Helping Amazon Sellers | Seller Terminal Affiliate Program"
    description="Join Seller Terminal's affiliate program, help Amazon sellers recover lost revenue, and earn top commissions. Turn your connections into cash today!"
    pathname='/affiliate'
    robots='index, follow'
  />
);

export default Affiliate;
