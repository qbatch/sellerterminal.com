import React from "react";

import Layout from "../layout";
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
}

export default IndexPage;
