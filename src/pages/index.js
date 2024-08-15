import React, {lazy} from "react";

import Layout from "../layout";

const  Banner = lazy(()=> import('../components/PagesComponents/Banner'));
const  ReimbursedAmount = lazy(()=> import('../components/PagesComponents/ReimbursedAmount'));
const  MultiMarketplace = lazy(()=> import('../components/PagesComponents/MultiMarketplace'));
const  FbaFees = lazy(()=> import('../components/PagesComponents/FbaFees'));
const  ReceiveYourRefund = lazy(()=> import('../components/PagesComponents/ReceiveYourRefund'));
const  ReturnOnInvestment = lazy(()=> import('../components/PagesComponents/ReturnOnInvestment'));
const  SoftwarePartner = lazy(()=> import('../components/PagesComponents/SoftwarePartner'));
const  Transparancy = lazy(()=> import('../components/PagesComponents/Transparancy'));
const  EasyRefungProcess = lazy(()=> import('../components/PagesComponents/EasyRefundProcess'));
const  Faqs = lazy(()=> import('../components/PagesComponents/Faqs'));

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
