import * as React from "react";
import { Row, Col, Container } from "react-bootstrap";
// components for home page
import Layout from "../layout";

const IndexPage = () => (
  <Layout>
    <Container>
      <div className="p-4 text-center">
        <h3>Landing page code here</h3>
      </div>
    </Container>
  </Layout>
);

export const Head = () => <title>Home Page</title>;

export default IndexPage;
