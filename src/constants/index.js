import React from "react";

const headerMenu = [
  {
    name: "Home",
    to: "#home",
    isSection: true,
  },
  {
    name: "About",
    to: "/about/",
    isSection: false,
  },
  {
    name: "How we work",
    to: "#work-section",
    isSection: true,
  },
  {
    name: "Pricing",
    to: "#pricing-section",
    isSection: true,
  },
  {
    name: "FAQs",
    to: "#faq-section",
    isSection: true,
  },
  {
    name: "Support",
    to: "#support-section",
    isSection: true,
  },
];

const testimonialData = [
  {
    feedback: `"Seller Terminal recovered over $80k for my business. Their dedicated recovery agent handled everything seamlessly, and I didn't have to worry about a thing. I highly recommend their service."`,
    clientName: 'Bob Steele',
    designation: '8-Figure Amazon Seller',
    amount: '$80k+',
    cases: '4k',
    clientImg: '/st-avatar.svg'
  },
  {
    feedback: `"I was skeptical at first, but Seller Terminal's free audit revealed so many missed reimbursements. They recovered funds I didn't even know were owed to me. Their team is thorough and professional." Emily`,
    clientName: 'Steve',
    designation: 'Brand Owner',
    amount: '$70k+',
    cases: '3k',
    clientImg: '/st-avatar.svg'
  },
  {
    feedback: `“I can't believe how much money I was losing before using Seller Terminal. Their system caught every error and discrepancy. My personal recovery agent was incredibly helpful and responsive."`,
    clientName: 'David Klein',
    designation: 'E-commerce Business Owner',
    amount: '$90k+',
    cases: '5k',
    clientImg: '/st-avatar.svg'
  },
];

const refundDetails = [
  {
    label: 'Missing Reimbursement',
    desc: "When Amazon claims they reimbursed a claim amount but haven't, we spot this and secure it."
  },
  {
    label: 'Customer Replacements',
    desc: "If Amazon sends a replacement before the original is returned, we ensure you aren’t charged if the original isn’t returned within 45 days."
  },
  {
    label: 'Missing Order Credits',
    desc: "If a customer received a refund but didn’t get credited, we’ll file a claim if it’s been over 45 days."
  },
  {
    label: 'Customer Refund Overages',
    desc: "When customers receive a larger refund than they paid, and you get charged, we handle this."
  },
];

const inventoryDetails = [
  {
    label: 'Destroyed Items',
    desc: "We track items destroyed by Amazon without permission to get you reimbursements."
  },
  {
    label: 'Warehouse Losses',
    desc: "We handle reimbursement claims for items lost or damaged in an Amazon warehouse."
  },
  {
    label: 'Inventory Adjustments',
    desc: "We find discrepancies in claimed inventory adjustments and secure refunds."
  },
  {
    label: 'Returned Inventory Errors',
    desc: "If the wrong item is returned to your inventory, we’ll get the cost back for you."
  },
];

const paymentsDetails = [
  {
    label: 'Transaction Reconciliation',
    desc: "We reconcile all transactions per item to ensure accuracy in orders, returns, and reimbursements."
  },
  {
    label: 'Customer Refund Overages',
    desc: "When customers receive a larger refund than paid, we manage these discrepancies."
  },
  {
    label: 'Chargebacks',
    desc: "We address non-refunded chargebacks and ensure you aren't wrongfully charged."
  },
  {
    label: 'Inaccurate Order Refunds',
    desc: "We follow up on partial reimbursements to secure the full appropriate amount."
  },
  {
    label: 'Inaccurate Reimbursements',
    desc: "We track the exact reimbursement amounts to ensure you receive the full claim."
  }
];

const shipmentsDetails = [
  {
    label: 'Shipment Stock Counts',
    desc: "We recover costs for stock deducted after a shipment is closed."
  },
  {
    label: 'Damaged Shipments',
    desc: "We reclaim costs for inbound shipments damaged or not received."
  },
  {
    label: 'Inventory Adjustments',
    desc: "We secure reimbursements for returns damaged by a carrier or Amazon."
  },
];

const overchargesDetails = [
  {
    label: 'Restocking Fees',
    desc: "We find orders returned over 30 days and reclaim the 20% restocking fee per policy."
  },
  {
    label: 'Weight and Dimension Fees',
    desc: "We get refunds for overcharged weight or dimensional fees."
  },
  {
    label: 'Commission Fees',
    desc: "We identify and reclaim overcharged commission fees on products."
  },
  {
    label: 'Missing Removal Orders',
    desc: "We reclaim costs for removal orders not received, helping reduce your monthly fees."
  },
];

const returnOnInvestmenData = [
  {
    title: 'Free \n Audit',
    desc: "Get a free, no-obligation audit with a recovery estimate delivered in 8-10 hours.",
    img: '/free-audit.svg'
  },
  {
    title: 'Traceable \n Funds',
    desc: "Enjoy 100% traceable funds transfer, ensuring transparency & accountability in every transaction.",
    img: '/traceable-funds.svg'
  },
  {
    title: 'Precision in \n Recovery',
    desc: "Trace funds that others may miss, ensuring you receive every eligible reimbursement.",
    img: '/precision-recovery.svg'
  },
  {
    title: 'Personal \n Recovery Agent',
    desc: "When customers receive a larger refund than they paid, and you get charged, we handle this.",
    img: '/personal-recovery.svg'
  },
];

const easyRefundData = [
  {
    label: 'Sign Up',
    desc: "Get started with a zero-cost, no-obligation audit and receive a report on available refunds.",
    img: '/process-sign-up.svg'
  },
  {
    label: 'Connect Your Accounts',
    desc: "We access your accounts to import and audit your FBA transactions.",
    img: '/connect-account.svg'
  },
  {
    label: 'Assign a Recovery Agent',
    desc: "Our dedicated recovery agent handles your case.",
    img: '/recovery-agent.svg'
  },
  {
    label: 'Audit Potential Claims',
    desc: "We review products, inventory, orders, and returns eligible for reimbursement claims.",
    img: '/potential-claims.svg'
  },
  {
    label: 'File Your Cases On Your Behalf',
    desc: "You receive a detailed report on money returns against each case.",
    img: '/file-cases.svg'
  },
  {
    label: 'Get Your Money',
    desc: "Reimbursements are deposited directly into your seller accounts. Easy peasy!",
    img: '/get-money.svg'
  },
];

const frequentquestion = [
  {
    id: 1,
    title: "How far can you go back to collect reimbursements for me?",
    content:
      "Our Amazon reimbursement specialists can submit up to 18 months old Amazon FBA reimbursement cases offering in-depth refund audits and reports.  Besides, the time may depend on your FBA reimbursement case.",
  },
  {
    id: 2,
    title: "What types of cases do you cover for FBA sellers?",
    content: (
      <div>
        Following are various FBA seller refund claims we cover:
        <ul>
          <li>Lost inventory </li>
          <li>Unfulfillable inventory refunds</li>
          <li>FBA overcharged fees</li>
          <li>FBA inventory reconciliation</li>
          <li>Amazon FBA refunds</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "Will Amazon automatically refund the lost package?",
    content:
      "No, Amazon does not automatically refund the lost package as it cannot track the package. Instead, it considers the order “late” and/or “undelivered”. Your lost package is however eligible for reimbursement via the “request a refund” option. The amount is then auto-refunded as Amazon takes full responsibility for order fulfillment issues. ",
  },
  {
    id: 4,
    title: "How long does Amazon reimbursement take?",
    content:
      "The Amazon refund process may take up to 5 to 7 business days on your original payment method. If you are an Amazon third-party seller who does not see “Refunded” in the refund status and the time limit has been exceeded,  you can simply contact our Amazon refunds manager for further assistance.",
  },
  {
    id: 5,
    title: "Why do you take a percentage of the reimbursed revenue?",
    content:
      "Our FBA auditors perform the daunting task of recovering lost revenue and making sure you receive every penny back in your bank account, therefore, deserve to be rewarded in the form of compensation.",
  },
];

const footerlinksPrimary = [
  {
    id: 1,
    name: "About",
    to: "#about-section",
  },
  {
    id: 2,
    name: "How we work",
    to: "#work-section",
  },
  {
    id: 3,
    name: "Pricing",
    to: "#pricing-section",
  },
  {
    id: 4,
    name: "FAQ’s",
    to: "#faq-section",
  },
  {
    id: 5,
    name: "Support",
    to: "#support-section",
  },
  {
    id: 6,
    name: "Terms & Conditions",
    to: "#terms",
  },
  {
    id: 7,
    name: "FBA Cases",
    to: "#fba-cases",
  },
  {
    id: 8,
    name: "Features",
    to: "#features",
  },
  {
    id: 8,
    name: "Affiliate Program",
    to: "#affiliate-progmram",
  },
];

const fbaFeesData = [
  {
    heading: 'Refunds',
    img: '/refund-img.svg',
    data: refundDetails
  },
  {
    heading: 'Inventory ',
    img: '/inventory-img.svg',
    data: inventoryDetails
  },
  {
    heading: 'Payments',
    img: '/payments-img.svg',
    data: paymentsDetails
  },
  {
    heading: 'Shipments',
    img: '/shipments-img.svg',
    data: shipmentsDetails
  },
  {
    heading: 'Fees and Overcharges',
    img: '/overcharges-img.svg',
    data: overchargesDetails
  },
];

const ourCommitmentData = [
  {
    title: 'Comprehensive FBA Reimbursements',
    desc: "We meticulously audit your Amazon transactions to uncover lost revenue and discrepancies. Our advanced software and dedicated recovery team ensure you receive the maximum reimbursements.",
    img: '/fba-reimbursement.svg'
  },
  {
    title: 'Transparent and Traceable',
    desc: "Our easy-to-use dashboard provides real-time updates on every claim to help you stay informed about the status of your reimbursements. We ensure complete transparency and traceability in all transactions.",
    img: '/traceable.svg'
  },
  {
    title: 'Amazon Compliance',
    desc: "We strictly adhere to Amazon’s Terms of Service, ensuring all our processes are compliant and risk-free. Our team stays updated with the latest Amazon policies to protect your account and reputation.",
    img: '/amazon-compliance.svg'
  },
  {
    title: 'No Upfront Fees',
    desc: "Our success is tied to yours. We operate on a contingency basis, meaning you don’t pay unless you receive your refunds. This performance-based model ensures our goals are aligned with yours.",
    img: '/upfront-fees.svg'
  },
];

const ourServicesData = [
  {
    label: 'Free, No-Obligation Audit',
    desc: "Get started with a complimentary audit of your Amazon account. We’ll provide you with a recovery estimate within 8-10 hours.",
    img: '/no-obligation-audit.png'
  },
  {
    label: 'Full-Suite Reimbursement Services',
    desc: "From fees and orders to inventory and returns, we handle all FBA reimbursement claims. Our comprehensive service covers every aspect of your Amazon business.",
    img: '/reimbursement-services.png'
  },
  {
    label: 'Dedicated Support',
    desc: "Each seller is assigned a personal recovery agent who provides tailored assistance and support. Our team is always ready to answer your questions and help you navigate the reimbursement process.",
    img: '/dedicated-support.png'
  }
];

const whyChooseData = [
  {
    title: 'Proven Track \n Record',
    desc: "Join over 1,000 sellers, brands, and aggregators who have successfully recovered their money with our help. We have a 99% success rate and have recovered over $1M in funds.",
    img: '/track-record.svg'
  },
  {
    title: 'Expertise and \n Innovation',
    desc: "Our team combines expertise with cutting-edge technology to deliver the best results. We continuously refine our processes to stay ahead of the curve.",
    img: '/expertise.svg'
  },
  {
    title: 'Seller-Centric \n Approach',
    desc: "Your success is our priority. We are committed to providing exceptional service and support, helping you reclaim your money and reinvest it into growing your business.",
    img: '/seller-centric.svg'
  },
];

export {
  headerMenu,
  testimonialData,
  refundDetails,
  inventoryDetails,
  paymentsDetails,
  shipmentsDetails,
  overchargesDetails,
  returnOnInvestmenData,
  easyRefundData,
  frequentquestion,
  footerlinksPrimary,
  fbaFeesData,
  ourCommitmentData,
  ourServicesData,
  whyChooseData
};
