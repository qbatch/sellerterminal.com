import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InlineWidget } from "react-calendly";

import RespondWrapper from "./style";
const WeRespond = () => {
  // useEffect(() => {
  //   // This code runs after the component has mounted

  //   const iframe = document.querySelector(".calendly-inline-widget iframe");
  //   console.log(iframe.contentWindow);

  //   if (iframe) {
  //     // Wait for the iframe's content to load
  //     iframe.addEventListener("load", () => {
  //       // Define a message
  //       const message = {
  //         type: "style",
  //         selector: "body", // The selector for the element to style
  //         styles: {
  //           backgroundColor: "red",
  //         },
  //       };

  //       // Send the message to the iframe's content
  //       iframe.contentWindow.postMessage(message, "*"); // '*' indicates all origins are accepted
  //     });
  //   }
  // }, []);
  // Find the iframe within .iframeContainer
  // useEffect(() => {
  //   const iframe = document.querySelector(".calendly-container iframe");

  //   const onLoad = () => {
  //     const iframeDocument =
  //       iframe.contentDocument || iframe.contentWindow?.document;

  //     const headElement = iframeDocument.querySelector("head");

  //     // Create a <style> element and add your CSS rules
  //     const css =
  //       "#root .lmtWIHO_gkbTeeyuvoJC .xahN8AEzyAvQtVj17TPv { justify-content:end!important;padding-right:0!important; }";
  //     const styleElement = document.createElement("style");
  //     styleElement.setAttribute("type", "text/css");
  //     styleElement.appendChild(document.createTextNode(css));

  //     // Append the <style> element to the iframe's <head>
  //     headElement.appendChild(styleElement);
  //   };

  //   if (iframe) {
  //     iframe.addEventListener("load", onLoad);
  //   }

  //   return () => {
  //     if (iframe) {
  //       iframe.removeEventListener("load", onLoad);
  //     }
  //   };
  // }, []);

  return (
    <>
      <RespondWrapper className="st-section">
        <Container className="custom-container">
          <Row>
            <Col md={4}>
              <div className="section-head">
                <h4>Calendly Scheduler</h4>
                <h2>
                  We Respond Fast.{" "}
                  <span>Share Your Problem And We’ll Help!</span>
                </h2>
              </div>
            </Col>
            <Col md={8}>
              <div className="calendly-container">
                <InlineWidget
                  url="https://calendly.com/aliimran2007i/introductory-call?hide_gdpr_banner=1"
                  styles={{
                    height: "700px",
                    width: "100%",
                    marginTop: "-66px",
                    marginLeft: "5%",
                    paddingRight: "0",
                    justifyContent: "end",
                  }}
                />
              </div>
              {/* <div id={calendarDivId}>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/aliimran2007i/introductory-call?hide_gdpr_banner=1"
                  style={{ minWidth: "1000px", height: "700px" }}
                />
              </div> */}

              {/* <div
                class="calendly-inline-widget"
                data-url="https://calendly.com/aliimran2007i/introductory-call"
                style="min-width:320px;height:700px;"
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script> */}
            </Col>
          </Row>
        </Container>
      </RespondWrapper>
    </>
  );
};

export default WeRespond;
