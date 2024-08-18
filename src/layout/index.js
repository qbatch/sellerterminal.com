import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

import { ThemeProvider } from "styled-components";
import Theme from "../theme/theme-variable";
import GlobalStyle from "../theme/global-style";

import Header from "../components/PagesComponents/Header";
import Footer from "../components/PagesComponents/Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-BNQQQD2B');`}
        </script>
        {/* End Google Tag Manager */}

        {/* Schema  */}
        <script type="application/ld+json">
          {`{
                "@context":"https://schema.org",
                "@type":"WebApplication",
                "name":"Seller Terminal",
                "url":"https://sellerterminal.com/",
                "@id":"https://sellerterminal.com/#webapplication",
                "browserRequirements":["requires HTML5 support","requires JavaScript"],
                "sameAs":"https://app.sellerterminal.com",
                "applicationCategory":"BusinessApplication",
                "permissions":"may run only with an active internet connection",
                "copyrightHolder":{
                    "@type":"Organization",
                    "name":"Seller Terminal",
                    "alternateName":"Seller Terminal",
                    "@id":"https://sellerterminal.com#organization",
                    "logo":"https://images.saasworthy.com/tr:w-178,h-0/sellerterminal_46504_logo_1701322647_z4yde.png",
                    "email":"support@sellerterminal.com",
                    "address":{
                        "@type":"PostalAddress",
                        "addressCountry":"USA",
                        "postalCode":"82801",
                        "streetAddress":"1309 Coffeen Avenue STE 1200, Sheridan, WY"
                    },
                    "founder":{
                        "@type":"Person",
                        "name":"Ibrahim Zahoor",
                        "alternateName":"Ibrahim Zahoor",
                        "jobTitle":"CEO",
                        "image":"https://avatars.githubusercontent.com/u/5284421",
                        "sameAs":[
                            "https://www.instagram.com/ibrahimzahoor/r",
                            "https://www.linkedin.com/in/ibrahimzahoor/"]
                    },
                    "sameAs":[
                        "https://hashnode.com/@ibrahimzahoor",
                  "https://about.me/ibrahimzahoor",
                    "https://github.com/ibrahimzahoor",
                  "https://www.linkedin.com/in/ibrahimzahoor/",
                    "https://www.instagram.com/ibrahimzahoor/"]
                },
                "maintainer":{"@id":"https://qbatch.com.com#organization"},
                "publisher":{"@id":"https://qbatch.com.com#organization"},
                "offers":{
                "@type":"AggregateOffer",
                "highPrice":"20% commission on successful refunds",
                "priceCurrency":"USD",
                "offers":[
                    {
                    "@type":"Offer",
                    "priceSpecification":
                        {
                        "@type":"UnitPriceSpecification",
                        "price":"20% commission on successful refunds",
                        "priceCurrency":"USD",
                        "name":"Seller Terminal Pricing Model",
                        "url":"https://app.sellerterminal.com/",
                        "referenceQuantity":{
                                "@type":"QuantitativeValue",
                                "value":"1",
                                "unitCode":"MON"
                            }
                        }
                  
                    }
                ]   
            }
            }`}
        </script>
        {/* Schema  */}

        {/* Schema  */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Seller Terminal",
          "url": "https://sellerterminal.com/",
          "sameAs": [
            "https://sourceforge.net/software/product/Seller-Terminal/",
            "https://www.crowdreviews.com/seller-terminal",
            "https://www.producthunt.com/posts/seller-terminal",
            "https://www.crunchbase.com/organization/seller-terminal",
            "https://alternativeto.net/software/seller-terminal/about/",
            "https://www.saashub.com/seller-terminal",
            "https://www.saasworthy.com/product/seller-terminal",
            "https://twitter.com/sellerterminal"
          ],
          "description": "Join 1000+ sellers, brand owners, and warehouses who recovered their money with our reimbursement recovery services. Get your first $500 for free.",
          "image": "https://sellerterminal.com/static/8674cf93a6b6c1cc4e66f79806fd3de7/37bd5/banner-img.png",
          "additionalType": "",
          "alternateName": "Seller Terminal",
          "copyrightHolder": {
            "@type": "Organization",
            "logo": {
              "@type": "ImageObject",
              "url": "https://media.licdn.com/dms/image/C560BAQEMDcovSIKDog/company-logo_200_200/0/1631308862108?e=2147483647&v=beta&t=MV2-TpZS4hmoQmpygWlxQQBrnZ8UmuqX0REjPGHa5YQ",
              "height": "200",
              "width": "200"
            },
            "name": "Qbatch",
            "url": "https://qbatch.com",
            "image": "https://pbs.twimg.com/media/F5-gYojXIAAEM7L.jpg",
            "sameAs": [
              "https://www.pinterest.com/QbatchLLC/",
              "https://linkedin.com/company/qbatch",
              "https://www.instagram.com/qbatch/",
              "https://twitter.com/qbatchofficial",
              "https://www.facebook.com/qbatch/"
            ],
            "alternativeName": ""
          },
          "dateCreated": "2020-01-01T00:00:00.000Z",
          "headline": "Your Amazon Reimubursemnets Case Advocate!",
          "keywords": "Seller Terminal, Amazon Seller Reimbursement Services, Automated Amazon Seller Reporting, FBA overcharged fees, Amazon FBA audit, FBA auditor, Amazon seller refunds, Lost inventory reimbursement",
          "mainEntityOfPage": "https://sellerterminal.com/"
        }`}
        </script>

        {/* Schema  */}
      </Helmet>
      <GlobalStyle />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-BNQQQD2B"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="googletagmanager"
        ></iframe>
      </noscript>
      {/*  End Google Tag Manager (noscript) */}
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
