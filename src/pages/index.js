import React from "react";
// import "/static/animate.css";

import Layout from "../layout";
import Seo from '../components/Seo';
import Banner from '../components/PagesComponents/Banner';
import ReimbursedAmount from '../components/PagesComponents/ReimbursedAmount';
import MultiMarketplace from '../components/PagesComponents/MultiMarketplace';
import FbaFees from '../components/PagesComponents/FbaFees';
import ReceiveYourRefund from '../components/PagesComponents/ReceiveYourRefund';
import ReturnOnInvestment from '../components/PagesComponents/ReturnOnInvestment';
import SoftwarePartner from '../components/PagesComponents/SoftwarePartner';
import Transparancy from '../components/PagesComponents/Transparancy';
import EasyRefungProcess from '../components/PagesComponents/EasyRefundProcess';
import Faqs from '../components/PagesComponents/Faqs';

const IndexPage = () => {
  return (
    <Layout>
      <div className="banner-bg">
        <Banner />
        <ReimbursedAmount />
      </div>
      <MultiMarketplace />
      <FbaFees />
      <ReceiveYourRefund />
      <ReturnOnInvestment />
      <SoftwarePartner />
      <Transparancy />
      <EasyRefungProcess />
      <Faqs />
    </Layout>
  )
};

export const Head = () => (
  <Seo title="Seller Terminal - Your Amazon Reimubursemnets Case Advocate!"></Seo>
);

export default IndexPage;
