import React, { lazy } from 'react';

import Layout from '../layout';

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
      <Faqs />
      <ReferralsRewards />
    </Layout>
  )
}

export default Affiliate;
