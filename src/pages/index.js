import * as React from "react";
// components for home page
import Layout from "../layout";
import Banner from "../components/pageComponents/banner";
import WeInvestigate from "../components/pageComponents/weInvestigate";
import Marketplace from "../components/pageComponents/supportedMarketplace";
import Challenges from "../components/pageComponents/challenges";

const IndexPage = () => (
  <Layout>
    <Banner />
    <WeInvestigate />
    <Marketplace />
    <Challenges />
  </Layout>
);

export const Head = () => <title>Home Page</title>;

export default IndexPage;
