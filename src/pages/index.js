import * as React from "react";
// components for home page
import Layout from "../layout";
import Banner from "../components/pageComponents/banner";
import WeInvestigate from "../components/pageComponents/weInvestigate";
import Marketplace from "../components/pageComponents/supportedMarketplace";
import Challenges from "../components/pageComponents/challenges";
import About from "../components/pageComponents/aboutInvestment";
import OurPromise from "../components/pageComponents/ourPromise";
import TimeHold from "../components/pageComponents/ctaBlock";
import BuySoftware from "../components/pageComponents/ctaBlock";
import GettingRefund from "../components/pageComponents/gettingRefunds";
import Faq from "../components/pageComponents/Faq";
import WeRespond from "../components/pageComponents/weRespond";

const IndexPage = () => (
  <Layout>
    <Banner />
    <WeInvestigate />
    <Marketplace />
    <Challenges />
    <About />
    <OurPromise />
    <TimeHold
      title="Time to Hold Amazon Accountable."
      subtitle="Zero Hidden Charges. Risk-Free Audits"
      btnText="Find Out Claimable Amount"
    />
    <GettingRefund />
    <BuySoftware
      title="Psst… Want to buy our software? Curious how?"
      btnText="Hit The Button To Know More"
    />
    <Faq />
    <WeRespond />
  </Layout>
);

export const Head = () => <title>Home Page</title>;

export default IndexPage;
