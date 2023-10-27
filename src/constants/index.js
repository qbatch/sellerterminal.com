import React from "react";
const headerMenu = [
  {
    name: "About",
    to: "#about-section",
  },
  {
    name: "How we work",
    to: "#work-section",
  },
  {
    name: "Pricing",
    to: "#pricing-section",
  },
  {
    name: "FAQs",
    to: "#faq-section",
  },
  {
    name: "Support",
    to: "#support-section",
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
    name: "Discover Phase",
    to: "#faq-section",
  },
  {
    id: 5,
    name: "Support",
    to: "#support-section",
  },
  {
    id: 6,
    name: "FAQ’s",
    to: "#faq-section",
  },
];
const challengeList = [
  "FBA overcharged fees",
  "Amazon FBA Refunds",
  "Changes Size & Dimension",
  "Customer Returns",
  "Order Quantity Issues",
  "Overchanges FBA Fees",
  "Lost Inventory",
  "FBA Removals",
  "Damaged Inventory",
  "Missing Inbound Inventory",
  "Missing Inbound Inventory",
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

export { headerMenu, footerlinksPrimary, challengeList, frequentquestion };
