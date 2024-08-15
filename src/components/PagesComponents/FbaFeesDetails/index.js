import React from 'react';
import { Col, Row } from 'react-bootstrap';

import FeesDetailsWrapper from './style';

const Index = (props) => {
  const {heading, img, feeDetails} = props;

  return (
    <FeesDetailsWrapper>
      <Row>
        <Col md={6}>
          <div className='fee-details'>
            <h3>{heading}</h3>
            {feeDetails.map((data, ind)=> (
              <div key={ind}>
                <label>{data.label}</label>
                <span>{data.desc}</span>
              </div>
            ))}
          </div>
        </Col>
        <Col md={6}>
          {img}
        </Col>
      </Row>
    </FeesDetailsWrapper>
  )
}

export default Index;
